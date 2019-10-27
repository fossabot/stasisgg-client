import React, { FC } from 'react';
import styled from 'styled-components';

const MainConatiner = styled.div`
  margin: 0 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  > * + * {
    margin-top: 0.3em;
  }
`;

const LabelContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Label = styled.label<{ fontSize?: string; color?: string }>`
  font-size: ${({ fontSize }): string => fontSize || '24px'};
  color: ${({ color }): string => color || 'rgba(255, 255, 255, 0.8)'};
  font-weight: 400;
`;

type KDAProps = {
  kill: number;
  death: number;
  assist: number;
  kda: number;
};
const KDA: FC<KDAProps> = (props: KDAProps) => {
  let kdaStr;
  if (props.kda.toString().length === 1) {
    kdaStr = `${props.kda}.0 KDA`;
  } else {
    kdaStr = `${props.kda.toString()} KDA`;
  }
  return (
    <MainConatiner>
      <LabelContainer>
        <Label>{props.kill}</Label>
        <Label color={'rgba(197, 197, 197, 0.7)'}>/</Label>
        <Label color={'rgba(238, 112, 121, 1)'}>{props.death}</Label>
        <Label color={'rgba(197, 197, 197, 0.7)'}>/</Label>
        <Label>{props.assist}</Label>
      </LabelContainer>
      <LabelContainer>
        <Label fontSize={'18px'} color={'rgba(197, 197, 197, 0.7)'}>
          {kdaStr}
        </Label>
      </LabelContainer>
    </MainConatiner>
  );
};

export default KDA;
