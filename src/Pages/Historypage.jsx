import React from 'react'
import Footer from '../Components/Footer'
import Navigation from '../Components/Navigation'
import "../Styles/History.css";
const Historypage = () => {
    return (
        <div>
            <Navigation />

            <div className="history">
                <div className="title">
                    <h2>Our History</h2>
                    <div className="content">
                        <article>Truck Expo was founded in 1984 when our founder,
                            John Smithson had the vision of helping the need of long haul
                            transportation globally. Since then our company has exported more than
                            500,000 trucks worldwide.</article>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Historypage