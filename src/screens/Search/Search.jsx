import React from "react"
import { useEffect, useState } from 'react'
import { NavLink, useParams } from "react-router-dom"

import Swal from "sweetalert2";

import Navbar from "../../components/Navbar/Navbar"

import "./Search.css"

const Search = () => {

  let { searchValue } = useParams();

  const [searchResult, setSearchResult] = useState()

// Fetch to user search value

  useEffect(() => {
    const getData = () => {
      fetch(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&query=${searchValue}&inlude_adult=false`)
        .then((response) => response.json())
        .then((data) => {
          setSearchResult(data.results)
        })
    }
    getData()
  }, [searchValue])

  // Reset the searchbar
  const resetSearch = () => {
    setSearchResult('')
  }

  // Function to create-add or add the localstorage object of favourites
  const handleFavourite = (media) => {

    let storedDatas

    // Try to get the favourites object in localstorage
    try {
      storedDatas = JSON.parse(localStorage["favourites"])
    } catch(error) {

    }
    
    // If there is already the favourites object
    if(storedDatas) {

      // Check if there is not already in the array, if not we retrieve all the data, add the new one and push it all
      if(!storedDatas.some(element => (element.id === media.id && element.title === media.title))) {

        let newDatas = []
        storedDatas.map(element => newDatas.push(element))
        newDatas.push(media)
        localStorage["favourites"] = JSON.stringify(newDatas)
        Swal.fire('Bien ajouté à vos favoris')
      }

    // If there is not the favourites object, we create it
    } else {

      let newFavourite = [media]
      localStorage["favourites"] = JSON.stringify(newFavourite)
      Swal.fire('Bien ajouté à vos favoris')
    }
     
  }
  
  return (
      <div className="searchContainer">
        <Navbar />
        <div className="Search searchShow">
        <h2 className="searchTitle">Recherches :</h2>
          <ul>
            {searchResult &&
            searchResult.map((movie, index) => (
            <li key={index}>
              {movie.poster_path &&
              <div className="searchMovieCard">
                {movie.number_of_seasons ?
                <NavLink to={`/tv-card/${movie.id}`} onChange={resetSearch}>
                  <img key={index} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie-img" />
                </NavLink>
                 : 
                <NavLink to={`/movie-card/${movie.id}`} onChange={resetSearch}>
                  <img key={index} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie-img" title="Voir les infos" />
                </NavLink>} 
              <label for={movie.id} className="add-to-favourite-label"><i className='fas fa-star add-favourite-button checked' title="Ajouter aux favoris"></i></label>
              <input type="checkbox" className="add-to-favourite" id={movie.id} onChange={(event) => handleFavourite(movie)} />
              </div>
              }
            </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Search
