import React from 'react';
import styled from 'styled-components';
import { MainPageTheme } from 'src/renderer/components/theme';
import { Container } from '@material-ui/core';
import Header from 'src/renderer/components/Header';

const MarginContainer = styled.div`
  margin: 32px 0 32px 0;
`;

const Preference = (): JSX.Element => (
  <MainPageTheme>
    <MarginContainer>
      <Container fixed>
        <Header>PREFERENCE</Header>
      </Container>
    </MarginContainer>
  </MainPageTheme>
);

export default Preference;
