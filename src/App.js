import React from 'react';
import Clock from './Clock';
import logo from './logo.svg';
import './App.css';

function App () {
  return (
    <div className = "App">
      <header className = "App-header">
        <img src = {logo} className = "" alt = "logo"></img>
      </header>
      <Clock />
    </div>
  )

}

export default App;
