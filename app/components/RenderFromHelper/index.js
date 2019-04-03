import React from 'react';
import FormHelperText from '@material-ui/core/FormHelperText';

const RenderFromHelper = ({ touched, error }) => {
  if (touched || error) {
    return <FormHelperText>{touched && error}</FormHelperText>;
  }
  return <div />
};

export default RenderFromHelper;
