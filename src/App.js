import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [arr, setarr] = useState([]);

  useEffect(() => {
    const ab = [];
    for(let x =0;x< 5000;x++){
      ab.push(x);
    }
    setarr(ab);
  },[])
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

      {
        arr.map((a)=>(
          <div>
            <p>{a}</p>
            <button>Submit {a}</button>
          </div>
        ))
      }
      </header>
    </div>
  );
}

export default App;
