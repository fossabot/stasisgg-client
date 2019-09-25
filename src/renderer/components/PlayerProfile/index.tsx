import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  height: 180px;
  display: flex;
`;

type ProfileProps = {
  summonerId: string;
  profileIconURL: string;
  summonerName: string;
  summonerLevel: string;
};

const PlayerProfile: React.FC<ProfileProps> = (props: ProfileProps) => (
  <ProfileContainer>{props.profileIconURL}</ProfileContainer>
);

export default PlayerProfile;
