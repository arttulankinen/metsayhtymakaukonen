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
    <div class="card-wrapper">
    <div className="product-card">
      <h2 className="product-title">Koivuklapi</h2>
      <p className="product-subtitle">Tuoretta Koivua Lähimetästä</p>
      <img src={firewoodImage} alt="Koivuklapi" className="product-image" />

      <div className="size-select">
        <label>
          <input type="radio" name="size" value="50cm" />
          50cm
        </label>
        <label>
          <input type="radio" name="size" value="33cm" />
          37cm
        </label>
      </div>
    </div>
    </div>
  </div>
  )
}

export default tuotteet