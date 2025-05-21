import React from 'react'
import { Link } from 'react-scroll';
import arrowup from './IMAGES/arrowup.png'
import arrowdown from './IMAGES/arrowdown.png'

function Info(){
  return (
    <div id='INFO'>
      <div id='buttonintuotteet'>
             <Link to ='LandingPage' spy={true} smooth={true} duration={200}>
               <img src={arrowup} alt="arrowup" id='arrowup'/>
             </Link>
             <Link to ='Yhteystiedot' spy={true} smooth={true} duration={300}>
               <img src={arrowdown} alt="arrowdown" id='arrowdown'/>
             </Link>
         </div>
    <div>
     <div class="section">
    <h1 id='infotitle'>Tuoretta koivuklapia myynnissä Kuopion alueella – 50 cm ja 33 cm mitat</h1>
    <p class="description">
      Myydään tuoretta koivuklapia noin 50 cm ja 33 cm mittaisina. Klapit ovat korkealaatuista, vastatehtyä koivupuuta –
      täydellinen valinta ennakoivalle lämmittäjälle, joka haluaa varastoida polttopuut hyvissä ajoin ennen talvea.
    </p>

    <div class="details">
      <div class="details-text"><span class="emoji">🌲</span> Klapin pituudet:</div>
      <div class="details-number">~50 cm & ~33 cm</div>
    </div>

    <div class="details">
      <div class="details-text"><span class="emoji">📍</span> Sijainti:</div>
      <div class="details-number">Kuopio</div>
    </div>

    <div class="details">
      <div class="details-text"><span class="emoji">🚜</span> Kuljetus:</div>
      <div class="details-number">7 i-m³ / kerta</div>
    </div>

    <div class="details">
      <div class="details-text"><span class="emoji">🛻</span> Nouto:</div>
      <div class="details-number">Hirvilahti</div>
    </div>

    <div class="details">
      <div class="details-text"><span class="emoji">💶</span> Hinta:</div>
      <div class="details-number">65 € / i-m³</div>
    </div>

    <div class="details">
      <div class="details-text"><span class="emoji">📦</span> Kuljetusmaksu:</div>
      <div class="details-number">Sovitaan erikseen</div>
    </div>

    <p class="note"><span class="emoji">🔔</span> Huom! Tällä hetkellä myynnissä on ainoastaan tuoretta koivuklapia. Kuivaa klapia saatavilla syksyllä 2025.</p>
  </div>
    </div> 
  </div>
)};
export default Info