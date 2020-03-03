import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// import './Routes.css';
import MainPage from './MainPage';

function Routes({ loggedIn }) {
  return (
    <Switch>
      <Route exact path="/">
        <MainPage loggedIn={loggedIn} />
      </Route>
      <Route exact path="/login">
        <MainPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
