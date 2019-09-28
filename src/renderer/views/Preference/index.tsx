import React from 'react';
import styled from 'styled-components';
import { MainPageTheme } from 'src/renderer/components/theme';
import { Container } from '@material-ui/core';

const MarginContainer = styled.div`
  margin: 32px 0 32px 0;
`;

const Preference = (): JSX.Element => (
  <MainPageTheme>
    <MarginContainer>
      <Container fixed>
        This page would be a nice preference page someday.
      </Container>
    </MarginContainer>
  </MainPageTheme>
);

export default Preference;
