import { Link } from 'react-scroll';
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
      <div className="OtsikkoTuotteet">Koivuklapi<br/><span className="Koot">33cm & 50cm</span></div>
        <h2 className="Tuotekuvaus"><br></br>Klapit ovat, kuivaa, korkealaatuista ja paikallista koivupuuta.</h2>
      </div>
      </div>
</div>
  )
}

export default tuotteet