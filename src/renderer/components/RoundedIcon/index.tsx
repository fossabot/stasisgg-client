import React, { useState } from 'react';
import styled from 'styled-components';
import defaultImage from 'src/assets/icons/-1.png';

const Icon = styled.img<{
  height?: number;
  isBordered: boolean | undefined;
}>`
  height: ${({ height }): string => (height ? `${+height}px` : '100px')};
  border-radius: 50%;
  border: ${({ isBordered }): string =>
    isBordered ? '1px solid #2c4873' : ''};
`;

const BlankIcon = styled.div<{ height?: number; isBordered?: boolean }>`
  height: ${({ height }): string => (height ? `${+height}px` : '100px')};
  width: ${({ height }): string => (height ? `${+height}px` : '100px')};
  border-radius: 50%;
  border: ${({ isBordered }): string =>
    isBordered ? '1px solid #2c4873' : ''};
  margin: 0;
  background-color: rgba(0, 0, 0, 0.24);
`;

type ProfileProps = {
  iconURL: string;
  height?: number;
  isBordered?: boolean;
};

const RoundedIcon: React.FC<ProfileProps> = (props: ProfileProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      <Icon
        height={props.height}
        isBordered={props.isBordered}
        src={props.iconURL}
        style={{
          display: isLoading ? 'none' : 'block'
        }}
        onLoad={(): void => setIsLoading(false)}
        onError={(e): void => (e.currentTarget.src = defaultImage)}
      />
      {isLoading && (
        <BlankIcon height={props.height} isBordered={props.isBordered} />
      )}
    </div>
  );
};

export default RoundedIcon;
