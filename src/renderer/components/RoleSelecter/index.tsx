import React, { useState } from 'react';
import styled from 'styled-components';
import AllIcon from 'src/assets/icons/role/all.svg';
import TopIcon from 'src/assets/icons/role/position-top.svg';
import JungleIcon from 'src/assets/icons/role/position-jungle.svg';
import MidIcon from 'src/assets/icons/role/position-middle.svg';
import BotIcon from 'src/assets/icons/role/position-bottom.svg';
import SupportIcon from 'src/assets/icons/role/position-utility.svg';

const RolesContainer = styled.div`
  display: flex;
  background-color: #2a2e32;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  > * + * {
    border-left: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const IconContainer = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: rgba(35, 38, 41, 0.6);
  }
  &.selected {
    background-color: #232629;
  }
`;

type Role = 'All' | 'Top' | 'Jungle' | 'Mid' | 'Bot' | 'Support';

const RoleSelecter = (): JSX.Element => {
  const [value, setState] = useState<Role>('All');
  const onClick = (role: Role): void => {
    setState(role);
    console.log(role);
  };

  const isSelected = (role: Role): boolean => {
    return value === role;
  };

  return (
    <RolesContainer>
      <IconContainer
        onClick={(): void => onClick('All')}
        className={isSelected('All') ? 'selected' : ''}
      >
        <AllIcon height={25} width={25} />
      </IconContainer>
      <IconContainer
        onClick={(): void => onClick('Top')}
        className={isSelected('Top') ? 'selected' : ''}
      >
        <TopIcon height={25} width={25} />
      </IconContainer>
      <IconContainer
        onClick={(): void => onClick('Jungle')}
        className={isSelected('Jungle') ? 'selected' : ''}
      >
        <JungleIcon height={25} width={25} />
      </IconContainer>
      <IconContainer
        onClick={(): void => onClick('Mid')}
        className={isSelected('Mid') ? 'selected' : ''}
      >
        <MidIcon height={25} width={25} />
      </IconContainer>
      <IconContainer
        onClick={(): void => onClick('Bot')}
        className={isSelected('Bot') ? 'selected' : ''}
      >
        <BotIcon height={25} width={25} />
      </IconContainer>
      <IconContainer
        onClick={(): void => onClick('Support')}
        className={isSelected('Support') ? 'selected' : ''}
      >
        <SupportIcon height={25} width={25} />
      </IconContainer>
    </RolesContainer>
  );
};

export default RoleSelecter;
