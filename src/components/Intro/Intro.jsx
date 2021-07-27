import "./Intro.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo_transparent.png"; 
import film from "../../assets/film.mp4"

function Intro() {
    return (
        <div className="container">
          <div className="videoContainer">
            <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                <source src={film}/>
            </video>
          </div>
          <div className="buttonContainer">
            <img src={logo} className="logo-intro" alt="logo du site" />
            <NavLink to="/home" className="button-intro">
                <span>ENTRER</span>
                <span>ENTRER</span>
            </NavLink>
            </div>
        </div>
    )

    }
export default Intro;