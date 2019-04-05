/**
 * Create the store with dynamic reducers
 */
import { run } from '@cycle/run';
import { createCycleMiddleware } from 'redux-cycles';
import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { routerMiddleware } from 'connected-react-router/immutable';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';
import main from './main';
import homeSaga from './containers/HomePage/saga';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}, history) {
  // Cycles middleware helps to handle side effects
  const cycleMiddleware = createCycleMiddleware();
  const { makeActionDriver } = cycleMiddleware;

  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history),
    cycleMiddleware,
  ];

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

  const store = createStore(
    createReducer(history),
    fromJS(initialState),
    composeEnhancers(...enhancers),
  );

  run(main, {
    ACTION: makeActionDriver(),
  });

  // Extensions
  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {}; // Reducer registry
  store.injectedSagas = {}; // Saga registry
  sagaMiddleware.run(homeSaga);

  return store;
}
