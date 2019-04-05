import React from 'react';
import TextField from '@material-ui/core/TextField';

const RenderTextField = props => {
  const {
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
  } = props;
  return (
    <TextField
      label={label}
      placeholder={label}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  );
};

export default RenderTextField;
