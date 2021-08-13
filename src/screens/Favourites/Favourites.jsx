import { useState, useEffect } from "react";

import Navbar from "../../components/Navbar/Navbar";
import FavouriteList from './../../components/FavouriteList/FavouriteList';

import './Favourites.css';

const Favourites = () => {
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        const getFavourites = () => {
            const storeFavourites = JSON.parse(localStorage.getItem('favourite'));
            setFavourites(storeFavourites);
        }
        getFavourites();
    }, [])

    const removeFavourite = (Movie) => {
        const newFavouriteList = favourites.filter(item => item.id !== Movie.id );
        setFavourites(newFavouriteList);
        localStorage.setItem('favourite', JSON.stringify(newFavouriteList));
    }

    return (
        <div className='favourite-container'>
            <Navbar />
            <FavouriteList favouriteItem={favourites} handleRemoveClick={removeFavourite} />
        </div>
    );
}

export default Favourites;