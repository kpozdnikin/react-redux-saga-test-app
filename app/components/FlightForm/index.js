import { reduxForm } from 'redux-form/immutable';
import FlightForm from './FlightForm';

const WrappedForm = reduxForm({
  // a unique name for the form
  form: 'flightForm',
})(FlightForm);

export default WrappedForm;
