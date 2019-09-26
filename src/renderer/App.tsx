import { hot } from 'react-hot-loader/root';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import MySidebar from 'src/renderer/components/FixedSidebar';
import MainContents from 'src/renderer/components/Router';
import 'typeface-roboto/index.css';
import '@openfonts/noto-sans-jp_japanese';
import { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Roboto', 'Noto Sans JP',sans-serif;
  }
`;

const App = (): JSX.Element => (
  <div>
    <GlobalStyles />
    <MemoryRouter>
      <MySidebar docked={true} open={true} shadow={false} transitions={false}>
        <MainContents />
      </MySidebar>
    </MemoryRouter>
  </div>
);

export default hot(App);
