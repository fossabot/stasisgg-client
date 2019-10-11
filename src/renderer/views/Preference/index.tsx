/* eslint-disable @typescript-eslint/camelcase */
import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { PathReporter } from 'io-ts/lib/PathReporter';
import { useSnackbar } from 'notistack';
import { MainPageTheme } from 'src/renderer/components/theme';
import { Container, MenuItem } from '@material-ui/core';
import ScaleLoader from 'react-spinners/ScaleLoader';
import Header from 'src/renderer/components/Header';
import InputField from 'src/renderer/components/InputField';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MyButton from 'src/renderer/components/MyButton';
import WarningSharpIcon from '@material-ui/icons/WarningSharp';
import store, { StoreSchema } from 'src/renderer/PersistentStore';
import { API, PlayerProfileResponse } from 'src/renderer/API';

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
  min-width: 80px;
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
    { value: 'br', displayName: 'BR' },
    { value: 'eune', displayName: 'EUNE' },
    { value: 'euw', displayName: 'EUW' },
    { value: 'jp', displayName: 'JP' },
    { value: 'kr', displayName: 'KR' },
    { value: 'lan', displayName: 'LAN' },
    { value: 'las', displayName: 'LAS' },
    { value: 'na', displayName: 'NA' },
    { value: 'oce', displayName: 'OCE' },
    { value: 'tr', displayName: 'TR' },
    { value: 'ru', displayName: 'RU' }
  ];
  const regionItems = regions.map(region => (
    <MenuItem key={region.value} value={region.value}>
      {region.displayName}
    </MenuItem>
  ));

  const settings = store.getAll();
  const persistentState: StoreSchema = {
    region: settings.region,
    summoner_name: settings.summoner_name,
    summoner_id: settings.summoner_id
  };

  const [state, updateInputState] = useState<State>({
    isChanged: false,
    ...persistentState
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
      updateInputState(prev => ({
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
    updateInputState(prev => ({
      ...prev,
      region: event.target.value
    }));
  };

  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonOnClick = async (): Promise<void> => {
    setIsLoading(true);
    const res = await axios
      .get(API.getPlayerProfile, {
        params: {
          region: state.region,
          summonerName: state.summoner_name
        }
      })
      .catch(error => {
        console.log(error.response);
        if (error.response.status === 404) {
          enqueueSnackbar('Invalid Summoner Name.', { variant: 'error' });
        }
      });
    if (res) {
      if (PlayerProfileResponse.is(res.data)) {
        console.log('response', res.data);
        store.saveAll({
          region: state.region,
          summoner_id: res.data.message.summonerId,
          summoner_name: res.data.message.summonerName
        });
        console.log(store.getAll());
        updateInputState(prev => ({
          ...prev,
          isChanged: false
        }));
        enqueueSnackbar('Settings have been saved.', { variant: 'success' });
      } else {
        console.log(
          PathReporter.report(PlayerProfileResponse.decode(res.data))
        );
      }
    }
    setIsLoading(false);
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
                  value={state.summoner_name}
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
              <MyButton OnClick={handleButtonOnClick}>
                {isLoading ? null : 'APPLY'}
                <ScaleLoader
                  height={16}
                  color={'rgba(233, 231, 235, 1.0)'}
                  loading={isLoading}
                />
              </MyButton>
            </MyButtonContainer>
          </FormContainer>
        </Container>
      </MarginContainer>
    </MainPageTheme>
  );
};

export default Preference;
