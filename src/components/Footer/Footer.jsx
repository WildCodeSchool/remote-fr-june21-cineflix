import { NavLink } from 'react-router-dom';

import face from "../../assets/facebook.png";
import twit from "../../assets/twitter.png";
import insta from "../../assets/instagram.png";
import pint from "../../assets/pinterest.png";
import link from "../../assets/linkedin.png";



import './Footer.css';


function Footer () {
    return (
        <footer>
            <div className="footer-container">
                <h3>Nos réseaux</h3>
                <ul className="list-media">
                    <li><a href="#"><img className="media" src={face} alt="icone réseau sociaux"/>Facebook</a></li>
                    <li><a href="#"><img className="media" src={insta} alt="icone réseau sociaux"/>Instagram</a></li>
                    <li><a href="#"><img className="media" src={twit} alt="icone réseau sociaux"/>Twitter</a></li>
                    <li><a href="#"><img className="media" src="" alt="icone réseau sociaux"/>Github</a></li>
                    <li><a href="#"><img className="media" src="" alt="icone réseau sociaux"/>Youtube</a></li>
                </ul>
            </div>
            <div className="footer-containt">
                <p>© 2021 Racoon Team - Hébergement GitHub, <NavLink to="/loading">À propos et mentions légales</NavLink> et <NavLink to="/contact">nous contacter</NavLink></p>
            </div>
        </footer>
    )
}
export default Footer;