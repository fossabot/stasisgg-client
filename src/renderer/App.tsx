import { hot } from 'react-hot-loader/root';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import MySidebar from 'src/renderer/components/sidebar/Sidebar';
import MainContents from 'src/renderer/components/router/Router';

const App = (): JSX.Element => (
  <div>
    <MemoryRouter>
      <MySidebar docked={true} open={true} shadow={true} transitions={false}>
        <MainContents />
      </MySidebar>
    </MemoryRouter>
  </div>
);

export default hot(App);
