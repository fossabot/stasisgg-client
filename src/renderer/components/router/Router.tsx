import React from 'react';
import { Route } from 'react-router-dom';
import Home from 'src/renderer/views/Home/Home';
import Preference from 'src/renderer/views/Preference/Preference';

const routes = [
  {
    path: '/',
    exact: true,
    main: Home
  },
  {
    path: '/Preference',
    exact: true,
    main: Preference
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
