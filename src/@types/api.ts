import * as t from 'io-ts';

const PlayerProfile = t.type({
  summonerId: t.string,
  summonerName: t.string,
  summonerLevel: t.number,
  profileIconURL: t.string
});

export const PlayerProfileResponse = t.type({
  message: PlayerProfile
});
