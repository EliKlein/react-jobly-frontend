import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routes from './Routes';
import NavBar from './NavBar';

function App() {
  const [token, setLog] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar token={token} />
        <Routes token={token} setLog={setLog} />
      </BrowserRouter>
    </div>
  );
}

export default App;
