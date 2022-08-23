import React from 'react'
import "../Styles/Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-container">
          <div className="col">

            <div className="row">
              <h2>LOCATION</h2>
              <span></span>
             <address>
              <p>#6 London Road</p>
              <p>Southampton</p>
              <p>United Kingdom</p>
             </address>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <h2>OUR PARTNERS</h2>
            < a href="https://www.mantruckandbus.com/en/man.html">MAN TRUCK & BUS CO.</a>
            <a href="https://www.scania.com/">SCANIA AB</a>
            <a href="https://www.westernstartrucks.com/">WESTERN STAR</a>
            <a href="https://www.peterbilt.com/">PETERBILT</a>
            <a href="https://www.mitsubishi-fuso.com/en/">FUSO</a>
            <a href="https://www.isuzu.co.uk/">ISUZU</a>
            </div>
          </div>
          <div className="col">
           <div className="row">
             <h2>NEWSLETTER</h2>
            <div className="email-input">
               <input type="email" name="email" placeholder='johndoe@gmail.com'/>
             <button className="newsletter-button" type="submit"><FontAwesomeIcon icon={faArrowRight}/></button>
            </div>
           </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer