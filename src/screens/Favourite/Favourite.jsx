import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import Swal from "sweetalert2";

import Navbar from "../../components/Navbar/Navbar"

import './Favourite.css'

const Favourite = () => {
  const [areFavourite, setAreFavourite] = useState(false)
  const [favouriteList, setFavouriteList] = useState([])

  useEffect(() => {
    const handleFavourite = (favList) => {
      setAreFavourite(true)
    }

    const getFavouriteData = (id, typeTv) => {
      if(typeTv) {
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=fr`)
          .then((response) => response.json())
          .then((data) => {
            setFavouriteList(currentFavourites => [...currentFavourites, data])
          })

      } else {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=fr`)
          .then((response) => response.json())
          .then((data) => {
            setFavouriteList(currentFavourites => [...currentFavourites, data])
          })
      }
    }

    let favouriteDatas

    // Try if there is a favourites object in localstorage
    try {
      favouriteDatas = JSON.parse(localStorage["favourites"])
    } catch(error) {
      
    }

    if(favouriteDatas) {
      favouriteDatas.map((element) => getFavouriteData(element.id, element.first_air_date ? true : false))
      handleFavourite()
    }

  },[])

  const removeFavourite = (id, title, name) => {
    let favouriteDatas = JSON.parse(localStorage["favourites"])
    console.log(favouriteDatas)
    let newFavourites = favouriteDatas.filter(element => (element.id !== id && element.title !== title) || (element.id !== id && element.name !== name))
    console.log(newFavourites)
    localStorage["favourites"] = JSON.stringify(newFavourites)
    setFavouriteList(newFavourites)
    Swal.fire('Favori retiré')
  }

  return (
    <div className='favouriteContainer'>
      <Navbar />
      <div className='Favourite'>
        <h2>Vos favoris</h2>
        {areFavourite ? 
        <ul>
          { favouriteList && favouriteList.map((favourite, index) => (
            <li className="favouriteCard">
              <NavLink to={favourite.first_air_date ? `/tv-card/${favourite.id}` : `/movie-card/${favourite.id}`}>
                <img key={index} src={`https://image.tmdb.org/t/p/w300${favourite.poster_path}`} alt='favourite' title={favourite.first_air_date ? `/tv-card/${favourite.id}` : `/movie-card/${favourite.id}`}/>
              </NavLink>
              <label for={favourite.id} className="remove-from-favourite-label">
                <i class="fas fa-trash-alt" title="Retirer des favoris"></i>
              </label>
              <input type="checkbox" id={favourite.id} className="remove-from-favourite" onChange={(event) => removeFavourite(favourite.id, favourite.title, favourite.name)} />
              </li>

          ))}
        </ul>
        :
        <h4>Votre liste de favoris est vide ...</h4>}
      </div>
    </div>
  );
}
 
export default Favourite;