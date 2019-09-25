import React from 'react';

type ProfileProps = {
    summonerId: string;
    profileIconURL: string;
    summonerName: string;
    summonerLevel: string;
}

const PlayerProfile = (props: ProfileProps) => (
    <div>{props.profileIconURL}</div>
)

export default PlayerProfile;