/* eslint-disable @typescript-eslint/camelcase */
import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { MainPageTheme } from 'src/renderer/components/theme';
import { Container, MenuItem } from '@material-ui/core';
import Header from 'src/renderer/components/Header';
import InputField from 'src/renderer/components/InputField';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MyButton from 'src/renderer/components/MyButton';
import WarningSharpIcon from '@material-ui/icons/WarningSharp';
import store from 'src/renderer/PersistentStore';

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

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1em;
  * + * {
    margin-left: 16px;
  }
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

type State = {
  isChanged: boolean;
  region: string;
  summoner_name: string;
  summoner_id: string;
};

const Preference = (): JSX.Element => {
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

  const settings = store.getAll();
  const persistentState: Omit<State, 'isChanged'> = {
    region: settings.region,
    summoner_name: settings.summonerName,
    summoner_id: settings.summonerId
  };

  const [state, update] = useState<State>({
    isChanged: false,
    region: 'NA',
    summoner_name: '',
    summoner_id: ''
  });
  const onChangeInputText = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      let isInputChanged = false;
      if (event.target.value !== persistentState[event.target.name]) {
        isInputChanged = true;
      } else {
        isInputChanged = false;
      }
      event.persist();
      update(prev => ({
        ...prev,
        [event.target.name]: event.target.value,
        isChanged: isInputChanged
      }));
    },
    [persistentState]
  );

  const handleSelectChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    update(prev => ({
      ...prev,
      region: event.target.value
    }));
  };

  return (
    <MainPageTheme>
      <MarginContainer>
        <Container fixed style={{ height: '100%' }}>
          <FormContainer>
            <HeaderContainer>
              <Header>PREFERENCE</Header>
              {state.isChanged && (
                <WarningSharpIcon htmlColor="rgba(199, 171, 110, 0.8)" />
              )}
            </HeaderContainer>
            <ProfileContainer>
              <HeaderContainer>
                <Header sub>Profile</Header>
              </HeaderContainer>
              <FormRowContainer>
                <InputField
                  name="summoner_name"
                  label="Summoner Name"
                  onChange={onChangeInputText}
                />
                <StyledFormControl variant="outlined">
                  <StyledSelect
                    value={state.region}
                    onChange={handleSelectChange}
                  >
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
