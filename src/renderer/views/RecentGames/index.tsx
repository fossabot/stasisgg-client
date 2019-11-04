import React from 'react';
import styled from 'styled-components';
import { Container } from '@material-ui/core';
import { MainPageTheme } from 'src/renderer/components/theme';
import Header from 'src/renderer/components/Header';
import RoleSelecter from 'src/renderer/components/RoleSelecter';
import GameCard from 'src/renderer/components/GameCard';
import { RecentGamesStoreContainer } from 'src/renderer/containers/RecentGamesStore';
// import {
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   fakerMatch,
//   faker3901480925
// } from 'src/renderer/views/RecentGames/fakerMatchMock';

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
  > * + * {
    margin-top: 0.5em;
  }
`;

const Home = (): JSX.Element => {
  const recentGmesStore = RecentGamesStoreContainer.useContainer();

  return (
    <MainPageTheme>
      <MarginContainer>
        <PageContainer>
          <HeaderContainer>
            <Header>RECENT MATCH</Header>
            <RoleSelecter />
          </HeaderContainer>
          <GamesContainer>
            {recentGmesStore.games &&
              recentGmesStore.games.map(game => (
                <GameCard key={game.match.gameCreationUnix} game={game} />
              ))}
          </GamesContainer>
        </PageContainer>
      </MarginContainer>
    </MainPageTheme>
  );
};

export default Home;
