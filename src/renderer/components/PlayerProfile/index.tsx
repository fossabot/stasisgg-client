import React from 'react';
import styled from 'styled-components';
import ProfileIcon from 'src/renderer/components/ProfileIcon';
import SummonerNameLabel from 'src/renderer/components/SummonerNameLabel';

const ProfileContainer = styled.div`
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom-width: 0.5px;
  border-bottom-color: #4e5a67;
  border-bottom-style: solid;
`;

const IconContainer = styled.div`
  height: 100%;
  margin-left: 13px;
  display: flex;
  margin-top: 50px;
`;

const NameAndLevelContainer = styled.div`
  margin-left: 13px;
  margin-bottom: 26px;
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
    <NameAndLevelContainer>
      <SummonerNameLabel summonerName={props.summonerName} />
    </NameAndLevelContainer>
  </ProfileContainer>
);

export default PlayerProfile;
