import React from 'react';
import styled from 'styled-components';

const HeaderLabel = styled.label`
  font-family: 'Raleway';
  font-weight: 300;
  font-size: 24px;
  letter-spacing: 0.1em;
  color: #e9e7eb;
`;

type HeaderProps = {
  children: React.ReactNode;
};

const Header: React.FC<HeaderProps> = (props: HeaderProps) => (
  <HeaderLabel>{props.children}</HeaderLabel>
);

export default Header;
