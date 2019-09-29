import React from 'react';
import styled from 'styled-components';
import { MainPageTheme } from 'src/renderer/components/theme';
import { Container } from '@material-ui/core';
import Header from 'src/renderer/components/Header';
import InputField from 'src/renderer/components/InputField';

const MarginContainer = styled.div`
  margin: 2em 0 2em 0;
`;

const ProfileContainer = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
`;

const Preference = (): JSX.Element => (
  <MainPageTheme>
    <MarginContainer>
      <Container fixed>
        <Header>PREFERENCE</Header>
        <ProfileContainer>
          <Header sub>Profile</Header>
          <InputField label="Summoner Name" />
        </ProfileContainer>
      </Container>
    </MarginContainer>
  </MainPageTheme>
);

export default Preference;
