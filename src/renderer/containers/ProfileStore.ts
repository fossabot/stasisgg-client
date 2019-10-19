import { useState, useEffect } from 'react';
import { createContainer } from 'unstated-next';
import axios from 'axios';
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

  useEffect(() => {
    async function fetchProfile(): Promise<void> {
      const res = await axios
        .get(API.getPlayerProfile, {
          params: {
            region: persistentState.persistentStore.region,
            summonerName: persistentState.persistentStore.summoner_name
          }
        })
        .catch(error => console.log(error.response));
      if (res && PlayerProfileResponse.is(res.data)) {
        setProfile(res.data.message);
      }
    }
    fetchProfile();
  }, [
    persistentState.persistentStore.region,
    persistentState.persistentStore.summoner_name
  ]);

  const update = (newProfile: ProfileStore): void => setProfile(newProfile);

  return { profile, update };
};

export const ProfileStoreContainer = createContainer(useProfileStore);
