/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/camelcase */
import low, { AdapterSync } from 'lowdb';
const FileSync: AdapterSync = require('lowdb/adapters//FileSync');
const fs = require('fs');
const path = require('path');
const remote = require('electron').remote;
const app = remote.app;

export interface StoreSchema {
  region: string;
  summoner_name: string;
  summoner_id: string;
}

const schema: StoreSchema = {
  region: 'NA',
  summoner_name: '',
  summoner_id: ''
};

class PersistentStore {
  db: low.LowdbSync<StoreSchema>;
  dbPath: string;

  constructor() {
    console.log('DB initializing has started...');
    this.dbPath = path.join(app.getPath('userData'), 'db.json');
    const adapter = new FileSync<StoreSchema>(this.dbPath);
    this.db = low(adapter);

    fs.access(this.dbPath, fs.constants.F_OK, (err: Error | null) => {
      if (err) {
        this.db.defaults(schema).write();
      }
    });
  }

  getAll(): StoreSchema {
    const settings: StoreSchema = {
      region: this.db.get('region').value() || 'NA',
      summoner_name: this.db.get('summonerName').value() || '',
      summoner_id: this.db.get('summonerId').value() || ''
    };

    return settings;
  }

  saveAll(data: StoreSchema): void {
    this.db.set('region', data.region).write();
    this.db.set('summonerName', data.summoner_name).write();
    this.db.set('summonerId', data.summoner_id).write();
    console.log('Saved to DB', data);
  }
}

const db = new PersistentStore();
export default db;
