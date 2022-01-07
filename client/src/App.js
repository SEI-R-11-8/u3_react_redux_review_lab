import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/Home.js';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>OutHouseShoutOut</p>
        <Home />
      </header>
    </div>
  );
}

export default App;
