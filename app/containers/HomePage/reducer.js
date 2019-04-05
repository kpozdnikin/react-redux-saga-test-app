import { fromJS, List, Map } from 'immutable';
import hash from 'object-hash';
import moment from 'moment';
import {
  GET_FLIGHTS_SUCCESS,
  GET_FLIGHTS_ERROR,
  GET_FLIGHTS_BY_URL,
  SUMBIT_NEW_FLIGHT,
} from './constants';

// The initial state of the HomePage
const initialState = fromJS({
  flights: Map({
    cheap: List(),
    business: List(),
    custom: List(),
    all: List(),
  }),
  newFlight: Map({
    id: null,
    arrival: null,
    arrivalTime: null,
    departure: null,
    departureTime: null,
    flightType: null,
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
      const flights = state.get('flights').toJS();
      flights[url] = data;
      flights.all = concatFlights(flights);
      return state.set('loading', false).set('flights', fromJS(flights));
    }
    case GET_FLIGHTS_ERROR: {
      return state.set('loading', false).set('error', true);
    }
    case SUMBIT_NEW_FLIGHT: {
      const newFlight = {
        id: hash(action.payload),
        arrival: action.payload.arrival,
        arrivalTime: moment(action.payload.arrivalTime).format(
          'MM.DD.YY hh:mm',
        ),
        departure: action.payload.departure,
        departureTime: moment(action.payload.departureTime).format(
          'MM.DD.YY hh:mm',
        ),
        flightType: action.payload.flightType,
      };
      const customFlights = state.getIn(['flights', 'custom']).toJS();
      customFlights.push(newFlight);
      return state.setIn(['flights', 'custom'], fromJS(customFlights));
    }
    default:
      return state;
  }
}

/**
 * Concat flights of different types to one array of united type
 * @param  {array} flights
 * @return {object} An array of flight interfaces
 * */
function concatFlights(flights) {
  const all = [];
  flights.cheap.forEach(cheapFlight => {
    all.push({
      id: cheapFlight.id,
      arrival: cheapFlight.arrival,
      arrivalTime: moment(cheapFlight.arrivalTime).format('MM.DD.YY hh:mm'),
      departure: cheapFlight.departure,
      departureTime: moment(cheapFlight.departureTime).format('MM.DD.YY hh:mm'),
      flightType: 'cheap',
    });
  });
  flights.business.forEach(businesFlight => {
    all.push({
      id: businesFlight.uuid,
      arrival: businesFlight.flight.split('->')[0],
      arrivalTime: moment(businesFlight.arrival).format('MM.DD.YY hh:mm'),
      departure: businesFlight.flight.split('->')[1],
      departureTime: moment(businesFlight.departure).format('MM.DD.YY hh:mm'),
      flightType: 'business',
    });
  });
  return all.concat(flights.custom);
}

export default homeReducer;
