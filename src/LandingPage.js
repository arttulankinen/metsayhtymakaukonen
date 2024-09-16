import './styles.css';
import forest from './IMAGES/1VID.mp4';
import { Link, Element } from 'react-scroll';
import Hinnasto from './Hinnasto';
import Yhteystiedot from './Yhteystiedot'; 
import Tuotteet from './Tuotteet';


function LandingPage() {
  
  return (
    <div className="Landing-page">
      <div className='container1'>
       <div className='overlay'/>
        <video src={forest} type="video/mp4" autoPlay muted loop/>
        <div className='metsäyhtymäkaukonen'>
          <h1>METSÄYHTYMÄKAUKONEN</h1>
        <div className='buttons'>
          <Link to ='Tuotteet' spy={true} smooth={true} duration={500}>
          <button id='buttonT'>Tuotteet</button>
          </Link>
          <Link to ='Yhteystiedot' spy={true} smooth={true} duration={500}>
          <button id='buttonY'>Yhteystiedot</button>
          </Link>
          <Link to ='Hinnasto' spy={true} smooth={true} duration={500}>
          <button id='buttonH'>hinnasto</button>
          </Link>
        </div>
       </div>
      </div>
      <Element name='Tuotteet'>
        <button>ASD</button>
        <Tuotteet />
      </Element>
      <Element name='Hinnasto'>
        <Hinnasto />
      </Element>
      <Element name='Yhteystiedot'>
        <Yhteystiedot />
      </Element>
  </div>
  );
}

export default LandingPage;
