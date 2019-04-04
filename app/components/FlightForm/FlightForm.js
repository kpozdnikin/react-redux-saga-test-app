import React from 'react';
import { Field } from 'redux-form/immutable';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import RenderTextField from '../RenderTextField';
import RenderSelectField from '../RenderSelectField';
import RenderDateTimeField from '../RenderDateTimeField';

/*
id: text,
arrival: Text,
arrivalTime: moment().format('MM.DD.YY hh:mm'),
departure: Text,
departureTime: moment().format('MM.DD.YY hh:mm'),
type: business/cheap
*/

const FlightForm = props => {
  const { handleSubmit } = props;
  const pristine = false;
  const submitting = false;
  const reset = () => {};
  return (
    <form onSubmit={handleSubmit} className="test-app-form">
      <Grid container className="test-app-grid" justify="space-around">
        <Field
          className="test-app-field"
          name="arrival"
          component={RenderTextField}
          label="Arrival"
        />
      </Grid>
      <Grid container className="test-app-grid" justify="space-around">
        <Field
          name="arrivalTime"
          component={RenderDateTimeField}
          label="Arrival Time"
        />
      </Grid>
      <Grid container className="test-app-grid" justify="space-around">
        <Field className="test-app-field" name="departure" component={RenderTextField} label="Departure" />
      </Grid>
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
      <Grid container className="test-app-grid buttons-row" justify="space-around">
        <Button type="submit" variant="contained" color="primary" disabled={pristine || submitting} >
          Submit
        </Button>
        <Button type="button" variant="contained" color="secondary" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </Button>
      </Grid>
    </form>
  );
};

FlightForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default FlightForm;
