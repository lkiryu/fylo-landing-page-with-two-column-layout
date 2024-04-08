import React from "react";
import quotes from '../../images/icon-quotes.svg'
import profilePicture from '../../images/avatar-testimonial.jpg'
import illustration from '../../images/illustration-2.svg'

const SectionStayProductive = () => {
    return (
        <section className="stay-productive">
            <div className="info">
                <h2 className="info">Stay productive, wherever you are</h2>
                <p className="description">Never let location be an issue when accessing your files. Fylo has you
                    covered for all of your file storage needs.</p>
                <p className="description">Securely share files and folders with friends, family and colleagues for
                    live collaboration. No email attachments required!</p>
                <a href="/">See how Fylo works</a>

                <div className="card">
                    <img src={quotes} alt="quotes" className="quotes"></img>
                    <p className="card-description">Fylo has improved our team productivity by an order of magnitude. Since
                        making the switch our team has become a well-oiled collaboration machine.</p>
                    <div className="user-info">
                        <img src={profilePicture} alt="profile illustration"></img>
                        <ul>
                            <li className="username">Kyle Burton</li>
                            <li className="role">Founder & CEO, Huddle</li>
                        </ul>
                    </div>
                </div>
            </div>
            <img src={illustration} alt="illustration"></img>
        </section>
    )
}

export default SectionStayProductive