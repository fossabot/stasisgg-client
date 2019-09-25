import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import HomeIcon from 'src/icons/home-24px.svg';

const SidebarContainer = styled.div`
  height: 100%;
  width: 260px;
  background-color: #2A2E32;
`;

const MenuItemContainer = styled.div`
  display: flex;
  align-items: center;
`

const MenuItemText = styled.div`
  padding: 0 1em;
  font-size: 1em;
`

const MenuItemRow = styled(NavLink)`
  display: block;
  padding: 1em;
  color: #E9E7EB;
  fill: #E9E7EB;
  text-decoration: none;

  &.selected {
    color: #8795C6;
    fill: #8795C6;
  }
  &:hover {
    background-color: rgba(81, 92, 107, 0.5);
  }
`;

const SidebarContent = (): JSX.Element => (
  <SidebarContainer>
    <MenuItemRow exact to="/" activeClassName="selected">
      <MenuItemContainer>
        <HomeIcon />
        <MenuItemText>Home</MenuItemText>
      </MenuItemContainer>
    </MenuItemRow>
    <MenuItemRow exact to="/Library" activeClassName="selected">
      Library
    </MenuItemRow>
  </SidebarContainer>
);

export default SidebarContent;
