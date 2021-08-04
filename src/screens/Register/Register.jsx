import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { useRef, useState } from "react";

import loginImg from "../../assets/loginImg.png";
import logo from "../../assets/logo.png";

import "./Register.css";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const emailRef = useRef();
    const passwordRef = useRef();
    const usernameRef = useRef();

    
    const handleStart = () => {
        setEmail(emailRef.current.value);
    };

    const handleFinish = async (e) => {
        e.preventDefault();
        setPassword(passwordRef.current.value);
        setUsername(usernameRef.current.value);
        try {
            await axios.post("auth/register", { email, username, password });
        } catch (err) { }

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
                        src={loginImg}
                        alt='avatar' />
                    </Link>
                </div>
            </div>
            <div className="register-container">
                <h1>Toutes les infos sur vos films et séries préférés.</h1>
                <p>
                    Pour entrer créer votre compte, c'est 100% gratuit.
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
                        <input type="username" placeholder="username" ref={usernameRef} /> <br />
                        <input type="password" placeholder="mot de passe" ref={passwordRef} />

                        {/* <Redirect to="/home"> */}

                        <button className="registerButton" onClick={handleFinish}>
                            Commencer
                        </button>
                        {/* </Redirect> */}

                    </form>
                )}
            </div>
        </div>
    );
}