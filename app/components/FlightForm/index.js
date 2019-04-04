import { reduxForm } from 'redux-form/immutable';
import { connect } from 'react-redux';
import FlightForm from './FlightForm';

const WrappedForm = reduxForm({
  // a unique name for the form
  form: 'flightForm',
  enableReinitialize: true,
})(FlightForm);

export default WrappedForm;

// function mapStateToProps() {
//   return {
//   };
// }

// export default connect(
//   mapStateToProps,
// )(WrappedForm);