import {
  GET_FLIGHTS,
} from './constants';

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
