import * as t from 'io-ts';

const baseURL =
  'https://m52z4grtsa.execute-api.ap-northeast-1.amazonaws.com/dev';

export const API = {
  getPlayerProfile: `${baseURL}/get-player-profile`
};

const PlayerProfile = t.type({
  summonerId: t.string,
  summonerName: t.string,
  summonerLevel: t.number,
  profileIconURL: t.string
});

export const PlayerProfileResponse = t.type({
  message: PlayerProfile
});
