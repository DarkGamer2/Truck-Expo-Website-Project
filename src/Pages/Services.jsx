import React from 'react'
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import "../Styles/Services.css";
const Services = () => {
    return (
        <div>
            <Navigation />

            <div className="services-offered-container">
                 <div className="title">
                        <h1>SALES</h1>
                    </div>
                <section className="sales">
                    <div className="sales-info">
                        <p>Our Sales Department can assist you in your quest of owning a vehicle.
                            They can professionally handle test drives, vehicle enquries,brochures as well as finiacial assistance.</p>
                    </div>
                    <div className="sales-image">
<img src='https://www.transadvantage.com/wp-content/uploads/2021/01/TA1_10A9134-scaled.jpg' alt='truck-dealer'/>
                    </div>
                </section>
                 <div className="title">
                        <h1>PARTS</h1>
                    </div>
                <section className="parts">
                    <div className="parts-info">
                        <p>Our Parts Center has parts for all model types as well as brands. We offer a large selection of parts for MAN,Kenworth,Freightliner,Scania,Isuzu
                            & much more! They also have a large selection of parts such as lights,gear shifters,transmissions and alot more.
                        </p>
                    </div>
                    <div className="parts-image">
<img src="https://img.directindustry.com/images_di/photo-g/81737-12219924.jpg" alt="transmission" />
                    </div>
                </section>
                 <div className="title">
                        <h1>SERVICE CENTER</h1>
                    </div>
                <section className="service-center">
                   
                    <div className="service-info">
<p>Having the most complete Truck Service Centers means you can count on nearly 3,000 highly skilled 
    technicians coast to coast with ASE and TIA certifications who truly care about the 
    performance of your truck. So when you need truck repair and maintenance, trust 
    the leaders in the Truck Service Industry that have been Voted Best by drivers.
</p>
                    </div>
                    <div className="service-center-image">
<img className="service-photo" src="https://thumbs.dreamstime.com/b/diagnostics-truck-garage-servicing-trucks-car-service-repair-maintenance-201121755.jpg" alt="service-center"/>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Services