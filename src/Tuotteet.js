import React from 'react'
import LandingPage from './LandingPage'
import { Link, Element } from 'react-scroll';

function tuotteet() {
  return (
    <div id='TUOTTEET'>
      <Link to ='LandingPage' spy={true} smooth={true} duration={500}>
      <button className='ylös'>Ylös</button>
      </Link>
    <h1>Tuotteet</h1>
    <Element name='LandingPage'>
    <LandingPage />
  </Element>
  </div>
  )
}

export default tuotteet