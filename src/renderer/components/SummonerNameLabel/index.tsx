import React from 'react';
import styled from 'styled-components';

const NameLabel = styled.label`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
`;

type SummonerNameLabelProps = {
  summonerName: string;
};

const SummonerNameLabel: React.FC<SummonerNameLabelProps> = (
  props: SummonerNameLabelProps
) => <NameLabel>{props.summonerName}</NameLabel>;

export default SummonerNameLabel;
