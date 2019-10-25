import React from 'react';
import styled from 'styled-components';
import defaultImage from 'src/assets/icons/-1.png';

const Icon = styled.img<{
  height?: number;
  isBordered: boolean | undefined;
}>`
  height: ${({ height }): number => height || 100};
  border-radius: 50%;
  border: ${({ isBordered }): string =>
    isBordered ? '1px solid #2c4873' : ''};
`;

type ProfileProps = {
  iconURL: string;
  height?: number;
  isBordered?: boolean;
};

const RoundedIcon: React.FC<ProfileProps> = (props: ProfileProps) => (
  <Icon
    height={props.height}
    isBordered={props.isBordered}
    src={props.iconURL}
    onError={(e): void => (e.currentTarget.src = defaultImage)}
  />
);

export default RoundedIcon;
