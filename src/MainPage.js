import React from 'react';
import { Link } from 'react-router-dom';
// import './MainPage.css';

function MainPage({loggedIn}) {
  return (
    <div className="MainPage jumbotron container">
      <h2>Jobly</h2>
      <p>All the jobs, in one convenient place</p>
      {
        loggedIn
        ?
        <h3>Welcome Back!</h3>
        :
          <Link className="MainPage-btn btn btn-secondary" to="/login">Log in/Sign Up</Link>
      }
    </div>
  );
}

export default MainPage;
