import { connect } from 'react-redux';
import { getFlights } from '../../containers/HomePage/actions';
import FlightsList from './FlightsList';

function mapStateToProps(state) {
  console.log('state', state.toJS());
  return {
    flights: state
      .get('home')
      .get('flights')
      .toJS(),
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
