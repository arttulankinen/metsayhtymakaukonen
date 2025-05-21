import './styles.css';
import forest from './IMAGES/forest.png';
import { Link, Element } from 'react-scroll';
import Yhteystiedot from './Contacts'; 
import Tuotteet from './Products';
import Info from './Info';


function LandingPage() {
  
  return (
    <div className="Landing-page">
       <p></p>
      <Element name='LandingPage'>
      <div className='container1'>
      {/* /CONTAINER 1 TAUSTA */}
       <div className='overlay'/>
       <img src={forest} alt="forest" id='bg'/>
       </div>
        {/* CONTAINER 1 OTSIKKO*/}
        <div className='metsäyhtymäkaukonen'>
          <h1 id='h1metsäyhtymäkaukonen'>METSÄYHTYMÄ</h1>
          <h1 id='h2metsäyhtymäkaukonen'>KAUKONEN</h1>
          <h2 id='h3metsäyhtymäkaukonen'>–Polttopuuta suoraan metsästä kotiin</h2>
        </div>
        <p id='line'>|</p>
         {/* CONTAINER 1 NAPPULAT */}
         <div className='h1buttons'>
        <Link to='Tuotteet' spy={true} smooth={true} duration={400}>
        <span className="Link">Tuotteet</span>
      </Link>
      <Link to='Info' spy={true} smooth={true} duration={400}>
        <span className="Link">Info</span>
      </Link>
      <Link to='Yhteystiedot' spy={true} smooth={true} duration={400}>
        <span className="Link">Yhteystiedot</span>
      </Link>
    </div>
  </Element>

      {/* CONTAINER 2 */}
      <Element name='Tuotteet'>
        <Tuotteet />
      </Element>

      {/* CONTAINER 3 */}
      <Element name='Info'>
        <Info/>
      </Element>
      {/* CONTAINER 4 */}
      <Element name='Yhteystiedot'>
        <Yhteystiedot />
      </Element>
  </div>
  );
}

export default LandingPage;
