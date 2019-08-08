import React, {useState} from 'react';
import './App.css';

import Display from './components/Display';
import Dashboard from './components/Dashboard';

function App() {
  const [atBat, setAtBat] = useState({
    balls: 0,
    strikes: 0
  })
  
  return (
    <div className="App">
      <Display atBat={atBat}/>
      <Dashboard atBat={atBat} setAtBat={setAtBat}/>
    </div>
  );
}

export default App;
