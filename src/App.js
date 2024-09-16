import React from 'react'
import './Hinnasto';
import './Yhteystiedot';
import './Tuotteet';
import LandingPage from './LandingPage';

function App() {
  return (
    <div>
        <LandingPage />
        <Hinnasto />
        <Yhteystiedot />
        <Tuotteet />    
    </div>
  );
}

export default App;