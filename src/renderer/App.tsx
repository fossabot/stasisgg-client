import { hot } from 'react-hot-loader/root';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import MySidebar from 'src/renderer/components/FixedSidebar';
import MainContents from 'src/renderer/components/Router';
import { createGlobalStyle } from 'styled-components';
import { StylesProvider } from '@material-ui/styles';
import { PersistentStoreContainer } from 'src/renderer/containers/PersistentStore';
import { ProfileStoreContainer } from 'src/renderer/containers/ProfileStore';
import { RecentGamesStoreContainer } from 'src/renderer/containers/RecentGamesStore';
import Fonts from 'src/renderer/components/Fonts';

const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Roboto', 'Noto Sans JP', sans-serif;
  }
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;

const App = (): JSX.Element => (
  <StylesProvider injectFirst>
    <Fonts />
    <GlobalStyles />
    <MemoryRouter>
      <PersistentStoreContainer.Provider>
        <ProfileStoreContainer.Provider>
          <RecentGamesStoreContainer.Provider>
            <MySidebar
              docked={true}
              open={true}
              shadow={false}
              transitions={false}
              styles={{
                content: { background: '#232629', overflowY: 'overlay' }
              }}
            >
              <MainContents />
            </MySidebar>
          </RecentGamesStoreContainer.Provider>
        </ProfileStoreContainer.Provider>
      </PersistentStoreContainer.Provider>
    </MemoryRouter>
  </StylesProvider>
);

export default hot(App);
