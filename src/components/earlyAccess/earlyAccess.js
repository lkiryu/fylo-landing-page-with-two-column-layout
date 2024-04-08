import React from "react";

import './earlyAccess.css'

const EarlyAccess = () => {
    return (
        <section className="early-access">
            <div className="early-access-content">
                <div className="info">
                    <h2 className="title">Get early access today</h2>
                    <p className="description">It only takes a minute to sign up and our free starter tier is extremely generous.
                        If you have any questions, our support team would be happy to help you.</p>
                </div>
                <div className="inputs">
                    <input type="email" placeholder="email@example.com" className="emailInput"></input>
                    <input type="submit" className="submitInput" value='Get Started For Free'></input>
                </div>
            </div>
        </section>
    )
}

export default EarlyAccess