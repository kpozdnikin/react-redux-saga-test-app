import { GET_FLIGHTS, SUMBIT_NEW_FLIGHT, RESET_NEW_FLIGHT } from './constants';

/**
 * Load the flights, this action starts the request saga
 * @param  {array} limit
 * @param  {string} offset
 * @return {object} An action object with a type of GET_FLIGHTS
 */
export function getFlights(limit, offset) {
  return {
    payload: { limit, offset },
    type: GET_FLIGHTS,
  };
}

/**
 * Submit form values
 * @param  {array} data - form values
 * @return {object} An action object with a type of SUMBIT_NEW_FLIGHT
 */
export function submit(data) {
  console.log('data', data, typeof data);
  return {
    payload: data,
    type: SUMBIT_NEW_FLIGHT,
  };
}

/**
 * Reload initial values
 * @return {object} An action object with a type of RESET_NEW_FLIGHT
 */
export function reset() {
  return {
    payload: {},
    type: RESET_NEW_FLIGHT,
  };
}
