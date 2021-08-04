import { Link } from 'react-router-dom';
import './Footer.css';


function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <ul className="list-media">
                    <li><a href="#"><img className="media" src="" alt="icone réseau sociaux" />Facebook</a></li>
                    <li><a href="#"><img className="media" src="" alt="icone réseau sociaux" />Instagram</a></li>
                    <li><a href="#"><img className="media" src="" alt="icone réseau sociaux" />Twitter</a></li>
                    <li><a href="#"><img className="media" src="" alt="icone réseau sociaux" />Github</a></li>
                    <li><a href="#"><img className="media" src="" alt="icone réseau sociaux" />Youtube</a></li>

                </ul>
                <Link to="/contact">
                    <h3 className="contact-link">contact</h3>
                </Link>

            </div>



        </footer>
    )
}
export default Footer;