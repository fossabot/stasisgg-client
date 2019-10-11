import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const StyledButton = styled(Button)`
  &.MuiButton-outlined {
    height: 34px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 3px;
  }
  .MuiButton-label {
    font-family: 'Raleway';
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0.15em;
    color: rgba(255, 255, 255, 0.8);
  }
`;

type MyButtonProps = {
  children: React.ReactNode;
  OnClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const MyButton: React.FC<MyButtonProps> = (props: MyButtonProps) => (
  <StyledButton variant="outlined" fullWidth={true} onClick={props.OnClick}>
    {props.children}
  </StyledButton>
);

export default MyButton;
