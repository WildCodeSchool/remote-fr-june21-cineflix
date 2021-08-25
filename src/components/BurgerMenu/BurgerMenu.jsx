import { NavLink } from "react-router-dom";

import './BurgerMenu.css';

const BurgerMenu = () => {

    return (
        <div className='burger-list'>
            <NavLink to="/home">Home</NavLink>
            <NavLink to='/movie-categories/movie'>Films</NavLink>
            <NavLink to='/serie-categories/tv'>Séries</NavLink>
        </div>
    );
}

export default BurgerMenu;