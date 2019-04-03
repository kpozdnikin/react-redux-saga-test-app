import React from 'react';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import RenderFromHelper from '../RenderFromHelper';

const RenderSelectField = (props) => {
  const {
    input,
    label,
    meta: { touched, error },
    children,
    ...custom
  } = props;
  return (
    <FormControl error={touched && error}>
      <InputLabel htmlFor="age-native-simple">{label}</InputLabel>
      <Select
        native
        {...input}
        {...custom}
        inputProps={{
          name: 'age',
          id: 'age-native-simple',
        }}
      >
        {children}
      </Select>
      {RenderFromHelper({
        touched,
        error,
      })}
    </FormControl>
  );
};

export default RenderSelectField;
