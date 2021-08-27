import { useState, useEffect, useContext } from "react";

import { NavLink } from "react-router-dom";

import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";

import BurgerMenu from './../BurgerMenu/BurgerMenu';
import SearchBar from './../SearchBar/SearchBar';

import avatar from "../../assets/avatar.png";
import exit from "../../assets/exit.png";
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
    const [showBurger, setShowBurger] = useState(false);

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

    /********** */
    const handleBurgerClick = () => {
      const homeIcon = document.querySelector('.home-icon');
      const burgerList = document.querySelector('.burger-list');
      homeIcon.addEventListener('click', (e) => {
          burgerList.classList.toggle('slide-burger');
      })
    }

    return (
        <>
            <div className="Navbar">
                <div className={`nav ${show && "navBlack"}`}>
                    <div className="navContents">
                        <NavLink to="/home"><img
                            className='navLogo'
                            src={logo}
                            alt='logo' />
                        </NavLink>
                        <div className="categoriesLink">
                            <NavLink activeStyle={{
                                borderColor: '#9d59d9',
                                borderBottomStyle: 'solid',
                            }} to="/movie-categories/movie">Films
                            </NavLink>
                            <NavLink activeStyle={{
                                borderColor: '#9d59d9',
                                borderBottomStyle: 'solid',
                            }} to="/serie-categories/tv">Séries
                            </NavLink>
                            <NavLink activeStyle={{
                                borderColor: '#9d59d9',
                                borderBottomStyle: 'solid',
                            }} to="/favourites">Favoris
                            </NavLink>
                        </div>
                        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />

                        <NavLink to="/login">
                            <img
                                className='navLogout'
                                src={avatar}
                                alt='logout'
                                onClick={() => dispatch(logout())}
                            />
                        </NavLink>
                    </div>
                </div>
                <div className="mobile-navbar">
                    <div>
                        <FaHome className='home-icon' onClick={(e) => setShowBurger(!showBurger)} />
                        {showBurger && (
                            <BurgerMenu />
                        )}
                    </div>
                    <div>
                        <FaSearch className={showSearchBar ? "invisible-icons" : "navbar-icons"} onClick={(e) => setShowSearchBar(true)} />
                        {showSearchBar && (
                            <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
                        )}
                    </div>
                    <NavLink to='/favourites'>
                        <FiHeart className="navbar-icons" /></NavLink>
                    <NavLink to="/login">
                        <img
                            className='navAvatar'
                            src={avatar}
                            alt='avatar'
                        />
                    </NavLink>
                </div>
            </div>
            <div className="mobile-navbar">
                    <BurgerMenu />
                <div>
                    <FaSearch className="navbar-icons" onClick={(e) => setShowSearchBar(!showSearchBar)} />
                    {showSearchBar && (
                        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
                    )}
                </div>
                <NavLink to='/favourites'>
                    <FiHeart className="navbar-icons" /></NavLink>
                <NavLink to="/login">
                    <VscAccount className="navbar-icons" /></NavLink>
            </div>
        </>
    );
};

export default Navbar;
