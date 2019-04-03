import { reduxForm } from 'redux-form';
import FlightForm from './FlightForm';

FlightForm = reduxForm({
  // a unique name for the form
  form: 'flightForm',
})(FlightForm);

export default FlightForm;
