import React from 'react';
import styled from 'styled-components';
import ProfileIcon from 'src/renderer/components/ProfileIcon';
import SummonerNameLabel from 'src/renderer/components/SummonerNameLabel';
import SummonerLevelPlate from 'src/renderer/components/SummonerLevelPlate';

const ProfileContainer = styled.div`
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const IconContainer = styled.div`
  height: 100%;
  margin-left: 13px;
  margin-top: 50px;
  display: flex;
`;

const NameAndLevelContainer = styled.div`
  margin-left: 13px;
  margin-bottom: 26px;
  margin-right: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

type ProfileProps = {
  summonerId: string;
  profileIconURL: string;
  summonerName: string;
  summonerLevel: number;
};

const PlayerProfile: React.FC<ProfileProps> = (props: ProfileProps) => (
  <ProfileContainer>
    <IconContainer>
      <ProfileIcon profileIconURL={props.profileIconURL} height={'52px'} />
    </IconContainer>
    <NameAndLevelContainer>
      <SummonerNameLabel summonerName={props.summonerName} />
      <SummonerLevelPlate summonerLevel={props.summonerLevel} />
    </NameAndLevelContainer>
  </ProfileContainer>
);

export default PlayerProfile;
