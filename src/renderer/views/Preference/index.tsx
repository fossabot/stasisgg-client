import React from 'react';
import styled from 'styled-components';
import { MainPageTheme } from 'src/renderer/components/theme';
import { Container, MenuItem } from '@material-ui/core';
import Header from 'src/renderer/components/Header';
import InputField from 'src/renderer/components/InputField';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MyButton from 'src/renderer/components/MyButton';

const MarginContainer = styled.div`
  height: calc(100vh - 4em);
  margin: 2em 0 2em 0;
  display: flex;
  flex-direction: column;
`;

const ProfileContainer = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
`;

const FormContainer = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const FormRowContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledFormControl = styled(FormControl)`
  padding-left: 16px;
  min-width: auto;
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

const MyButtonContainer = styled.div`
  min-width: 200px;
  align-self: center;
  margin-top: auto;
`;

interface Region {
  value: string;
  displayName: string;
}

const Preference = (): JSX.Element => {
  const [region, setRegion] = React.useState('NA');
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>): void => {
    setRegion(event.target.value as string);
  };
  const regions: Region[] = [
    { value: 'BR', displayName: 'BR' },
    { value: 'EUNE', displayName: 'EUNE' },
    { value: 'EUW', displayName: 'EUW' },
    { value: 'JP', displayName: 'JP' },
    { value: 'KR', displayName: 'KR' },
    { value: 'LAN', displayName: 'LAN' },
    { value: 'LAS', displayName: 'LAS' },
    { value: 'NA', displayName: 'NA' },
    { value: 'OCE', displayName: 'OCE' },
    { value: 'TR', displayName: 'TR' },
    { value: 'RU', displayName: 'RU' }
  ];
  const regionItems = regions.map(region => (
    <MenuItem key={region.value} value={region.value}>
      {region.displayName}
    </MenuItem>
  ));

  return (
    <MainPageTheme>
      <MarginContainer>
        <Container fixed style={{ height: '100%' }}>
          <FormContainer>
            <Header>PREFERENCE</Header>
            <ProfileContainer>
              <Header sub>Profile</Header>
              <FormRowContainer>
                <InputField label="Summoner Name" />
                <StyledFormControl variant="outlined">
                  <StyledSelect value={region} onChange={handleChange}>
                    {regionItems}
                  </StyledSelect>
                </StyledFormControl>
              </FormRowContainer>
            </ProfileContainer>
            <MyButtonContainer>
              <MyButton>APPLY</MyButton>
            </MyButtonContainer>
          </FormContainer>
        </Container>
      </MarginContainer>
    </MainPageTheme>
  );
};

export default Preference;
