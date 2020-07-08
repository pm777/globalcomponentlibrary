import React from 'react';
import logo from './logo.svg';
import './App.css';
import HorizontalSeparator from './components/HorizontalSeparator';
import Tooltip from './components/Tooltip';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HorizontalSeparator></HorizontalSeparator>
        <h1>Heree....</h1>
        <Tooltip></Tooltip>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
