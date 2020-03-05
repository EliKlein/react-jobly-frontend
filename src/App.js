import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routes from './Routes';
import NavBar from './NavBar';
import TokenContext from './helpers/TokenContext';
import jwt_decode from 'jwt-decode';

function App() {
  const token = localStorage.getItem("token");
  const [loggedIn, setLoggedIn] = useState(token ? jwt_decode(token).username : false);

  const saveToken = (token) => {
    if (token) {
      setLoggedIn(jwt_decode(token).username);
      localStorage.setItem("token", token);
    } else {
      setLoggedIn(false);
      localStorage.removeItem("token");
    }
  }

  return (
    <div className="App">
      <TokenContext.Provider value={{ loggedIn, saveToken }}>
        <BrowserRouter>
          <NavBar />
          <Routes />
        </BrowserRouter>
      </TokenContext.Provider>
    </div>
  );
}

export default App;
