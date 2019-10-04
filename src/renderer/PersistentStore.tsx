import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import { app } from 'electron';
const remote = require('electron').remote;
const fs = remote.require('fs');

interface Schema {
  region: string;
  summonerName: string;
  summonerId: string;
}

const schema: Schema = {
  region: 'NA',
  summonerName: '',
  summonerId: ''
};

class PersistentStore {
  db: low.LowdbSync<Schema>;
  dbPath: string;

  constructor() {
    this.dbPath = app.getPath('userData');
    const adapter = new FileSync(this.dbPath);
    this.db = low(adapter);

    fs.access(this.dbPath, fs.constants.F_OK, (err: Error) => {
      if (err) {
        this.db.defaults(schema).write();
      }
    });
  }

  getAll(): Schema {
    const settings: Schema = {
      region: this.db.get('region').value(),
      summonerName: this.db.get('summonerName').value(),
      summonerId: this.db.get('summonerId').value()
    };

    return settings;
  }
}

const store = new PersistentStore();
export default store;
