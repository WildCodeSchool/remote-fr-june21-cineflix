import { NavLink } from 'react-router-dom';
import './Footer.css';


function Footer () {
    return (
        <footer>
            <div className="footer-container">
                <h3>Nos réseaux</h3>
                <ul className="list-media">
                    <li><a href="#"><img className="media" src="" alt="icone réseau sociaux"/>Facebook</a></li>
                    <li><a href="#"><img className="media" src="" alt="icone réseau sociaux"/>Instagram</a></li>
                    <li><a href="#"><img className="media" src="" alt="icone réseau sociaux"/>Twitter</a></li>
                    <li><a href="#"><img className="media" src="" alt="icone réseau sociaux"/>Github</a></li>
                    <li><a href="#"><img className="media" src="" alt="icone réseau sociaux"/>Youtube</a></li>
                </ul>
            </div>
            <div className="footer-containt">
                <p>© 2021 Racoon Team - Hébergement GitHub, <NavLink to="/loading">À propos et mentions légales</NavLink>et<NavLink to="/contact">nous contacter</NavLink></p>
            </div>



        </footer>
    )
}
export default Footer;