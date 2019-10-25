import React, { FC } from 'react';
import styled from 'styled-components';
import { OneMatchCardType } from 'src/renderer/API';
import RoundedIcon from 'src/renderer/components/RoundedIcon';
import RoleIcon from 'src/renderer/components/RoleIcon';
import SpellIcon from 'src/renderer/components/SpellIcon';

interface MainContainerProps {
  win?: boolean;
}

const MainContainer = styled.div<MainContainerProps>`
  padding: 1em;
  display: flex;
  background-color: ${(props: MainContainerProps): string =>
    props.win ? 'rgba(37, 57, 122, 0.5)' : 'rgba(176, 37, 47, 0.5)'};
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const GameInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > * + * {
    margin-top: 3px;
  }
`;

const ChampionIconAndRole = styled.div`
  margin: 0 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > * + * {
    margin-top: 0.5em;
  }
`;

const SpellIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > * + * {
    margin-top: 0.5em;
  }
`;

const Label = styled.label<{ color?: string; fontSize?: string }>`
  color: ${({ color }): string => color || 'rgba(255, 255, 255, 0.8)'};
  font-weight: 300;
  font-size: ${({ fontSize }): string => fontSize || '14px'};
`;

type OneMatchCardProps = {
  game: OneMatchCardType;
};

const convertDurationToString = (durationSeconds: number): string => {
  const minutes = Math.floor(durationSeconds / 60);
  const seconds = durationSeconds % 60;

  return `${minutes}:${seconds}`;
};

const convertUnixToString = (unix: number): string => {
  const d = new Date(unix);
  const year = d.getFullYear();
  let month = (d.getMonth() + 1).toString();
  if (+month < 10) {
    month = '0' + month;
  }
  let date = d.getDate().toString();
  if (+date < 10) {
    date = '0' + date;
  }

  return `${date}/${month}/${year}`;
};

const truncateNStringTo2Point = (n: string): string => {
  const result = n.match(/(\d+)\.(\d+)/gm);
  if (result) return result[0];
  return 'Unkown';
};

const GameCard: React.FC<OneMatchCardProps> = (
  props: OneMatchCardProps
): JSX.Element => {
  return (
    <MainContainer win={props.game.match.win}>
      <GameInformation>
        <Label>{props.game.match.gameMode}</Label>
        <Label color={props.game.match.win ? '#56CCF2' : '#EB5757'}>
          {props.game.match.win ? 'Victory' : 'Lose'}
        </Label>
        <Label>
          {convertDurationToString(props.game.match.gameDurationSecond)}
        </Label>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: 0 }}>
          <hr
            style={{
              height: '2px',
              width: '36px',
              border: 'none',
              backgroundColor: 'rgba(197, 197, 197, 0.3)'
            }}
          />
        </div>
        <Label
          color={'rgba(197, 197, 197, 0.7)'}
          fontSize={'13px'}
          style={{ marginTop: 0 }}
        >
          {convertUnixToString(props.game.match.gameCreationUnix)}
        </Label>
        <Label color={'rgba(197, 197, 197, 0.7)'} fontSize={'13px'}>
          Patch {truncateNStringTo2Point(props.game.match.gameVersion)}
        </Label>
      </GameInformation>
      <ChampionIconAndRole>
        <RoundedIcon iconURL={props.game.player.championIconURL} height={42} />
        <RoleIcon
          role={props.game.player.lanePosition}
          height={35}
          width={35}
        />
      </ChampionIconAndRole>
      <SpellIcons>
        <SpellIcon spellId={props.game.player.summonerSpell1Id} height={24} />
        <SpellIcon spellId={props.game.player.summonerSpell2Id} height={24} />
      </SpellIcons>
    </MainContainer>
  );
};

export default GameCard;
