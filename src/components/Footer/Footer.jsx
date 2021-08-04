import { Link, NavLink } from 'react-router-dom';
import './Footer.css';


function Footer() {
    return (
        <footer>
            <div className="footer-container">

                <ul className="list-media">
                    <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-github"></i></a></li>
                    <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                </ul>
                <Link to="/contact">
                    <h3 className="contact-link">contact</h3>
                </Link>

            </div>
            <div className="footer-containt">
                <p>© 2021 Racoon Team - Hébergement GitHub, <NavLink to="/loading">À propos et mentions légales</NavLink> et <NavLink to="/contact">nous contacter</NavLink></p>
            </div>
        </footer>
    )
}
export default Footer;