import { hot } from 'react-hot-loader/root';
import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import Home from 'src/renderer/views/Home/Home';
import Preference from 'src/renderer/views/Preference/Preference';

const App = () => (
  <MemoryRouter>
    <Route exact path="/" component={Home} />
    <Route path="/Preference" component={Preference} />
  </MemoryRouter>
);

export default hot(App);
