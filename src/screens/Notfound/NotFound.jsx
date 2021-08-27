import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";

import "./NotFound.css"


const NotFound = () => {
    return (
        <div className="notFound">
            <div className="notFoundNavbar">
                <div className="notFoundNavContents">
                    <Link to="/home"><img
                        className='notFoundNavLogo'
                        src={logo}
                        alt='logo' />
                    </Link>
                </div>
            </div>
            <div className="notFoundContent">
                <h1 className="NotFoundTitle">Vous cherchez votre chemin ?</h1>
                <p className="NotFoundParagraphe">Désolé, nous n'avons pas trouvé cette page. Un vaste choix de programmes vous attend sur la page d'accueil.</p>
                <Link to="/home">
                    <button className="notFoundHomeButton">
                        Accueil
                    </button>
                </Link>
                <span>Code d'erreur : <strong>NSES-404</strong></span>
            </div>
        </div>
    );
};

export default NotFound;