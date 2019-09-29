import React from 'react';
import styled from 'styled-components';
import { MainPageTheme } from 'src/renderer/components/theme';
import { Container } from '@material-ui/core';
import Header from 'src/renderer/components/Header';

const MarginContainer = styled.div`
  margin: 2em 0 2em 0;
`;

const ProfileContainer = styled.div`
  padding: 1em;
`;

const Preference = (): JSX.Element => (
  <MainPageTheme>
    <MarginContainer>
      <Container fixed>
        <Header>PREFERENCE</Header>
        <ProfileContainer>
          <Header sub>Profile</Header>
        </ProfileContainer>
      </Container>
    </MarginContainer>
  </MainPageTheme>
);

export default Preference;
