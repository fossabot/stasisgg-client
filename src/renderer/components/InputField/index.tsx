import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    background: #2a2e32;
    height: 40px;
    color: #e9e7eb;
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
};

const InputField: React.FC<InputFieldProps> = (props: InputFieldProps) => (
  <StyledTextField variant="outlined" label={props.label} />
);

export default InputField;
