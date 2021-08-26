import { NavLink } from "react-router-dom";

import { FaHome } from 'react-icons/fa';

import './BurgerMenu.css';
import { useState } from "react";

const BurgerMenu = () => {

    const [activeMenu, setActiveMenu] = useState(false)

    const handleMenu = () => {
      setActiveMenu(!activeMenu)
    }

    return (
      <div className="sub-menu">
        <ul className={activeMenu ?  "menu-burger-active" : "menu-burger-inactive"}>
          <li className="menu-arrow" onClick={() => handleMenu()}>{activeMenu ? <i class="fas fa-sort-down"></i> : <i class="fas fa-sort-up"></i>}</li>
          <li className="menu-element"><NavLink to="/home">Accueil</NavLink></li>
          <li className="menu-element"><NavLink to='/movie-categories/movie'>Films</NavLink></li>
          <li className="menu-element"><NavLink to='/serie-categories/tv'>Séries</NavLink></li>
        </ul>
      </div>
    );
}

export default BurgerMenu;