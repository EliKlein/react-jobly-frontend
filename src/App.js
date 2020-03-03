import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routes from './Routes';
import NavBar from './NavBar';

function App() {
  const loggedIn = true;
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar loggedIn={loggedIn} />
        <Routes loggedIn={loggedIn} />
      </BrowserRouter>
    </div>
  );
}

export default App;
