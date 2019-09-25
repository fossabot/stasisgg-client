import React from 'react';
import { Route } from 'react-router-dom';
import RecentGames from 'src/renderer/views/RecentGames';
import Library from 'src/renderer/views/Library';

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
  }
];

const MainContents = (): JSX.Element => (
  <div>
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
  </div>
);

export default MainContents;
