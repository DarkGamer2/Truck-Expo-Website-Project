import React from 'react'
import "../Styles/NavStyle.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faTruckFront } from '@fortawesome/free-solid-svg-icons';
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
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
                  <li className="nav-link"><FontAwesomeIcon icon={faHouse} />HOME</li>
                  <li className="nav-link"><FontAwesomeIcon icon={faTruckFront} />MODELS</li>
                  <li className="nav-link"><FontAwesomeIcon icon={faClockRotateLeft} />HISTORY</li>
                  <li className="nav-link"><FontAwesomeIcon icon={faPhone} />CONTACT & SUPPORT</li>
                  <li className="nav-link"><FontAwesomeIcon icon={faWrench} />SERVICES</li>
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