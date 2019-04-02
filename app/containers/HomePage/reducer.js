import { fromJS, List, Map } from 'immutable';
import {
  GET_FLIGHTS_SUCCESS,
  GET_FLIGHTS_ERROR,
  GET_FLIGHTS_BY_URL,
} from './constants';

// The initial state of the HomePage
const initialState = fromJS({
  flights: Map({
    cheap: List(),
    business: List(),
  }),
  loading: false,
  error: false,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FLIGHTS_BY_URL:
      return state.set('loading', true);
    case GET_FLIGHTS_SUCCESS: {
      const { url, data = [] } = action.payload;
      return state.set('loading', false).setIn(['flights', url], fromJS(data));
    }
    case GET_FLIGHTS_ERROR: {
      return state.set('loading', false).set('error', true);
    }
    default:
      return state;
  }
}

export default homeReducer;
