import React from "react";
import illustration from '../../images/illustration-1.svg'

import './sectionHero.css'

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="info">
                    <h2 className="title">All your files in one secure location, accessible anywhere.</h2>
                    <p className="description">Fylo stores your most important files in one secure location.
                        Access them wherever you need, share and collaborate with friends,
                        family, and co-workers.</p>
                    <div className="inputs">
                        <input type="email" className="emailInput" placeholder="Enter your email..."></input>
                        <input type="submit" className="submitInput" value='Get Started'></input>
                    </div>
                </div>

                <img src={illustration} alt="hero illustation"></img>
            </div>
        </section>
    )
}

export default Hero