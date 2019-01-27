import React, { useEffect } from 'react';
import '../App.css';
import Flash from './Flash';

export default function Home() {
  useEffect(() => {
    Flash();
  });
  
  return (
    <div className="App">
      <header className="App-header">
        <canvas></canvas>
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
      </header>
    </div>
  );
}
