import React from 'react';
import PropTypes from 'prop-types';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker,
} from 'material-ui-pickers';

const RenderDateTimeField = props => {
  const {
    input: { value, onChange },
  } = props;
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container className="test-app-grid" justify="space-around">
        <DatePicker
          margin="normal"
          label="Date picker"
          value={value || null}
          onChange={onChange}
        />
        <TimePicker
          margin="normal"
          label="Time picker"
          value={value || null}
          onChange={onChange}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
};

RenderDateTimeField.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func.isRequired,
  }).isRequired,
};

export default RenderDateTimeField;
