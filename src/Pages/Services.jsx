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
                        <p>Sales Paragraph: Our Sales Department can assist you in your quest of owning a vehicle.
                            They can professionally handle test drives, vehicle enquries,brochures as well as finiacial assistance.</p>
                    </div>
                    <div className="sales-image">

                    </div>
                </section>
                <section className="parts">
                    <div className="title">
                        <h1>PARTS</h1>
                    </div>
                    <div className="parts-info">
                        <p>Our Parts Center has parts for all model types as well as brands. We offer a large selection of parts for MAN,Kenworth,Freightliner,Scania,Isuzu
                            & much more!
                        </p>
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
            <Footer />
        </div>
    )
}

export default Services