import React from 'react';
import styled from 'styled-components';
import { Container } from '@material-ui/core';
import { MainPageTheme } from 'src/renderer/components/theme';
import Header from 'src/renderer/components/Header';
import RoleSelecter from 'src/renderer/components/RoleSelecter';
import GameCard from 'src/renderer/components/GameCard';
import { RecentGamesStoreContainer } from 'src/renderer/containers/RecentGamesStore';
import MyButton from 'src/renderer/components/MyButton';
import ScaleLoader from 'react-spinners/ScaleLoader';

// import {
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   fakerMatch,
//   faker3901480925
// } from 'src/renderer/views/RecentGames/fakerMatchMock';

const MarginContainer = styled.div`
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

const MyButtonContainer = styled.div`
  margin-top: 1em;
  min-width: 200px;
  align-self: center;
`;

const Home = (): JSX.Element => {
  const store = RecentGamesStoreContainer.useContainer();

  return (
    <MainPageTheme>
      <MarginContainer>
        <PageContainer>
          <HeaderContainer>
            <Header>RECENT MATCH</Header>
            <RoleSelecter />
          </HeaderContainer>
          <GamesContainer>
            {store.games &&
              store.games.map(game => (
                <GameCard key={game.match.gameCreationUnix} game={game} />
              ))}
          </GamesContainer>
          <MyButtonContainer>
            <MyButton OnClick={() => console.log('clicked!')}>
              {store.isLoading ? null : 'LOAD'}
              <ScaleLoader
                height={16}
                color={'rgba(233, 231, 235, 1.0)'}
                loading={store.isLoading}
              />
            </MyButton>
          </MyButtonContainer>
        </PageContainer>
      </MarginContainer>
    </MainPageTheme>
  );
};

export default Home;
