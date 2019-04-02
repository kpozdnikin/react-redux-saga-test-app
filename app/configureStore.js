/**
 * Create the store with dynamic reducers
 */
import { run } from '@cycle/run';
import xs from 'xstream';
import { createCycleMiddleware } from 'redux-cycles';
import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

function main(sources) {
  const increment$ = sources.ACTION
    .filter(action => action.type === 'INCREMENT_ASYNC').mapTo({ type: 'INCREMENT' });

  const decrement$ = sources.ACTION
    .filter(action => action.type === 'DECREMENT_ASYNC').mapTo({ type: 'DECREMENT' });

  const both$ = xs
    .merge(increment$, decrement$)
    .map(d =>
      xs
        .periodic(500) // async
        .take(1)
        .mapTo(d),
    )
    .flatten();

  return {
    ACTION: both$,
  };
}

export default function configureStore(initialState = {}, history) {
  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  const enhancers = [applyMiddleware(...middlewares)];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ shouldHotReload: false })
      : compose;
  /* eslint-enable */

  const cycleMiddleware = createCycleMiddleware();
  const { makeActionDriver } = cycleMiddleware;

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    composeEnhancers(...enhancers),
    applyMiddleware(cycleMiddleware),
  );

  run(main, {
    ACTION: makeActionDriver(),
  });

  // Extensions
  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {}; // Reducer registry
  store.injectedSagas = {}; // Saga registry

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducer(store.injectedReducers));
      store.dispatch({ type: '@@REDUCER_INJECTED' });
    });
  }

  return store;
}
