import React from 'react'
import "../Styles/NavStyle.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faTruckFront } from '@fortawesome/free-solid-svg-icons';
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
    <div>
      <section>
        <header>
          <div className="nav-container">
            <div className="navigation-bar">
              <nav>
                <ul>
                  <li>TRUCK EXPO</li>
                  <li className="nav-link"><FontAwesomeIcon icon={faHouse} /><Link to='/'>HOME</Link></li>
                  <li className="nav-link"><FontAwesomeIcon icon={faTruckFront} /><Link to='/models'>MODELS</Link></li>
                  <li className="nav-link"><FontAwesomeIcon icon={faClockRotateLeft} /><Link to='/history'>HISTORY</Link></li>
                  <li className="nav-link"><FontAwesomeIcon icon={faPhone} /><Link to='/contact'>CONTACT & SUPPORT</Link></li>
                  <li className="nav-link"><FontAwesomeIcon icon={faWrench} /><Link to="/services">SERVICES</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
      </section>
    </div>
  )
}

export default Navigation