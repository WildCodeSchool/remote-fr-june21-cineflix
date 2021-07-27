import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.png";

import "./Login.css";

export default function Login() {
    return (
        <div className="login">
            <div className="loginNavbar">
                <div className="loginNavContents">
                    <Link to="/home"><img
                        className='loginNavLogo'
                        src={logo}
                        alt='logo' />
                    </Link>
                    <Link to="/login"><img
                        className='loginNavAvatar'
                        src={avatar}
                        alt='avatar' />
                    </Link>
                </div>
            </div>
            <div className="login-container">
                <form>
                    <h1>S'identifier</h1>
                    <input type="email" placeholder="Email or phone number" />
                    <input type="password" placeholder="Password" />
                    <button className="loginButton">S'identifier</button>
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