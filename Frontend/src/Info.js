import React from 'react'
import { Link } from 'react-scroll';
import arrowup from './IMAGES/arrowup.png'
import arrowdown from './IMAGES/arrowdown.png'

function Info(){
  return (
    <div id='INFO'>
      <div id='buttonintuotteet'>
             <Link to ='Tuotteet' spy={true} smooth={true} duration={200}>
               <img src={arrowup} alt="arrowup" id='arrowup'/>
             </Link>
             <Link to ='Yhteystiedot' spy={true} smooth={true} duration={300}>
               <img src={arrowdown} alt="arrowdown" id='arrowdown'/>
             </Link>
         </div>
    <div>
     <div class="section">
    <h1 id='infotitle'>Koivuklapia myynnissä Kuopion alueella</h1>
    <p class="description">
      Myydään  koivuklapia. Klapit ovat kuivaa, korkealaatuista, paikallista koivupuuta
    </p>

    <div class="details">
      <div class="details-text"><span class="emoji">🌲</span> Klapin pituudet:</div>
      <div class="details-number">50 cm & 33 cm</div>
    </div>

    <div class="details">
      <div class="details-text"><span class="emoji">📍</span> Sijainti:</div>
      <div class="details-number">Kuopio</div>
    </div>

    <div class="details">
      <div class="details-text"><span class="emoji">🚜</span> Kuljetus:</div>
      <div class="details-number">Kippaavalla auton peräkärryllä. 7 m³ / kerta</div>
    </div>

    <div class="details">
      <div class="details-text"><span class="emoji">🛻</span> Nouto:</div>
      <div class="details-number">Hirvilahti</div>
    </div>

    <div class="details">
      <div class="details-text"><span class="emoji">💶</span> Hinta:</div>
      <div class="details-number">75 € / m³</div>
    </div>

    <div class="details">
      <div class="details-text"><span class="emoji">📦</span> Kuljetusmaksu:</div>
      <div class="details-number">Sovitaan erikseen</div>
    </div>
  </div>
    </div> 
  </div>
)};
export default Info