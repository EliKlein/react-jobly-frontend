import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import MainPage from './MainPage';
import Login from './Login';
import Companies from './Companies';
import Company from './Company';
import Jobs from './Jobs';
import Profile from './Profile';

function Routes() {

  return (
    <Switch>
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/companies">
        <Companies />
      </Route>
      <Route exact path="/companies/:name">
        <Company />
      </Route>
      <Route exact path="/jobs">
        <Jobs />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
