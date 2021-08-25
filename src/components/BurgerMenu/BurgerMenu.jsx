import { NavLink } from "react-router-dom";

import { FaHome } from 'react-icons/fa';

import './BurgerMenu.css';

const BurgerMenu = () => {

    return (
        <div className='burger-list'>
            <NavLink to="/home"><FaHome className='home-icon'/></NavLink>
            <NavLink to='/movie-categories/movie'>Films</NavLink>
            <NavLink to='/serie-categories/tv'>Séries</NavLink>
        </div>
    );
}

export default BurgerMenu;