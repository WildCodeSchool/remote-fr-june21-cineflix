import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";
import Favorite from "../../screens/Favourite/Favourite";

import SearchBar from './../SearchBar/SearchBar';
import Search from './../../screens/Search/Search';

import exit from "../../assets/exit.png";
import avatar from "../../assets/avatar.png";
import logo from "../../assets/logo.png";
import { FaHome } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { VscAccount } from 'react-icons/vsc';


import "./Navbar.css";



const Navbar = () => {
    const [show, handleShow] = useState(false);
    const { dispatch } = useContext(AuthContext);
    const [showSearchBar, setShowSearchBar] = useState(false);

    // Search value states
    const [searchValue, setSearchValue] = useState("")

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

    const handleSearchClick = () => {
        if (showSearchBar) {
            <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        }
    }

    return (
        <div className="Navbar">
            <div className={`nav ${show && "navBlack"}`}>
                <div className="navContents">
                    <NavLink to="/home"><img
                        className='navLogo'
                        src={logo}
                        alt='logo' />
                    </NavLink>
                    <NavLink activeStyle={{
                        borderColor: '#9d59d9',
                        borderBottomStyle: 'solid',
                    }} to="/movie-categories/movie" className="categoriesLink">Films
                    </NavLink>
                    <NavLink activeStyle={{
                        borderColor: '#9d59d9',
                        borderBottomStyle: 'solid',
                    }} to="/serie-categories/tv" className="categoriesLink">Séries
                    </NavLink>
                    <NavLink activeStyle={{
                        borderColor: '#9d59d9',
                        borderBottomStyle: 'solid',
                    }} to='/favourites' className="categoriesLink">Favoris
                    </NavLink>
                    <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
                   {/* 
                    <img
                        className='navLogout'
                        src={exit}
                        alt='logout'
                        onClick={() => dispatch(logout())}
                    />
                    <NavLink to="/login">
                        <img
                            className='navLogout'
                            src={exit}
                            alt='logout'
                            onClick={() => dispatch(logout())}
                        />
                    </NavLink>
                   */}
                </div>
                <NavLink to='/favourites'>
                    <FiHeart className="navbar-icons" /></NavLink>
                <NavLink to="/login">
                    <VscAccount className="navbar-icons" /></NavLink>
            </div>
        </div>
    );
};

export default Navbar;
