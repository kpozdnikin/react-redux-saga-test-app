import React from 'react';
import PropTypes from 'prop-types';
import FormHelperText from '@material-ui/core/FormHelperText';

const RenderFromHelper = ({ touched, error }) => {
  if (touched || error) {
    return <FormHelperText>{touched && error}</FormHelperText>;
  }
  return <div />;
};

RenderFromHelper.propTypes = {
  touched: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
};

export default RenderFromHelper;
