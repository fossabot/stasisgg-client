import React, { FC } from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  width: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > * + * {
    margin-top: 0.5em;
  }
`;

const Label = styled.label`
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  font-weight: 300;
`;

type PlayerStatsPanelProps = {
  level: number;
  cs: number;
  csPerMinutes: number;
  kp: number;
};

const PlayerStatsPanel: FC<PlayerStatsPanelProps> = (
  props: PlayerStatsPanelProps
) => {
  return (
    <MainContainer>
      <Label>Level {props.level}</Label>
      <Label>
        {props.cs}CS ({props.csPerMinutes})
      </Label>
      <Label>{props.kp}% KP</Label>
    </MainContainer>
  );
};

export default PlayerStatsPanel;
