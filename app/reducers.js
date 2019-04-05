/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';
import { reducer as formReducer } from 'redux-form';
import globalReducer from './containers/App/reducer';
import HomeReducer from './containers/HomePage/reducer';

/**
 * Creates the main reducer with the dynamically injected ones
 */

const createReducer = history =>
  combineReducers({
    router: connectRouter(history),
    global: globalReducer,
    form: formReducer,
    home: HomeReducer,
  });

export default createReducer;
