import React, { FC } from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  margin-left: 2em;
  display: flex;
  align-items: center;
  > * + * {
    margin-left: 1em;
  }
`;

const RowConatainer = styled.div`
  display: flex;
  flex-direction: column;
  > * + * {
    margin-top: 0.3em;
  }
`;

const ColumnContainer = styled.div`
  display: flex;
  align-items: center;
  > * + * {
    margin-left: 0.5em;
  }
`;

const Icon = styled.img`
  height: 16px;
  width: 16px;
`;

const Label = styled.label<{ isYou?: boolean }>`
  color: ${({ isYou }): string =>
    isYou ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.5)'};
  font-size: 13px;
  font-weight: 300;
`;

type ParticipantsPanelProps = {
  participants: {
    participantId: number;
    championIconURL: string;
    summonerName: string;
    lanePosition: string;
    isYou: boolean;
  }[];
};

const getLaneOrder = (lanePosition: string): number => {
  let order = 0;
  switch (lanePosition) {
    case 'TOP':
      order = 1;
      break;
    case 'JUNGLE':
      order = 2;
      break;
    case 'MIDDLE':
      order = 3;
      break;
    case 'BOTTOM':
      order = 4;
      break;
    case 'SUPPORT':
      order = 5;
      break;
    default:
      order = 0;
      break;
  }
  return order;
};

const createTeamComponentsList = (
  { participants }: ParticipantsPanelProps,
  isLeft: boolean
): JSX.Element[][] => {
  let team;
  if (isLeft) {
    team = participants.filter(p => p.participantId <= 5);
  } else {
    team = participants.filter(p => p.participantId > 5);
  }

  const teamComponents = team
    .sort((a, b) => getLaneOrder(a.lanePosition) - getLaneOrder(b.lanePosition))
    .map(p => {
      const pList: JSX.Element[] = [];
      pList.push(
        <ColumnContainer>
          <Icon src={p.championIconURL} />
          <Label isYou={p.isYou}>{p.summonerName}</Label>
        </ColumnContainer>
      );
      return pList;
    });

  return teamComponents;
};

const ParticipantsPanel: FC<ParticipantsPanelProps> = (
  props: ParticipantsPanelProps
) => {
  const leftTeam = createTeamComponentsList(props, true);
  const rightTeam = createTeamComponentsList(props, false);

  return (
    <MainContainer>
      <RowConatainer>{leftTeam}</RowConatainer>
      <RowConatainer>{rightTeam}</RowConatainer>
    </MainContainer>
  );
};

export default ParticipantsPanel;
