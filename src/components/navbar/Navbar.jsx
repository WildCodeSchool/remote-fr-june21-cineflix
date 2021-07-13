import { ArrowDropDown, Notifications, Search } from "@material-ui/icons"
import { useState } from "react"
import "./Navbar.css"
import logo from "../../assets/logo.png"
import SearchBar from "../SearchBar/SearchBar"
import SeriesPage from "../SeriesPage/SeriesPage"
import MyList from "../MyList/MyList"
import MoviesPage from "../MoviesPage/MoviesPage"
import CategoriesPage from "../CategoriesPage/CategoriesPage"


const Navbar = () => {
    const [searchValue, setSearchValue] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };
    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img
                        src={logo}
                        alt="logo cinéflix"
                    />
                    <SeriesPage />
                    <MoviesPage />
                    <CategoriesPage />
                    <MyList />
                </div>
                <div className="right">
                    <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
                    <Search className="icon" />
                    <Notifications className="icon" />
                    <img
                        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                    />
                    <div className="profile">
                        <ArrowDropDown className="icon" />
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
