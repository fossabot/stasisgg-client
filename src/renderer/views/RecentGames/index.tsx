import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container } from '@material-ui/core';
import axios from 'axios';
import { MainPageTheme } from 'src/renderer/components/theme';
import Header from 'src/renderer/components/Header';
import RoleSelecter from 'src/renderer/components/RoleSelecter';
import GameCard from 'src/renderer/components/GameCard';
import {
  API,
  matchesResponse,
  OneMatchCardResponse,
  OneMatchCardType
} from 'src/renderer/API';
import { PersistentStoreContainer } from 'src/renderer/containers/PersistentStore';
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
`;

const getOneMatchCard = async (
  region: string,
  summonerId: string,
  gameId: number
): Promise<OneMatchCardType> => {
  return new Promise((resolve, reject): void => {
    axios
      .get(API.getOneMatchCard, {
        params: {
          region: region,
          summonerId: summonerId,
          gameId: gameId
        }
      })
      .then(r => {
        if (OneMatchCardResponse.is(r.data)) {
          resolve(r.data.message);
        } else {
          throw new Error('invalid response');
        }
      })
      .catch(e => reject(e.response));
  });
};

const Home = (): JSX.Element => {
  const profile = PersistentStoreContainer.useContainer();
  const [gameIds, setGameIds] = useState([0]);
  const [games, setGames] = useState<OneMatchCardType[]>();
  useEffect(() => {
    async function getGameIds(): Promise<void> {
      const ids = await axios.get(API.getMatches, {
        params: {
          region: profile.store.region,
          summonerName: profile.store.summoner_name,
          limit: 10,
          offset: 0
        }
      });
      if (matchesResponse.is(ids.data)) {
        const games = await Promise.all(
          ids.data.message.matchIds.map(id =>
            axios.get(API.getOneMatchCard, {
              params: {
                region: profile.store.region,
                summonerId: profile.store.summoner_id,
                gameId: id
              }
            })
          )
        );
        setGames(games.map(res => res.data.message));
      }
    }
    getGameIds();
  }, [
    profile.store.region,
    profile.store.summoner_name,
    profile.store.summoner_id
  ]);

  // let getCardRes: OneMatchCardType[] = [];
  // if (matchesResponse.is(getMatchesRes)) {
  //   getCardRes = await Promise.all(
  //     getMatchesRes.message.matchIds.map(gameId =>
  //       getOneMatchCard(profile.store.region, profile.store.summoner_id, gameId)
  //     )
  //   );
  // }

  return (
    <MainPageTheme>
      <MarginContainer>
        <PageContainer>
          <HeaderContainer>
            <Header>RECENT MATCH</Header>
            <RoleSelecter />
          </HeaderContainer>
          <GamesContainer>
            {games &&
              games.map(game => (
                <GameCard key={game.match.gameCreationUnix} game={game} />
              ))}
          </GamesContainer>
        </PageContainer>
      </MarginContainer>
    </MainPageTheme>
  );
};

export default Home;
