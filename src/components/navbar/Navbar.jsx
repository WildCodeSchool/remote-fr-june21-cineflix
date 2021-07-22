import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.png";
import { useState, useEffect } from "react";
import "./Navbar.css";



const Navbar = () => {
    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false)
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar)
    }, []);

    return (
        <div className={`nav ${show && "navBlack"}`}>
            <div className="navContents">
                <img
                    className='navLogo'
                    src={logo}
                    alt='logo' />

                {/* <span>Séries</span>
                <span>Films</span> */}

                <img
                    className='navAvatar'
                    src={avatar}
                    alt='avatar' />
            </div>

        </div>
    );
};

export default Navbar;
