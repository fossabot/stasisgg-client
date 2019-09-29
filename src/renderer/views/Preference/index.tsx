import React from 'react';
import styled from 'styled-components';
import { MainPageTheme } from 'src/renderer/components/theme';
import { Container, MenuItem } from '@material-ui/core';
import Header from 'src/renderer/components/Header';
import InputField from 'src/renderer/components/InputField';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

const MarginContainer = styled.div`
  margin: 2em 0 2em 0;
`;

const ProfileContainer = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
`;

const FormRowContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledFormControl = styled(FormControl)`
  .MuiOutlinedInput-root {
    height: 40px;
    background: #2a2e32;
    color: rgba(233, 231, 235, 0.8);
    fieldset {
      border: 1px solid #4e5a67;
      border-radius: 3px;
    }
    svg {
      fill: rgba(233, 231, 235, 0.8);
    }
    &:hover fieldset {
      border: 1px solid #4e5a67;
    }
    &.Mui-focused fieldset {
      border: 1px solid #4e5a67;
    }
  }
`;

const StyledSelect = styled(({ className, ...props }) => (
  <Select {...props} MenuProps={{ classes: { paper: className } }} />
))`
  && {
    background-color: #2a2e32;
    color: rgba(233, 231, 235, 0.8);
  }
`;

const Preference = (): JSX.Element => {
  const [region, setRegion] = React.useState('NA');
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>): void => {
    setRegion(event.target.value as string);
  };
  return (
    <MainPageTheme>
      <MarginContainer>
        <Container fixed>
          <form>
            <Header>PREFERENCE</Header>
            <ProfileContainer>
              <Header sub>Profile</Header>
              <FormRowContainer>
                <InputField label="Summoner Name" />
                <StyledFormControl variant="outlined">
                  <StyledSelect value={region} onChange={handleChange}>
                    <MenuItem value={'JP'}>JP</MenuItem>
                    <MenuItem value={'NA'}>NA</MenuItem>
                  </StyledSelect>
                </StyledFormControl>
              </FormRowContainer>
            </ProfileContainer>
          </form>
        </Container>
      </MarginContainer>
    </MainPageTheme>
  );
};

export default Preference;
