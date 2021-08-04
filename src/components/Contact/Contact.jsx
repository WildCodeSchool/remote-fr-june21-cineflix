import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

import './Contact.css';


const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        sendFeedback("***TEMPLAYE_ID***", {
            name,
            email,
            message,
        });
    };

    const sendFeedback = (templateId, variables) => {

        window.emailjs
            .send("gmail", templateId, variables)
            .then((res) => {
                console.log('success !');
                setName("");
                setEmail("");
                setMessage("");
            })
            .catch(
                (err) =>
                    document.querySelector('.form-message').innerHTML =
                    "Une erreur s'est produite, veuillez réessayer.")
    };

    return (
        <div className="contact">
            {/* <div className="loginNavbar">
                <div className="loginNavContents">
                    <Link to="/home"><img
                        className='loginNavLogo'
                        src={logo}
                        alt='logo' />
                    </Link>
                </div>
            </div> */}
            <form className="contact-form">
                <h2 className="contact-title">Contactez-nous</h2>
                <div className="form-content">
                    <input
                        className="contact-input"
                        type="text"
                        id="name"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="nom *"
                        value={name}
                        autoComplete="off"
                    />

                    <div className="email-content">
                        <label id="not-mail">Email non valide</label>
                        <input
                            className="contact-input"
                            type="mail"
                            id="email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="email *"
                            value={email}
                            autoComplete="off"
                        />
                    </div>
                    <textarea
                        className="contact-text"
                        id="message"
                        name="message"
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="message *"
                        value={message}
                    />
                </div>
                <input
                    className="contact-button"
                    type="button"
                    value="Envoyer"
                    onClick={handleSubmit}
                />
                <div className="form-message"></div>
            </form>
        </div>
    );
};

export default Contact;