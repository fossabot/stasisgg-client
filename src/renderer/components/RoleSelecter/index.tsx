import React from 'react';
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
    background-color: #232629;
  }
`;

const RoleSelecter = (): JSX.Element => {
  return (
    <RolesContainer>
      <IconContainer>
        <AllIcon />
      </IconContainer>
      <IconContainer>
        <TopIcon height={25} width={25} />
      </IconContainer>
      <IconContainer>
        <JungleIcon height={25} width={25} />
      </IconContainer>
      <IconContainer>
        <MidIcon height={25} width={25} />
      </IconContainer>
      <IconContainer>
        <BotIcon height={25} width={25} />
      </IconContainer>
      <IconContainer>
        <SupportIcon height={25} width={25} />
      </IconContainer>
    </RolesContainer>
  );
};

export default RoleSelecter;
