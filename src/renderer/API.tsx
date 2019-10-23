import * as t from 'io-ts';

const baseURL =
  'https://m52z4grtsa.execute-api.ap-northeast-1.amazonaws.com/dev';

export const API = {
  getPlayerProfile: `${baseURL}/get-player-profile`,
  getLast10Matches: `${baseURL}/get-last-10-matches`,
  getOneMatchCard: `${baseURL}/get-one-match-card`
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

const Last10Matches = t.type({
  matchesCount: t.number,
  matchIds: t.array(t.number)
});

export const Last10MatchesResponse = t.type({
  message: Last10Matches
});

const OneMatchCard = t.type({
  match: t.type({
    gameMode: t.string,
    win: t.boolean,
    gameDurationSecond: t.number,
    gameCreationUnix: t.number,
    gameVersion: t.string
  }),
  player: t.type({
    championIconURL: t.string,
    lanePosition: t.string,
    summonerSpell1Id: t.number, // spell1Id
    summonerSpell2Id: t.number, // spell2Id
    runeMain: t.number, // perk0
    runeSub: t.number, // perkSubStyle
    items: t.array(
      t.type({
        order: t.number,
        spriteURL: t.string
      })
    ),
    kill: t.number,
    death: t.number,
    assist: t.number,
    level: t.number, // champLevel
    cs: t.number, // totalMinionsKilled
    csPerMinuites: t.number,
    kp: t.number
  }),
  participants: t.array(
    t.type({
      participantId: t.number,
      championIconURL: t.string,
      summonerName: t.string,
      isYou: t.boolean
    })
  )
});

export type OneMatchCardType = t.TypeOf<typeof OneMatchCard>;

export const OneMatchCardResponse = t.type({
  message: OneMatchCard
});
