import React from 'react';
import { Field } from 'redux-form/immutable';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import RenderTextField from '../RenderTextField';
import RenderSelectField from '../RenderSelectField';
import RenderDateTimeField from '../RenderDateTimeField';

/*
id: text,
arrival: Text,
arrivalTime: moment().format('MM.DD.YY hh:mm'),
departure: Text,
departureTime: moment().format('MM.DD.YY hh:mm'),
*/

const FlightForm = props => {
  const { handleSubmit } = props;
  const pristine = false;
  const submitting = false;
  const reset = () => {};
  return (
    <form onSubmit={handleSubmit}>
      <Grid container className="test-app-grid" justify="space-around">
        <Field name="arrival" component={RenderTextField} label="Arrival" />
      </Grid>
      <Grid container className="test-app-grid" justify="space-around">
        <Field
          name="arrivalTime"
          component={RenderDateTimeField}
          label="Arrival Time"
        />
      </Grid>
      <div>
        <Field name="departure" component={RenderTextField} label="Departure" />
      </div>
      <Grid container className="test-app-grid" justify="space-around">
        <Field
          name="departureTime"
          component={RenderDateTimeField}
          label="Departure Time"
        />
      </Grid>
      <Grid container className="test-app-grid" justify="space-around">
        <Field
          name="flightType"
          component={RenderSelectField}
          label="Type of flight"
        >
          <option value="" />
          <option value="cheap">Cheap</option>
          <option value="business">Business</option>
        </Field>
      </Grid>
      <Grid container className="test-app-grid" justify="space-around">
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </Grid>
    </form>
  );
};

FlightForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default FlightForm;
