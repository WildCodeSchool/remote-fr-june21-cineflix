import { Link } from "react-router-dom";
import { useRef } from "react";
import { useState } from "react";

import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.png";

import "./Register.css";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleStart = () => {
        setEmail(emailRef.current.value);
    };
    const handleFinish = () => {
        setPassword(passwordRef.current.value);
    };
    return (
        <div className="register">
            <div className="registerNavbar">
                <div className="registerNavContents">
                    <Link to="/home"><img
                        className='registerNavLogo'
                        src={logo}
                        alt='logo' />
                    </Link>
                    <Link to="/login"><img
                        className='registerNavAvatar'
                        src={avatar}
                        alt='avatar' />
                    </Link>
                </div>
            </div>
            <div className="register-container">
                <h1>Toutes les infos sur vos films et séries préférés.</h1>
                <p>
                    Entrez votre email pour créer votre compte.
                </p>
                {!email ? (
                    <div className="input">
                        <input type="email" placeholder="addresse email" ref={emailRef} />
                        <button className="registerButton" onClick={handleStart}>
                            Suivant
                        </button>
                    </div>
                ) : (
                    <form className="input">
                        <input type="password" placeholder="mot de passe" ref={passwordRef} />
                        <button className="registerButton" onClick={handleFinish}>
                            Commencer
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}