import { fromJS, List, Map } from 'immutable';
import {
  GET_FLIGHTS_SUCCESS,
  GET_FLIGHTS_ERROR,
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
    case GET_FLIGHTS_SUCCESS: {
      console.log('GET_FLIGHTS_SUCCESS', action.payload);
      const { url, data = [] } = action.payload;
      return state.setIn(['flights', url], fromJS(data));
    }
    case GET_FLIGHTS_ERROR: {
      console.log('GET_FLIGHTS_ERROR', action.payload);
      return state.set('error', true);
    }
    default:
      return state;
  }
}

export default homeReducer;
