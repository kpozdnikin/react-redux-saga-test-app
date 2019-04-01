import { connect } from 'react-redux';
import { getFlights } from '../../containers/HomePage/actions';
import FlightsList from './FlightsList';

function mapStateToProps(state, ownProps) {
  // const globalState = state.get('global').toJS();
  // const elementId = ownProps.id;
  return {
  
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
