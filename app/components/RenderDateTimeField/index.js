import React from 'react';
import PropTypes from 'prop-types';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker,
} from 'material-ui-pickers';

const RenderTextField = props => {
  const { handleDateChange, selectedDate } = props;
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container className="test-app-grid" justify="space-around">
        <DatePicker
          margin="normal"
          label="Date picker"
          value={selectedDate}
          onChange={handleDateChange}
        />
        <TimePicker
          margin="normal"
          label="Time picker"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
};

RenderTextField.propTypes = {
  handleDateChange: PropTypes.func.isRequired,
  selectedDate: PropTypes.string,
};

RenderTextField.defaultProps = {
  selectedDate: null,
};

export default RenderTextField;
