import React from 'react';
import { Link } from 'react-router-dom';
// import './MainPage.css';

function MainPage({loggedIn}) {
  return (
    <div className="MainPage">
      <h2>Jobly</h2>
      <p>All the jobs, in one convenient place</p>
      {
        loggedIn
        ?
        <h3>Welcome Back!</h3>
        :
        <button className="MainPage-btn">
          <Link to="/login">Log in/Sign Up</Link>
        </button>
      }
    </div>
  );
}

export default MainPage;
