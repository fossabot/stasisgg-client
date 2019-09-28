import React from 'react';
import styled from 'styled-components';

const HeaderLabel = styled.label`
  font-family: 'Raleway';
  font-weight: 300;
  font-size: 24px;
  letter-spacing: 0.1em;
  color: #e9e7eb;
`;

const HeaderContainer = styled.div`
  margin-bottom: 16px;
`;

type HeaderProps = {
  children: React.ReactNode;
};

const Header: React.FC<HeaderProps> = (props: HeaderProps) => (
  <HeaderContainer>
    <HeaderLabel>{props.children}</HeaderLabel>
  </HeaderContainer>
);

export default Header;
