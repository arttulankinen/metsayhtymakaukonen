import React from 'react'
import { useEffect } from 'react'
import './Hinnasto';
import './Yhteystiedot';
import './Tuotteet';
import LandingPage from './LandingPage';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({ once: true, duration:800});
  }, []);
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