import React from 'react';
import styled from 'styled-components';
import { Container } from '@material-ui/core';
import { MainPageTheme } from 'src/renderer/components/theme';
import Header from 'src/renderer/components/Header';
import RoleSelecter from 'src/renderer/components/RoleSelecter';
import GameCard from 'src/renderer/components/GameCard';
import { fakerMatch } from 'src/renderer/views/RecentGames/fakerMatchMock';

const MarginContainer = styled.div`
  height: calc(100vh - 4em);
  margin: 2em 0 2em 0;
  display: flex;
  flex-direction: column;
`;

const PageContainer = styled(Container)`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1em;
  > * + * {
    margin-left: 2em;
  }
`;

const GamesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Home = (): JSX.Element => {
  return (
    <MainPageTheme>
      <MarginContainer>
        <PageContainer>
          <HeaderContainer>
            <Header>RECENT MATCH</Header>
            <RoleSelecter />
          </HeaderContainer>
          <GamesContainer>
            <GameCard game={fakerMatch} />
          </GamesContainer>
        </PageContainer>
      </MarginContainer>
    </MainPageTheme>
  );
};

export default Home;
