import React from "react";

import heroIllustration from '../../images/illustration-1.svg'

const Hero = () => {
    return (
        <section className="Hero">
            <div className="info">
                <h2 className="title">All your files in one secure location, accessible anywhere.</h2>
                <p className="description">Fylo stores your most important files in one secure location.
                    Access them wherever you need, share and collaborate with friends,
                    family, and co-workers.</p>
                <div className="inputs">
                    <input type="email" placeholder="Enter your email..."></input>
                    <input type="submit" className="submitInput" value='Get Started'></input>
                </div>
            </div>

            <img src={heroIllustration} alt="hero illustation"></img>
        </section>
    )
}

export default Hero