import { AuthContext } from "../../authContext/AuthContext";
import { Link, Redirect } from "react-router-dom";
import { login } from "../../authContext/apiCalls";
import { useContext, useState } from "react";

import logo from "../../assets/logo.png";

import "./Login.css";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { dispatch } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        login({ email, password }, dispatch);
    };

    return (
        <div className="login">
            <div className="loginNavbar">
                <div className="loginNavContents">
                    <Link to="/home"><img
                        className='loginNavLogo'
                        src={logo}
                        alt='logo' />
                    </Link>
                </div>
            </div>
            <div className="login-container">
                <form>
                    <h1>S'identifier</h1>
                    <input
                        type="email"
                        placeholder="Adresse Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Mot de Passe"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {/* <Redirect to="/home"> */}
                    <button className="loginButton" onClick={handleLogin}>S'identifier</button>
                    {/* </Redirect> */}
                    <span>
                        Nouveau sur Cinéflix?<br />
                        <Link to="/register"><b>l'inscription c'est par ici.</b></Link>
                    </span>

                    <small>
                        Cette page est protégée par Google reCAPTCHA pour vous assurer que vous n'êtes pas un
                        robot. <br /> <b>plus de détails ici</b>.
                    </small>
                </form>
            </div>
        </div>
    );
}