import { fromJS, List } from 'immutable';
import {
  GET_FLIGHTS_SUCCESS,
  GET_FLIGHTS_ERROR,
} from './constants';

// The initial state of the HomePage
const initialState = fromJS({
  flights: List(),
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FLIGHTS_SUCCESS:
      console.log('GET_FLIGHTS_SUCCESS', action.payload);
      // Delete prefixed '@' from the github username
      return state.set('username', action.name.replace(/@/gi, ''));
    default:
      return state;
  }
}

export default homeReducer;
