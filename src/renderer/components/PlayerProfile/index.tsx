import React from 'react';
import styled from 'styled-components';
import ProfileIcon from 'src/renderer/components/ProfileIcon';
import SummonerNameLabel from 'src/renderer/components/SummonerNameLabel';

const ProfileContainer = styled.div`
  height: 180px;
  display: flex;
`;

const IconContainer = styled.div`
  align-items: center;
`;

type ProfileProps = {
  summonerId: string;
  profileIconURL: string;
  summonerName: string;
  summonerLevel: string;
};

const PlayerProfile: React.FC<ProfileProps> = (props: ProfileProps) => (
  <ProfileContainer>
    <IconContainer>
      <ProfileIcon profileIconURL={props.profileIconURL} height={'52px'} />
    </IconContainer>
    <div>
      <SummonerNameLabel summonerName={props.summonerName} />
    </div>
  </ProfileContainer>
);

export default PlayerProfile;
