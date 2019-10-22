import { useState } from 'react';
import { createContainer } from 'unstated-next';
import db, { StoreSchema } from 'src/renderer/db';

const usePersistentStore = (): {
  store: StoreSchema;
  update: (newState: StoreSchema) => void;
  saveDB: (newState: StoreSchema) => void;
} => {
  const [store, setStore] = useState(db.getAll());

  const update = (newState: StoreSchema): void => {
    setStore(newState);
  };

  const saveDB = (newState: StoreSchema): void => {
    setStore(newState);
    db.saveAll(newState);
  };

  return { store: store, update, saveDB };
};

export const PersistentStoreContainer = createContainer(usePersistentStore);
