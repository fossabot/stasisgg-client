import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Content = styled.div`
  height: 100%;
  background-color: white;
`;

const MenuItem = styled(NavLink)`
  display: block;
  padding: 16px;
  color: #757575;
  text-decoration: none;

  &.selected {
    color: #037bfc;
  }
  &:hover {
    background-color: #99999922;
  }
`;

const SidebarContent = (): JSX.Element => (
  <Content>
    <MenuItem exact to="/" activeClassName="selected">
      Home
    </MenuItem>
    <MenuItem exact to="/Preference" activeClassName="selected">
      Preference
    </MenuItem>
  </Content>
);

export default SidebarContent;
