import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import avatar from "../../assets/avatar.png";
import logo from "../../assets/logo.png";
import SearchBar from "../SearchBar/SearchBar";
import SearchResult from "../SearchResult/SearchResult";
import "./Navbar.css";



const Navbar = () => {
    const [show, handleShow] = useState(false);

    // Search states
    const [searchValue, setSearchValue] = useState("")
    const [searchResult, setSearchResult] = useState(null)

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

                    <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} setSearchResult={setSearchResult} />

                    <img
                        className='navAvatar'
                        src={avatar}
                        alt='avatar' />
                </div>
            </div>
            {searchResult && <SearchResult searchResult={searchResult} />}
        </div>
    );
};

export default Navbar;
