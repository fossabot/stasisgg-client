import { useState, useEffect, useCallback } from 'react';
import { createContainer } from 'unstated-next';
import axios from 'axios';
import { PersistentStoreContainer } from 'src/renderer/containers/PersistentStore';
import { API, matchesResponse, OneMatchCardType } from 'src/renderer/API';

const useRecentGamesStore = () => {
  const profile = PersistentStoreContainer.useContainer();
  const [games, setGames] = useState<OneMatchCardType[]>();
  const [fetchedGames, setFetchedGames] = useState(0);
  const limit = 10;

  const fetchRecentGames = useCallback(
    async (limit: number, offset: number) => {
      const ids = await axios.get(API.getMatches, {
        params: {
          region: profile.store.region,
          summonerName: profile.store.summoner_name,
          limit: limit,
          offset: offset
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
        return games;
      } else {
        return undefined;
      }
    },
    [
      profile.store.region,
      profile.store.summoner_name,
      profile.store.summoner_id
    ]
  );

  useEffect(() => {
    async function getGame(): Promise<void> {
      const games = await fetchRecentGames(limit, 0);
      if (games) {
        setGames(games.map(res => res.data.message));
        setFetchedGames(10);
      }
    }
    getGame();
  }, [fetchRecentGames]);

  return { games, setGames };
};

export const RecentGamesStoreContainer = createContainer(useRecentGamesStore);
