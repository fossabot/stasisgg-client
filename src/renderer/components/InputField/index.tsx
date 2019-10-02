import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    background: #2a2e32;
    height: 40px;
    color: rgba(233, 231, 235, 0.8);
    font-family: 'Roboto', 'Noto Sans JP', sans-serif;
    fieldset {
      border: 1px solid #4e5a67;
      border-radius: 3px;
    }
    &:hover fieldset {
      border: 1px solid #4e5a67;
    }
    &.Mui-focused fieldset {
      border: 1px solid #4e5a67;
    }
  }
  label {
    color: #4e5a67;
    font-size: 14px;
    letter-spacing: 0.1em;
    &.Mui-focused {
      color: #4e5a67;
    }
    transform: translate(14px, 14px) scale(1);
  }
`;

type InputFieldProps = {
  label: string;
  onChange: () => void | undefined;
};

const InputField: React.FC<InputFieldProps> = (props: InputFieldProps) => (
  <StyledTextField
    variant="outlined"
    label={props.label}
    fullWidth={true}
    onChange={props.onChange}
  />
);

export default InputField;
