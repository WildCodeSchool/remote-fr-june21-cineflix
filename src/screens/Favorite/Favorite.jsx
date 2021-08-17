import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar"

import './Favorite.css'

const Favorite = () => {
  const [areFavorite, setAreFavorite] = useState(false)
  const [favoriteList, setFavoriteList] = useState([])

  useEffect(() => {
    const handleFavorite = (favList) => {
      setAreFavorite(true)
    }

    const getFavoriteData = (id, type) => {
      if(type === 'tv') {
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=cda80ca49e23464f07b0b27ac89f1fdd&language=fr`)
          .then((response) => response.json())
          .then((data) => {
            setFavoriteList(currentFavorites => [...currentFavorites, data])
          })

      } else {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=cda80ca49e23464f07b0b27ac89f1fdd&language=fr`)
          .then((response) => response.json())
          .then((data) => {
            setFavoriteList(currentFavorites => [...currentFavorites, data])
          })

      }
        
    }

    console.log(favoriteList)

    let favoriteDatas

    // Try if there is a favorites object in localstorage
    try {
      favoriteDatas = JSON.parse(localStorage["favorites"])
    } catch(error) {
      
    }

    if(favoriteDatas) {
      console.log(favoriteDatas)
      favoriteDatas.map((element) => getFavoriteData(element['id'], element['type']))
      handleFavorite()
    }
  },[])

  return (
    <div className='favoriteContainer'>
      <Navbar />
      <div className='Favorite'>
        <h2>Vos favoris :</h2>
        {areFavorite ? 
        <ul>
          { favoriteList && favoriteList.map((favorite, index) => (<li><NavLink to={favorite.seasons ? `/tv-card/${favorite.id}` : `/movie-card/${favorite.id}`}><img key={index} src={`https://image.tmdb.org/t/p/w300${favorite.poster_path}`} alt='favorite' /></NavLink></li>)) }
        </ul>
        :
        <h4>Votre liste de favoris est vide ...</h4>}
      </div>
    </div>
  );
}
 
export default Favorite;