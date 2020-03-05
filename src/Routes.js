import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import MainPage from './MainPage';
import Login from './Login';
import Companies from './Companies';
import Company from './Company';
import Jobs from './Jobs';
import Profile from './Profile';
import LogOut from './LogOut';
import TokenContext from './helpers/TokenContext';

function Routes() {
  const { loggedIn } = useContext(TokenContext);
  if (loggedIn) {
    return (
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/login">
          <Redirect to="/jobs" />
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
        <Route exact path="/logout">
          <LogOut />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    return (
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/companies">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/companies/:name">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/jobs">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/profile">
          <Redirect to="/login" />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default Routes;
