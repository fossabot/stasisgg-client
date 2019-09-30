import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import PlayerProfile from 'src/renderer/components/PlayerProfile';
import HomeIcon from 'src/icons/home-26px.svg';
import LibraryIcon from 'src/icons/video_library-26px.svg';
import SettingsIcon from 'src/icons/settings-26px.svg';
import AccountIcon from 'src/icons/account_circle-26px.svg';
import AboutIcon from 'src/icons/about-26px.svg';
import BottomGrayBorder from 'src/renderer/components/BottomGrayBorder';

const SidebarContainer = styled.div`
  height: 100%;
  width: 280px;
  background-color: #2a2e32;
  border-right: 0.5px solid rgba(78, 90, 103, 0.9);
`;

const MainMenuContainer = styled.div`
  padding: 13px 0 13px 0;
`;

const MenuItemContainer = styled.div`
  display: flex;
  align-items: center;
`;

const MenuItemText = styled.div`
  padding: 0 1em;
  font-size: 1em;
`;

const MenuItemRow = styled(NavLink)`
  display: block;
  padding: 1em 1em 1em 2em;
  color: #e9e7eb;
  fill: #e9e7eb;
  text-decoration: none;

  &.selected {
    color: #8795c6;
    fill: #8795c6;
  }
  &:hover {
    background-color: rgba(81, 92, 107, 0.5);
  }
`;

const MenuHeader = styled.div`
  font-size: 16px;
  color: #4e5a67;
  margin-left: 13px;
  margin-bottom: 13px;
`;

const SidebarContent = (): JSX.Element => (
  <SidebarContainer>
    <PlayerProfile
      summonerId="id"
      summonerName="TheLongestName77"
      summonerLevel={396}
      profileIconURL="https://ddragon.leagueoflegends.com/cdn/9.19.1/img/profileicon/4293.png"
    />
    <BottomGrayBorder />
    <MainMenuContainer>
      <MenuItemRow exact to="/" activeClassName="selected">
        <MenuItemContainer>
          <HomeIcon />
          <MenuItemText>Home</MenuItemText>
        </MenuItemContainer>
      </MenuItemRow>
      <MenuItemRow exact to="/Library" activeClassName="selected">
        <MenuItemContainer>
          <LibraryIcon />
          <MenuItemText>Library</MenuItemText>
        </MenuItemContainer>
      </MenuItemRow>
    </MainMenuContainer>
    <BottomGrayBorder />
    <MainMenuContainer>
      <MenuHeader>Settings</MenuHeader>
      <MenuItemRow exact to="/Preference" activeClassName="selected">
        <MenuItemContainer>
          <SettingsIcon />
          <MenuItemText>Preference</MenuItemText>
        </MenuItemContainer>
      </MenuItemRow>
      <MenuItemRow exact to="/Account" activeClassName="selected">
        <MenuItemContainer>
          <AccountIcon />
          <MenuItemText>Account</MenuItemText>
        </MenuItemContainer>
      </MenuItemRow>
      <MenuItemRow exact to="/About" activeClassName="selected">
        <MenuItemContainer>
          <AboutIcon />
          <MenuItemText>About</MenuItemText>
        </MenuItemContainer>
      </MenuItemRow>
    </MainMenuContainer>
    <BottomGrayBorder />
  </SidebarContainer>
);

export default SidebarContent;
