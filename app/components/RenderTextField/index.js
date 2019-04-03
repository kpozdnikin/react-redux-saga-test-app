import React from 'react';
import TextField from '@material-ui/core/TextField';

const RenderTextField = ({ label, input, meta: { touched, invalid, error }, ...custom}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

export default RenderTextField;