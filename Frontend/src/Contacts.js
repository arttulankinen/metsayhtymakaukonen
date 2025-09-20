import React from 'react'
import { Link } from 'react-scroll';
import { motion } from 'framer-motion'; 
import arrowup from './IMAGES/arrowup.png'
import facebook from './IMAGES/facebook.png'
import phone from './IMAGES/phone.png'
import email from './IMAGES/email.png'
import  address  from './IMAGES/address.png';
import { useState } from 'react';

function Yhteystiedot() {
  const [dataEmail, setDataEmail] = useState('');
  const [dataOtsikko, setDataOtsikko] = useState('');
  const [dataViesti, setDataViesti] = useState('');
  const [dataNumber, setDataNumber] = useState('');

  const handleEmail = (e) => {
    setDataEmail(e.target.value);
    console.log(e.target.value);
  };

    const handleOtsikko = (e) => setDataOtsikko(e.target.value);
    const handleViesti = (e) => setDataViesti(e.target.value);
    const handleNumber = (e) => setDataNumber(e.target.value);

  const handleSendEmail = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch("/.netlify/functions/api/email/send", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: dataEmail,
        otsikko: dataOtsikko,
        Puhelinnumero: dataNumber,
        viesti: dataViesti
      })
    });

    if (!response.ok) {
      let errorMsg = 'Failed to send email';
      try {
        const errorData = await response.json();
        errorMsg = errorData.error || errorData.message || errorMsg;
      } catch (err) {
        console.warn('No JSON in error response:', err);
      }
      throw new Error(errorMsg);
    }

    let data = {};
    const text = await response.text();
    if (text) {
      data = JSON.parse(text);
    }

    alert(data.message || 'Email sent successfully!');
    setDataEmail('');
    setDataOtsikko('');
    setDataViesti('');
    setDataNumber('');

  } catch (error) {
    console.error('Error sending email:', error);
    alert(error.message || 'Failed to send email');
  }
};

  return (
  <div id='YHTEYSTIEDOT'>
    <div id='buttonintuotteet'>
      <Link to ='LandingPage' spy={true} smooth={true} duration={200}>
              <img src={arrowup} alt="arrowup" id='arrowup'/>
      </Link>
    </div>
    <section className="contact-section">
      <p className="form-note">Ilmoita viesti-kentässä tarvittava puumäärä tai muut lisätiedot</p>
      <motion.div className="contact-card" 
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: false}}>
        <h2 className="contact-title">OTA YHTEYTTÄ!</h2>
        <form
          onSubmit={handleSendEmail}
          className="contact-form">

          <input type="text" name="name" placeholder="Nimi" value={dataOtsikko} onChange={handleOtsikko} required />
          <input type="email" name="email" placeholder="Sähköposti" value={dataEmail} onChange={handleEmail} required />
          <input type='number' name="phone" placeholder="Puhelinnumero"value={dataNumber} onChange={handleNumber} required />
          <textarea name="message" placeholder="Viesti" rows="6" value={dataViesti} onChange={handleViesti} required />
          <button type="submit">Lähetä</button>
        </form>
      </motion.div>
    </section>
       <div id='links'>
      <a href ="https://www.facebook.com/profile.php?id=61574935507969" target='_blank' rel='noreferrer'>
        <img src={facebook} alt="face" id='facebook'/>
        metsäyhtymä kaukonen
      </a>
      <p id='Phone'>
        <img src={phone} alt="face" id='phone'/>
        {process.env.REACT_APP_CONTACT_PHONE}
      </p>
      <p id='Email'>
        <img src={email} alt="face" id='email'/>
         {process.env.REACT_APP_CONTACT_EMAIL}
      </p>
      <a href='https://www.google.com/maps/place/Sepp%C3%A4l%C3%A4nniementie+64,+71650+Kuopio/@62.9952609,27.3760161,17z/data=!3m1!4b1!4m6!3m5!1s0x4684bd45ca9ba2cb:0x303cddc5d0a9f4d9!8m2!3d62.9952609!4d27.378591!16s%2Fg%2F11c28gr0m5?hl=fi&entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D' target='_blank' id='address' rel='noreferrer'>
        <img src={address} alt="face" id='address'/>
          seppälänniementie 64 , Kuopio, Finland
      </a>
    </div>
  </div>
  )
}

export default Yhteystiedot;
