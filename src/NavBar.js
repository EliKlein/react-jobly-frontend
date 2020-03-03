import React from 'react';
import { NavLink } from 'react-router-dom';
// import './NavBar.css';

function NavBar({ loggedIn }) {
  return (
    <nav className="NavBar">
      <span className="NavBar-Jobly">
        <NavLink to="/">Jobly</NavLink>
      </span>
      {
        loggedIn ?
          (
            <span className="NavBar-logged-in">
              <NavLink to="/companies">Companies</NavLink>
              <NavLink to="/jobs">Jobs</NavLink>
              <NavLink to="/profile">Profile</NavLink>
              <NavLink to="/logout">Log out</NavLink>
            </span>
          ) :
          <span className="NavBar-log-in">
            <NavLink to="/login">Log in/Sign up</NavLink>
          </span>
      }
    </nav>
  );
}

export default NavBar;
