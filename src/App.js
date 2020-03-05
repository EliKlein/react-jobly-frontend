import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routes from './Routes';
import NavBar from './NavBar';
import TokenContext from './helpers/TokenContext';

function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token") ? true : false);

  const saveToken = (token) => {
    if (token) {
      setLoggedIn(true);
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
