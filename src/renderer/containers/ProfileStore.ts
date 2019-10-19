import { useState, useEffect, useCallback } from 'react';
import { createContainer } from 'unstated-next';
import axios from 'axios';
import useInterval from '@use-it/interval';
import { PersistentStoreContainer } from 'src/renderer/containers/PersistentStore';
import { API, PlayerProfileResponse } from 'src/renderer/API';

type ProfileStore = {
  summonerId: string;
  profileIconURL: string;
  summonerName: string;
  summonerLevel: number;
};

const useProfileStore = (): {
  profile: ProfileStore;
  update: (newProfile: ProfileStore) => void;
} => {
  const persistentState = PersistentStoreContainer.useContainer();
  const [profile, setProfile] = useState<ProfileStore>({
    summonerId: '',
    profileIconURL: '',
    summonerName: '',
    summonerLevel: 0
  });

  const fetchProfile = useCallback(async () => {
    const res = await axios
      .get(API.getPlayerProfile, {
        params: {
          region: persistentState.persistentStore.region,
          summonerName: persistentState.persistentStore.summoner_name
        }
      })
      .catch(error => console.log(error.response));
    // console.log('fetched profile: ', res);
    return res;
  }, [
    persistentState.persistentStore.region,
    persistentState.persistentStore.summoner_name
  ]);

  useEffect(() => {
    async function updateProfile(): Promise<void> {
      const res = await fetchProfile();
      if (res && PlayerProfileResponse.is(res.data)) {
        setProfile(res.data.message);
      }
    }
    updateProfile();
  }, [
    fetchProfile,
    persistentState.persistentStore.region,
    persistentState.persistentStore.summoner_name
  ]);

  useInterval(() => {
    async function updateProfile(): Promise<void> {
      const res = await fetchProfile();
      if (res && PlayerProfileResponse.is(res.data)) {
        setProfile(res.data.message);
      }
    }
    updateProfile();
  }, 60000);

  const update = (newProfile: ProfileStore): void => setProfile(newProfile);

  return { profile, update };
};

export const ProfileStoreContainer = createContainer(useProfileStore);
