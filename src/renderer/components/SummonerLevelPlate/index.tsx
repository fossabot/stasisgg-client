import React from 'react';
import styled from 'styled-components';

const LevelLabel = styled.label`
  font-size: 11px;
  line-height: 13px;
  color: rgba(255, 255, 255, 0.8);
`;

const LabelContainer = styled.div`
  width: 30px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(134, 149, 198, 0.5);
  border-radius: 3px;
`;

type SummonerLevelPlateProps = {
  summonerLevel: number;
};

const SummonerLevelPlate: React.FC<SummonerLevelPlateProps> = (
  props: SummonerLevelPlateProps
) => (
  <LabelContainer>
    <LevelLabel>{props.summonerLevel}</LevelLabel>
  </LabelContainer>
);

export default SummonerLevelPlate;
