import React from 'react'
import "../Styles/Footer.css"
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-container">
          <div className="col">

            <div className="row">
              <h2>LOCATION</h2>
              <span></span>
              <address># 2 London Road</address>
            </div>
          </div>
          <div className="col">
            <h2>OUR PARTNERS</h2>
          </div>
          <div className="col">
            <h2>NEWSLETTER</h2>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer