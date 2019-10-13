import { useState } from 'react';
import { createContainer } from 'unstated-next';
import db, { StoreSchema } from 'src/renderer/db';

const usePersistentStore = (): {
  persistentStore: StoreSchema;
  update: (newState: StoreSchema) => void;
  saveDB: (newState: StoreSchema) => void;
} => {
  const [persistentStore, setPersistentStore] = useState(db.getAll());

  const update = (newState: StoreSchema): void => {
    setPersistentStore(newState);
  };

  const saveDB = (newState: StoreSchema): void => {
    setPersistentStore(newState);
    db.saveAll(newState);
  };

  return { persistentStore, update, saveDB };
};

export const PersistentStoreContainer = createContainer(usePersistentStore);
