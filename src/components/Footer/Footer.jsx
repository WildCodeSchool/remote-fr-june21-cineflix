import { NavLink } from 'react-router-dom';

import face from "../../assets/facebook.png";
import twit from "../../assets/twitter.png";
import insta from "../../assets/instagram.png";
import pint from "../../assets/pinterest.png";
import link from "../../assets/linkedin.png";
import git from "../../assets/github.png";
import you from "../../assets/youtube.png";


import './Footer.css';


function Footer () {
    return (
        <footer>
            <div className="footer-container">
                
                <ul className="list-media">
                    <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fab fa-github"></i></a></li>
                    <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                </ul>
            </div>
            <div className="footer-containt">
                <p>© 2021 Racoon Team - Hébergement GitHub, <NavLink to="/loading">À propos et mentions légales</NavLink> et <NavLink to="/contact">nous contacter</NavLink></p>
            </div>
        </footer>
    )
}
export default Footer;