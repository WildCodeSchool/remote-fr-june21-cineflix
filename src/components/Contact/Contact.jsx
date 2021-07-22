import './Contact.css';
import loc from "../../assets/localisation";
import mail from "../../assets/mail";
import tel from "../../assets/tel";
import Face from "../../assets/facebook";
import twit from "../../assets/twitter";
import insta from "../../assets/instagram";
import pint from "../../assets/pinterest";
import link from "../../assets/linkedin";

const Contact= () => {
    return (
        <>
        <section>

        <div className="container-contact">
            <div className="contact-info">
                <div>
                    <h2>Contact Info</h2>
                    <ul className="info">
                        <li>
                            <span><img src={loc}/></span>
                            <span>
                                 9 Allée Serr<br/>33100 Bordeaux
                            </span>
                        </li>
                        <li>
                            <span><img src={mail}/></span>
                            <span>lorem@ipsum.com</span>
                        </li>
                        <li>
                            <span><img src={tel}/></span>
                            <span>01.40.24.12.78</span>
                        </li>                        
                    </ul>
                </div>
                    <ul className="sci">
                        <li><a href="#"><img src={Face} /></a></li>
                        <li><a href="#"><img src={twit} /></a></li>
                        <li><a href="#"><img src={insta} /></a></li>
                        <li><a href="#"><img src={pint} /></a></li>
                        <li><a href="#"><img src={link} /></a></li>
                    </ul>
                </div>
            </div>
            <div className="contact-form">
            <h2>Envoyez nous un message</h2>
                    <div className="form-box">
                        <div className="input-box y">
                            <input type="text" required/>
                            <span>Nom</span>
                        </div>
                        <div className="input-box y">
                            <input type="text" required/>
                            <span>Prénom</span>
                        </div>
                        <div className="input-box y">
                            <input type="email" required/>
                            <span>Email</span>
                        </div>
                        <div className="input-box y">
                            <input type="text" required/>
                            <span>Téléphone</span>
                        </div>
                        <div className="input-box y1">
                            <textarea required></textarea>
                            <span>Ecrivez votre message ici...</span>
                        </div>
                        <div className="input-box y1">
                        <input type="submit" value="Envoyer"/>
                    </div>
                </div>
            </div>
        </section>
        </>
        )
}


export default Contact;
