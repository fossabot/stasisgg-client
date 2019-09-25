import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Content = styled.div`
  height: 100%;
  width: 260px;
  background-color: #2A2E32;
`;

const MenuItem = styled(NavLink)`
  display: block;
  padding: 16px;
  color: #E9E7EB;
  text-decoration: none;

  &.selected {
    color: #8795C6;
  }
  &:hover {
    background-color: rgba(81, 92, 107, 0.5);
  }
`;

const SidebarContent = (): JSX.Element => (
  <Content>
    <MenuItem exact to="/" activeClassName="selected">
      Home
    </MenuItem>
    <MenuItem exact to="/Library" activeClassName="selected">
      Library
    </MenuItem>
  </Content>
);

export default SidebarContent;
