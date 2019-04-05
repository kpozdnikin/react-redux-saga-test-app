import { connect } from 'react-redux';
import { getFlights } from '../../containers/HomePage/actions';
import FlightsList from './FlightsList';

function mapStateToProps(state) {
  const homeState = state.get('home');
  return {
    flights: homeState.get('flights').toJS(),
    loading: homeState.get('loading'),
    error: homeState.get('error'),
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    getFlights: (limit, offset) => {
      dispatch(getFlights(limit, offset));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FlightsList);
