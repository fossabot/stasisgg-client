import { useState } from 'react';
import { createContainer } from 'unstated-next';
import store, { StoreSchema } from 'src/renderer/db';

const usePersistentStore = (): {
  persistentStore: StoreSchema;
  update: (newState: StoreSchema) => void;
} => {
  const [persistentStore, setPersistentStore] = useState(store.getAll());

  const update = (newState: StoreSchema): void => {
    setPersistentStore(newState);
    store.saveAll(newState);
    console.log('Saved store: ', newState);
  };

  return { persistentStore, update };
};

export const PersistentStoreContainer = createContainer(usePersistentStore);
