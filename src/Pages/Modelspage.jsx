import React from 'react'
import Navigation from '../Components/Navigation';
import Footer from "../Components/Footer";
import "../Styles/Models.css"
const Modelspage = () => {
    return (
        <div>
            <Navigation />
            <div className="model-overview-container">
                <div className="model-container">
                    <div className="content">
                        <>
                            <h1>AMERICAN</h1>
                        </>
                        <p>The iconic classic long nosed beasts that dominate the highway</p>

                        <div className="line">
                            <span></span>
                        </div>
                        <a href='/models'>Browse Models</a>
                    </div>
                    <img src="https://wallpaperaccess.com/full/4311238.jpg" alt='american-truck' />


                </div>
                <div className="space">
                    <span></span>
                </div>
                <div className="model-container">
                    <div className="content">
                        <h1>EUROPEAN</h1>
                        <p>The reigning king of being simple,classic and fuel efficent</p>
                        <a href='/models'>Browse Models</a>
                    </div>
                    <img src="https://images.alphacoders.com/747/747000.jpg" alt='euro-truck' />
                    <div className="space">
                        <span></span>
                    </div>
                </div>
                <div className="space">
                    <span></span>
                </div>
                <div className="model-container">
                    <div className="content">
                        <h1>JAPANESE</h1>
                        <p>Japan Trucks dominate the asian market as well as Africa & India</p>
                        <a href='/models'>Browse Models</a>
                    </div>
                    <img src="https://w0.peakpx.com/wallpaper/104/978/HD-wallpaper-mitsubishi-fuso-truck-mitsubishi-fuso-japanese.jpg" alt='japan-truck' />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Modelspage