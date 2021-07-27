import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.png";
import { useState, useEffect } from "react";
import "./Navbar.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResult from "../SearchResult/SearchResult";
import { NavLink } from "react-router-dom";



const Navbar = () => {
    const [show, handleShow] = useState(false);

    // Search states
    const [searchValue, setSearchValue] = useState("")
    // const [searchResult, setSearchResult] = useState(null)

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
        <div className="Navbar">
            <div className={`nav ${show && "navBlack"}`}>
                <div className="navContents">
                    <NavLink to="/home"><img
                        className='navLogo'
                        src={logo}
                        alt='logo' />
                    </NavLink>

                    <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />

                    <img
                        className='navAvatar'
                        src={avatar}
                        alt='avatar' />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
