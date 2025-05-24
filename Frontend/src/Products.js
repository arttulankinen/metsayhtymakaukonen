import React from 'react'
import { Link } from 'react-scroll';
import firewoodImage from './IMAGES/klapi.jpg';
import arrowup from './IMAGES/arrowup.png'
import arrowdown from './IMAGES/arrowdown.png'
import bg from './IMAGES/tuotteetbg.jpg'

function tuotteet() {
  return (
    <div id='TUOTTEET'>
      <div className='container'>
        <div className='overlay'/>
        <img src={bg} alt="Koivuklapi" id='bg'/>
      </div>
   
      <div id='buttonintuotteet'>
        <Link to ='LandingPage' spy={true} smooth={true} duration={200}>
          <img src={arrowup} alt="arrowup" id='arrowup'/>
        </Link>
        <Link to ='Info' spy={true} smooth={true} duration={300}>
          <img src={arrowdown} alt="arrowdown" id='arrowdown'/>
        </Link>
    </div>
 <div className="card-wrapper">
    <div className="product-card1">
      <div className="big-number">33cm <br/> 50cm</div>
      <div className="right-side">
        <h2 className="product-title">Koivuklapi</h2>
        <p className="product-subtitle">
          Tuoretta Koivua Lähimetästä. Tällä hetkellä vain kahta kokoa, koivu on tuoretta, syksyllä tulee kuivaa!
        </p>
      </div>
    </div>
  </div>
</div>
  )
}

export default tuotteet