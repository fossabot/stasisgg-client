import React from 'react';

type ProfileProps = {
  summonerId: string;
  profileIconURL: string;
  summonerName: string;
  summonerLevel: string;
};

const PlayerProfile: React.FC<ProfileProps> = (props: ProfileProps) => (
  <div>{props.profileIconURL}</div>
);

export default PlayerProfile;
