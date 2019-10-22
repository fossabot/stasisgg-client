import React from 'react';
import styled from 'styled-components';
import { Container } from '@material-ui/core';
import { MainPageTheme } from 'src/renderer/components/theme';
import Header from 'src/renderer/components/Header';

const MarginContainer = styled.div`
  height: calc(100vh - 4em);
  margin: 2em 0 2em 0;
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

const GamesContainer = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
`;

const Home = (): JSX.Element => (
  <MainPageTheme>
    <MarginContainer>
      <Container fixed style={{ height: '100%' }}>
        <HeaderContainer>
          <Header>RECENT MATCH</Header>
        </HeaderContainer>
        <GamesContainer>Contents here</GamesContainer>
      </Container>
    </MarginContainer>
  </MainPageTheme>
);

export default Home;
