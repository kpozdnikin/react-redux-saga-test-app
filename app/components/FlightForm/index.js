import { reduxForm } from 'redux-form/immutable';
import { connect } from 'react-redux';
import FlightForm from './FlightForm';
import { reset, submit } from '../../containers/HomePage/actions';

const WrappedForm = reduxForm({
  // a unique name for the form
  form: 'flightForm',
})(FlightForm);

function mapStateToProps(state) {
  const homeState = state.get('home');
  return {
    initialValues: homeState.get('newFlight'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: data => {
      dispatch(submit(data));
    },
    reset: () => {
      dispatch(reset());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedForm);
