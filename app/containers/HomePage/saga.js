/**
 * Flights saga
 */

import {
  call,
  put,
  // select,
  takeLatest,
  takeEvery,
} from 'redux-saga/effects';

import request from '../../utils/request';
import {
  GET_FLIGHTS,
  GET_FLIGHTS_SUCCESS,
  GET_FLIGHTS_ERROR,
  GET_FLIGHTS_BY_URL,
} from './constants';

/**
 * Get flights from provider
 */
export function* getFlightsByUrl(action) {
  console.log('getFlightsByUrl');
  const params = {
    method: 'get',
    url: `/${action.payload}`,
  };
  try {
    const flights = yield call(request, params);
    yield put({
      type: GET_FLIGHTS_SUCCESS,
      payload: {
        data: flights,
        url: action.payload,
      },
    });
  } catch (err) {
    yield put({
      type: GET_FLIGHTS_ERROR,
      payload: err,
    });
  }
}

/**
 * Load the flights, this action starts the request saga
 * @param  {array} action
 * @return {object} For better experience I need api description (params like limit, offset)
 */

export function* getFlights(action) {
  // const { limit = 0, offset = 5, filter } = action;
  const { filter } = action;
  if (!filter || filter === 'cheap') {
    yield put({
      type: GET_FLIGHTS_BY_URL,
      payload: 'cheap', // `https://obscure-caverns-79008.herokuapp.com/cheap?limit=${limit}&offset=${offset}`,
    });
  }
  if (!filter || filter === 'business') {
    yield put({
      type: GET_FLIGHTS_BY_URL,
      payload: 'business', // `https://obscure-caverns-79008.herokuapp.com/business?limit=${limit}&offset=${offset}`,
    });
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* flightsData() {
  yield takeLatest(GET_FLIGHTS, getFlights);
  yield takeEvery(GET_FLIGHTS_BY_URL, getFlightsByUrl);
}
