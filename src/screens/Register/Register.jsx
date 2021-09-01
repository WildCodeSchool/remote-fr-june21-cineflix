import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

import logo from "../../assets/logo.png";

import "./Register.css";

export default function Register() {

    let history = useHistory();

    const [fields, setFields] = useState({
        email: "",
        password: "",
        username: ""
    });

    const handleInput = (e) => {
        e.preventDefault();
        setFields({ ...fields, [e.target.name]: e.target.value })
    }

    const handleFinish = async (e) => {
        e.preventDefault();
        try {
            const { email, username, password } = fields;
            axios.post("auth/register", { email, username, password }).then(() => {
                history.push("/home");
            });
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
                    <Link to="/login">
                        <button className="loginButton">
                            S'identifier
                        </button>
                    </Link>
                </div>
            </div>
            <div className="register-container">
                <h1>Toutes les infos sur vos films et séries préférés.</h1>

                <form className="input">
                    <p>
                        Inscrivez vous, c'est 100% gratuit.
                    </p>
                    <input type="email" placeholder="Adresse Email" onChange={handleInput} value={fields.email} name="email" />
                    <input type="username" placeholder="Nom d'Utilisateur" onChange={handleInput} value={fields.username} name="username" />
                    <input type="password" placeholder="Mot de Passe" onChange={handleInput} value={fields.password} name="password" />
                    <button className="registerButton" onClick={() => handleFinish()}>
                        Commencer
                    </button>
                </form>
            </div>
        </div>
    );
}