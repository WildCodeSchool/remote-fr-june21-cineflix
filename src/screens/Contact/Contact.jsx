import { useState } from 'react';

import './Contact.css';
import loc from "../../assets/localisation.png";
import mail from "../../assets/mail.png";
import tel from "../../assets/tel.png";
import face from "../../assets/facebook.png";
import twit from "../../assets/twitter.png";
import insta from "../../assets/instagram.png";
import pint from "../../assets/pinterest.png";
import link from "../../assets/linkedin.png";

const Contact = () => {
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState ("")
    const [message, setMessage] = useState ("")
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
    }
        
    return (
        
        <form>
                <div className="container-contact">
                    <div className="contact-info">
                        <div>
                            <h2>Contact Info</h2>
                            <ul className="info">
                                <li>
                                    <span><img src={loc} /></span>
                                    <span>
                                        9 Allée Serr<br />33100 Bordeaux
                                    </span>
                                </li>
                                <li>
                                    <span><img src={mail} /></span>
                                    <span>lorem@ipsum.com</span>
                                </li>
                                <li>
                                    <span><img src={tel} /></span>
                                    <span>01.40.24.12.78</span>
                                </li>
                            </ul>
                        </div>
                        <ul className="sci">
                            <li><a href="#"><img src={face} /></a></li>
                            <li><a href="#"><img src={twit} /></a></li>
                            <li><a href="#"><img src={insta} /></a></li>
                            <li><a href="#"><img src={pint} /></a></li>
                            <li><a href="#"><img src={link} /></a></li>
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
                            <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
                            <span>Email</span>
                        </div>
                        <div className="input-box y">
                            <input type="text" id="phone" name="phone" onChange={(e) => setPhone(e.target.value)} value={phone} required />
                            <span>Téléphone</span>
                        </div>
                        <div className="input-box y1">
                            <textarea id="message" name="message" onChange={(e) => setMessage(e.target.value)} value={message} required></textarea>
                            <span>Ecrivez votre message ici...</span>
                        </div>
                        <div className="input-box y1">
                            <input type="submit" value="Envoyer" onClick={handleSubmit}/>
                            <div className="invalid-message"></div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        
        )
    }
    
    
    export default Contact;