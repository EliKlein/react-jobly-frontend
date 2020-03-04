import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import MainPage from './MainPage';
import Login from './Login';
import Companies from './Companies';
import Company from './Company';
import Jobs from './Jobs';
import Profile from './Profile';

function Routes({ token, setLog }) {

  return (
    <Switch>
      <Route exact path="/">
        <MainPage token={token} />
      </Route>
      <Route exact path="/login">
        <Login setLog={setLog}/>
      </Route>
      <Route exact path="/companies">
        <Companies token={token}/>
      </Route>
      <Route exact path="/companies/:name">
        <Company token={token}/>
      </Route>
      <Route exact path="/jobs">
        <Jobs token={token}/>
      </Route>
      <Route exact path="/profile">
        <Profile token={token}/>
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
