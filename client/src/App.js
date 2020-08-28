import React from 'react';
import logo from './logo.svg';
import './App.css';
import MuscleChoice from './components/MuscleChoice/MuscleChoiceBubble'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      <div className= "container">
        <div><MuscleChoice /></div>
        <div><MuscleChoice /></div>
        <div><MuscleChoice /></div>
        <div><MuscleChoice /></div>
      </div>
    </div>
  );
}

export default App;
