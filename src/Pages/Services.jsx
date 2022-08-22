import React from 'react'
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
const Services = () => {
    return (
        <div>
            <Navigation />

            <div className="services-offered-container">
                <section className="sales">
                    <div className="title">
                        <h1>SALES</h1>
                    </div>
                    <div className="sales-info">

                    </div>
                    <div className="sales-image">

                    </div>
                </section>
                <section className="parts">
                    <div className="title">
                        <h1>PARTS</h1>
                    </div>
                    <div className="parts-info">

                    </div>
                    <div className="parts-image">

                    </div>
                </section>
                <section className="service-center">
                    <div className="title">
                        <h1>SERVICE CENTER</h1>
                    </div>
                    <div className="service-info">

                    </div>
                    <div className="service-center-image">

                    </div>
                </section>
            </div>
        </div>
    )
}

export default Services