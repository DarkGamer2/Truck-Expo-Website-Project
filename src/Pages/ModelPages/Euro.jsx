import React from 'react'
import Navigation from "../../Components/Navigation";
import Footer from "../../Components/Footer";
import TruckData from "../../Data/Euro.json";
import "../../Styles/Euro.css"
const Euro = () => {
    return (
        <div>
            <Navigation />

            <section className="truck-model-section">
                <div className="truck-model-container">
                    {TruckData.map((euro) => {
                        return (
                            <>
                                <div className="truck-info-container">

                                    <img className="truck-image" src={euro.imageURL} alt='truck-image' />

                                    <div className="truck-info-container">
                                        <div className="truck-brand">
                                            <h1>Brand: {euro.brand}</h1>
                                        </div>
                                        <div className="truck-model">
                                            <h3>Model: {euro.model}</h3>
                                        </div>
                                        <div className="truck-year">
                                            <h5>Model Year: {euro.year}</h5>
                                        </div>
                                        <div className="truck-price">
                                            <p>Price: {euro.price}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Euro

