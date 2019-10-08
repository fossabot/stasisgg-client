import React from 'react';
import { Route } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import RecentGames from 'src/renderer/views/RecentGames';
import Library from 'src/renderer/views/Library';
import Preference from 'src/renderer/views/Preference';

const routes = [
  {
    path: '/',
    exact: true,
    main: RecentGames
  },
  {
    path: '/Library',
    exact: true,
    main: Library
  },
  {
    path: '/Preference',
    exact: true,
    main: Preference
  }
];

const MainContents = (): JSX.Element => (
  <SnackbarProvider>
    {routes.map((route, index) => (
      // Render more <Route>s with the same paths as
      // above, but different components this time.
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        component={route.main}
      />
    ))}
  </SnackbarProvider>
);

export default MainContents;
