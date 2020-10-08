import React from 'react';
import Cars from './Cars';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Cars carMake="Honda" carModel="Accord"/>
        <hr/>
        <Cars carMake="Suzuki" carModel="Cultus"/>
        <hr/>
        <Cars carMake="Toyota" carModel="Crown"/> 
      </header>
    </div>
  );
}

export default App;
