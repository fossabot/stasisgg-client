import React from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

interface HeaderLabelProps {
  sub?: boolean;
}

const HeaderLabel = styled.label<HeaderLabelProps>`
  ${(props: HeaderLabelProps): FlattenSimpleInterpolation =>
    props.sub
      ? css`
          font-family: 'Raleway';
          font-weight: 300;
          font-size: 18px;
          letter-spacing: 0.1em;
          color: rgba(255, 255, 255, 0.5);
        `
      : css`
          font-family: 'Raleway';
          font-weight: 300;
          font-size: 24px;
          letter-spacing: 0.1em;
          color: #e9e7eb;
        `}
`;

const HeaderContainer = styled.div`
  margin-bottom: 16px;
`;

type HeaderProps = {
  children: React.ReactNode;
  sub?: boolean;
};

const Header: React.FC<HeaderProps> = (props: HeaderProps) => (
  <HeaderContainer>
    <HeaderLabel sub={props.sub}>{props.children}</HeaderLabel>
  </HeaderContainer>
);

export default Header;
