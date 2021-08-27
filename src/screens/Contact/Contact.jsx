import { useState } from 'react';

import Navbar from '../../components/Navbar/Navbar';

import Swal from 'sweetalert2';

import './Contact.css';
import face from "../../assets/facebook.png";
import insta from "../../assets/instagram.png";
import link from "../../assets/linkedin.png";
import loc from "../../assets/localisation.png";
import mail from "../../assets/mail.png";
import pint from "../../assets/pinterest.png";
import tel from "../../assets/tel.png";
import twit from "../../assets/twitter.png";

const Contact = () => {
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")


    const isEmail = () => {
        let mail = document.getElementById('no-email');
        let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (email.match(regex)) {
            mail.style.display = 'none';
            return true;
        } else {
            mail.style.display = 'block'
            return false
        }
    }

    const failMessage = () => {
        let formMessage = document.querySelector('.invalid-message')
        formMessage.innerHTML = ' Nom, Email et Message sont obligatoire'
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (name && isEmail() && message) {

            const reset = () => {
                setName("")
                setLastName("")
                setEmail("")
                setPhone("")
                setMessage("");
            }
            reset()
            Swal.fire('Email envoyé')
        } else {
            failMessage()
        }
    }

    return (
        <>
        <Navbar />
        <form className="contactForm">
            <div className="container-contact">
                <div className="contact-info">
                    <div>
                        <h2>Contact Info</h2>
                        <ul className="info">
                            <li>
                                <span><img src={loc} alt="" /></span>
                                <span>9 Allée Serr<br />33100 Bordeaux</span>
                            </li>
                            <li>
                                <span><img src={mail} alt="" /></span>
                                <span>lorem@ipsum.com</span>
                            </li>
                            <li>
                                <span><img src={tel} alt="" /></span>
                                <span>01.40.24.12.78</span>
                            </li>
                        </ul>
                    </div>
                    <ul className="sci">
                        <li><a href="#"><img src={face} alt="" /></a></li>
                        <li><a href="#"><img src={twit} alt="" /></a></li>
                        <li><a href="#"><img src={insta} alt="" /></a></li>
                        <li><a href="#"><img src={pint} alt="" /></a></li>
                        <li><a href="#"><img src={link} alt="" /></a></li>
                    </ul>
                </div>
                <div className="contact-form">
                    <h2>Envoyez nous un message</h2>
                    <div className="form-box">
                        <div className="input-box y">
                            <input type="text" id="name" name="name" onChange={(e) => setName(e.target.value)} value={name} required />
                            <span>Nom</span>
                        </div>
                        <div className="input-box y">
                            <input type="text" id="lastName" name="lastName" onChange={(e) => setLastName(e.target.value)} value={lastName} required />
                            <span>Prénom</span>
                        </div>
                        <div className="input-box y">
                            <label id="no-email">Email non valide</label>
                            <input type="text" id="email" name="email" /*pattern="/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/"*/ onChange={(e) => setEmail(e.target.value)} value={email} required />
                            <span>Email</span>
                        </div>
                        <div className="input-box y">
                            <input type="text" id="phone" name="phone" /*pattern="^0[1-7]\d{8}$" */ onChange={(e) => setPhone(e.target.value)} value={phone} required />
                            <span>Téléphone</span>
                        </div>
                        <div className="input-box y1">
                            <textarea id="message" name="message" onChange={(e) => setMessage(e.target.value)} value={message} required></textarea>
                            <span>Ecrivez votre message ici...</span>
                        </div>
                        <div className="input-box y1">
                            <input type="submit" value="Envoyer" onClick={handleSubmit} />
                            <div className="invalid-message"></div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        </>
        )
    }
    
    
    export default Contact;
