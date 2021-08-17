import { useEffect } from "react";
import { useState } from "react";

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
            setFavoriteList(currentFavorites => [...currentFavorites, data.results])
          })
      } else {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=cda80ca49e23464f07b0b27ac89f1fdd&language=fr`)
          .then((response) => response.json())
          .then((data) => {
            setFavoriteList(currentFavorites => [...currentFavorites, data.results])
          })
      }
        
    }

    let favoriteDatas

    // Try if there is a favorites object in localstorage
    try {
      favoriteDatas = JSON.parse(localStorage["favorites"])
    } catch(error) {
      
    }

    if(favoriteDatas) {
      console.log(favoriteDatas)
      handleFavorite()
      favoriteDatas.map((element) => getFavoriteData(element['id'], element['type']))
      
    }
  },[])

  return (
    <div className='favoriteContainer'>
      <Navbar />
      <div className='Favorite'>
        <h2>Vos favoris</h2>
        {areFavorite ? 
        <ul>
          {favoriteList.map((favorite, index) => <li><img key={index} src={`https://image.tmdb.org/t/p/w500${favorite.poster_path}`} alt='favorite' /></li>)}
        </ul>
        :
        <h4>Votre liste de favoris est vide ...</h4>}
      </div>
    </div>
  );
}
 
export default Favorite;