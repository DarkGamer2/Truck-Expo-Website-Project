import React from 'react'
import { useState, useEffect } from 'react'
import Navigation from '../Components/Navigation'
import "../Styles/ContactForm.css"
import "../Styles/ContactGeneralStyling.css"
const ContactSupportpage = () => {
    const [customerFirstName, setCustomerFirstName] = useState("");
    const [customerLastName, setCustomerLasttName] = useState("");
    const [customerEmailAddress, setCustomerEmailAddress] = useState("");
    const [customerOption, setCustomerOption] = useState("");
    const [query, setQuery] = useState("");

    useEffect(() => {
        const Query = { customerFirstName, customerLastName, customerEmailAddress, customerOption, query }
    })


    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div>
            <Navigation />
            <div className="form-container">
                <form>
                    <div className="form-group">
                        <label className="label" htmlFor='customerFirstName'>First Name: </label>
                        <input type="text" name={customerFirstName} onChange={(e) => setCustomerFirstName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor='customerLastName'>Last Name: </label>
                        <input type="text" name={customerLastName} />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor='customerEmailAddress'>Email: </label>
                        <input type="email" name={customerEmailAddress} />
                    </div>
                    <div className="form-group">
                        <label className='label'>Select Service Type: </label>
                        <select>
                            <option name="option">Select Service Type</option>
                            <option name="option"></option>
                            <option name="option"></option>
                            <option name="option"></option>
                            <option name="option"></option>
                            <option name="option"></option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor='query'>Query: </label>
                        <textarea className='col-20'></textarea>
                    </div>
                    <button type='submit' onSubmit={handleSubmit} className="request-button">Submit</button>
                </form>
            </div>

            <div className="additonal-support-container">
                <div className="branches-container">
                    <div className="title">
                        <h1>OUR BRANCHES</h1>
                        <div className="branches-info">
                            <p>Our company operate in over 20 countries with over 100 branches.
                                Come visit us at any of branches for a one and one session
                                with our highly trained employees and have your queries and issues solved instantly.</p>
                        </div>
                        <div className="branch-image">
                            <img src={'https://media.istockphoto.com/photos/empty-road-at-building-exterior-picture-id479842074?k=20&m=479842074&s=612x612&w=0&h=HS6lsU1f9W21IkotS3cxdvU5KeEO-gLMUa6xrIBbR6k='} alt="office-building" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="staff-support-container">
                <div className="staff-container">
                    <div className="title">

                    </div>
                    <div className="staff-info">

                    </div>

                    <div className="staff-image">
                        <img src={'https://bernardmarr.com/wp-content/uploads/2021/07/Measuring-Staff-Satisfaction-7-Reasons-Why-Your-Staff-Survey-Is-Not-Giving-You-Anything-Useful.png'} alt="staff-image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSupportpage