import React, { FC, useState } from 'react';
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
  width: 100px;
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

const BlankIcon = styled.div`
  margin: 0;
  height: 16px;
  width: 16px;
  background-color: rgba(0, 0, 0, 0.24);
`;

const Label = styled.label<{ isYou?: boolean }>`
  color: ${({ isYou }): string =>
    isYou ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.5)'};
  font-size: 13px;
  font-weight: 300;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

type Participant = {
  participantId: number;
  championIconURL: string;
  summonerName: string;
  lanePosition: string;
  isYou: boolean;
};

type ParticipantsPanelProps = {
  participants: Participant[];
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

const getSortedTeam = (
  participants: Participant[],
  isLeftTeam: boolean
): Participant[] => {
  let team;
  // id <= 5 participants belong to Left team
  if (isLeftTeam) {
    team = participants.filter(p => p.participantId <= 5);
  } else {
    team = participants.filter(p => p.participantId > 5);
  }
  return team.sort(
    (a, b) => getLaneOrder(a.lanePosition) - getLaneOrder(b.lanePosition)
  );
};

const ParticipantsPanel: FC<ParticipantsPanelProps> = (
  props: ParticipantsPanelProps
) => {
  const [areLoading, setAreLoading] = useState({
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    10: true
  });
  const updateLoadingState = (participantId: number): void =>
    setAreLoading(prev => ({ ...prev, [participantId]: false }));
  const leftTeam = getSortedTeam(props.participants, true);
  const rightTeam = getSortedTeam(props.participants, false);

  return (
    <MainContainer>
      <RowConatainer>
        {leftTeam.map(p => (
          <ColumnContainer key={p.participantId}>
            <Icon
              src={p.championIconURL}
              onLoad={(): void => updateLoadingState(p.participantId)}
              style={{
                display: areLoading[p.participantId] ? 'none' : 'block'
              }}
            />
            {areLoading[p.participantId] && <BlankIcon />}
            <Label isYou={p.isYou}>{p.summonerName}</Label>
          </ColumnContainer>
        ))}
      </RowConatainer>
      <RowConatainer>
        {rightTeam.map(p => (
          <ColumnContainer key={p.participantId}>
            <Icon
              src={p.championIconURL}
              onLoad={(): void => updateLoadingState(p.participantId)}
              style={{
                display: areLoading[p.participantId] ? 'none' : 'block'
              }}
            />
            {areLoading[p.participantId] && <BlankIcon />}
            <Label isYou={p.isYou}>{p.summonerName}</Label>
          </ColumnContainer>
        ))}
      </RowConatainer>
    </MainContainer>
  );
};

export default ParticipantsPanel;
