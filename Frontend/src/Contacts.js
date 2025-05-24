import React from 'react'
import { Link } from 'react-scroll';
import { motion } from 'framer-motion'; 
import arrowup from './IMAGES/arrowup.png'
import facebook from './IMAGES/facebook.png'
import phone from './IMAGES/phone.png'
import email from './IMAGES/email.png'
import { useState } from 'react';

function Yhteystiedot() {
  const [dataEmail, setDataEmail] = useState('');
  const [dataOtsikko, setDataOtsikko] = useState('');
  const [dataViesti, setDataViesti] = useState('');
  const BaseURL = "http://localhost:3001";

  const handleEmail = (e) => {
    setDataEmail(e.target.value);
    console.log(e.target.value);
  };

    const handleOtsikko = (e) => setDataOtsikko(e.target.value);
    const handleViesti = (e) => setDataViesti(e.target.value);

  const handleSendEmail = async (e) => {
    e.preventDefault();
    try{
    const response = await fetch(`${BaseURL}/api/email/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: dataEmail,
        otsikko: dataOtsikko,
        viesti: dataViesti
      })
    });

    const data = await response.json();
    if (response.ok) {
      alert('Email sent successfully');
      setDataEmail('');
      setDataOtsikko('');
      setDataViesti('');
    } else {
      alert(data.msg);
    } 
  } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email');
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
          <textarea name="message" placeholder="Viesti" rows="6" value={dataViesti} onChange={handleViesti} required />
          <button type="submit">Lähetä</button>
        </form>
      </motion.div>
    </section>
       <div id='links'>
      <Link href ="https://www.facebook.com/">
        <img src={facebook} alt="face" id='facebook'/>
        metsäyhtymäkaukonen
      </Link>
      <p id='Phone'>
        <img src={phone} alt="face" id='facebook'/>
        +358 40 560 1442
      </p>
      <p id='Email'>
        <img src={email} alt="face" id='facebook'/>
        metsayhtymakaukonen@gmail.com
      </p>
    </div>
  </div>
  )
}

export default Yhteystiedot;