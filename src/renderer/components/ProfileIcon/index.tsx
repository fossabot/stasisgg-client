import React from 'react';
import styled from 'styled-components';
import defaultImage from 'src/icons/-1.png';

const Icon = styled.img<{ height: string | undefined }>`
  height: ${({ height }): string => height || '100px'};
  border-radius: 50%;
  border: 1px solid #2c4873;
`;

type ProfileProps = {
  profileIconURL: string;
  height?: string;
};

const ProfileIcon: React.FC<ProfileProps> = (props: ProfileProps) => (
  <Icon
    height={props.height}
    src={props.profileIconURL}
    onError={(e): void => (e.currentTarget.src = defaultImage)}
  />
);

export default ProfileIcon;
