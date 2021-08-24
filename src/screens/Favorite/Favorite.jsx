import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar"

import './Favorite.css'

const Favorite = () => {
  const [areFavorite, setAreFavorite] = useState(false)
  const [favoriteList, setFavoriteList] = useState([])

  const [toRemove, setToRemove] = useState(false)

  console.log('favoriteList start:')
  console.log(favoriteList)

  // useEffect(() => {
  //   const handleFavorite = (favList) => {
  //     setAreFavorite(true)
  //   }

  //   const getFavoriteData = (id, type) => {
  //     if(type === 'tv') {
  //       fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=cda80ca49e23464f07b0b27ac89f1fdd&language=fr`)
  //         .then((response) => response.json())
  //         .then((data) => {
  //           setFavoriteList(currentFavorites => [...currentFavorites, data])
  //         })

  //     } else {
  //       fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=cda80ca49e23464f07b0b27ac89f1fdd&language=fr`)
  //         .then((response) => response.json())
  //         .then((data) => {
  //           setFavoriteList(currentFavorites => [...currentFavorites, data])
  //         })

  //     }
        
  //   }

  //   let favoriteDatas

  //   // Try if there is a favorites object in localstorage
  //   try {
  //     favoriteDatas = JSON.parse(localStorage["favorites"])
  //   } catch(error) {
      
  //   }

  //   if(favoriteDatas) {
  //     console.log('favoriteDatas useEffect:')
  //     console.log(favoriteDatas)
  //     favoriteDatas.map((element) => getFavoriteData(element['id'], element['type']))
  //     handleFavorite()
  //   }
  // },[])

  // const removeFavorite = (id, type) => {

  //   let favoriteDatas = JSON.parse(localStorage["favorites"])

  //   let newFavorites = favoriteDatas.filter(element => element['id'] !== id)
  //   console.log('id et newFavorites removeFavorite:')
  //   console.log(id)
  //   console.log(newFavorites)

  // }

  useEffect(() => {
    const handleFavorite = (favList) => {
      setAreFavorite(true)
    }

    const getFavoriteData = (id, typeTv) => {
      console.log(typeTv)
      if(typeTv) {
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

    let favoriteDatas

    // Try if there is a favorites object in localstorage
    try {
      favoriteDatas = JSON.parse(localStorage["favorites"])
    } catch(error) {
      
    }

    if(favoriteDatas) {
      console.log('favoriteDatas useEffect:')
      console.log(favoriteDatas)
      favoriteDatas.map((element) => getFavoriteData(element.id, element.first_air_date ? true : false))
      handleFavorite()
    }
  },[])

  // useEffect(() => {
  //   const removeFavorite = (id, poster) => {

  //     let favoriteDatas = JSON.parse(localStorage["favorites"])
  
  //     let newFavorites = favoriteDatas.filter(element => element.id !== id && element.poster_path !== poster)
  //     localStorage["favorites"] = JSON.stringify(newFavorites)
  //     alert('Favoris retiré')
  
  //   }

  //   removeFavorite()
  // }, [toRemove])

  const removeFavorite = (id, title) => {

    let favoriteDatas = JSON.parse(localStorage["favorites"])

    let newFavorites = favoriteDatas.filter(element => element.id !== id && element.title !== title)
    localStorage["favorites"] = JSON.stringify(newFavorites)
    alert('Favoris retiré')

  }

  return (
    <div className='favoriteContainer'>
      <Navbar />
      <div className='Favorite'>
        <h2>Vos favoris :</h2>
        {areFavorite ? 
        <ul>
          { favoriteList && favoriteList.map((favorite, index) => (
            // favorite.success !== false && 
            <li className="favoriteCard">
              {console.log(favorite)}
              
              <NavLink to={favorite.first_air_date ? `/tv-card/${favorite.id}` : `/movie-card/${favorite.id}`}>
                <img key={index} src={`https://image.tmdb.org/t/p/w300${favorite.poster_path}`} alt='favorite' title={favorite.first_air_date ? `/tv-card/${favorite.id}` : `/movie-card/${favorite.id}`}/>
              </NavLink>
              <label for={favorite.id} className="remove-from-favorite-label">
                <i class="fas fa-trash-alt" title="Retirer des favoris"></i>
              </label>
              <input type="checkbox" id={favorite.id} className="remove-from-favorite" onChange={(event) => removeFavorite(favorite.id, favorite.title)} />
              </li>

          ))}
        </ul>
        :
        <h4>Votre liste de favoris est vide ...</h4>}
      </div>
    </div>
  );
}
 
export default Favorite;