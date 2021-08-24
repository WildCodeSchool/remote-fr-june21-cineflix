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
      fetch(`https://api.themoviedb.org/3/search/multi?api_key=cda80ca49e23464f07b0b27ac89f1fdd&query=${searchValue}&inlude_adult=false`)
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

  // // Function to create-add or add the localstorage object of favorites
  // const handleFavorite = (id, type) => {

  //   let storedDatas

  //   // Try to get the favorites object in localstorage
  //   try {
  //     storedDatas = JSON.parse(localStorage["favorites"])
  //   } catch(error) {

  //   }
    
  //   // If there is already the favorites object
  //   if(storedDatas) {

  //     // Check if there is not already in the array, if not we retrieve all the data, add the new one and push it all
  //     if(!storedDatas.some(element => (element.id === id) && (element.type === type))) {

  //       let newFavorite = {id: id, type: type}
  //       let newDatas = []
  //       storedDatas.map(element => newDatas.push(element))
  //       newDatas.push(newFavorite)
  //       localStorage["favorites"] = JSON.stringify(newDatas)
  //       alert('Bien ajouté à vos favoris')
  //     }

  //   // If there is not the favorites object, we create it
  //   } else {

  //     let newFavorite = [{id: id, type: type}]
  //     localStorage["favorites"] = JSON.stringify(newFavorite)
  //     alert('Bien ajouté à vos favoris')
  //   }
     
  // }


  // Function to create-add or add the localstorage object of favorites
  const handleFavorite = (media) => {

    let storedDatas

    // Try to get the favorites object in localstorage
    try {
      storedDatas = JSON.parse(localStorage["favorites"])
    } catch(error) {

    }
    
    // If there is already the favorites object
    if(storedDatas) {

      // Check if there is not already in the array, if not we retrieve all the data, add the new one and push it all
      if(!storedDatas.some(element => (element.id === media.id && element.title === media.title))) {  //&& (element.type === type)

        let newDatas = []
        storedDatas.map(element => newDatas.push(element))
        newDatas.push(media)
        localStorage["favorites"] = JSON.stringify(newDatas)
        Swal.fire('Bien ajouté à vos favoris')
      }

    // If there is not the favorites object, we create it
    } else {

      let newFavorite = [media]
      localStorage["favorites"] = JSON.stringify(newFavorite)
      Swal.fire('Bien ajouté à vos favoris')
    }
     
  }
  
  return (
      <div className="searchContainer">
        <Navbar />
        <div className="Search searchShow">
          <ul>
            {searchResult &&
            searchResult.map((movie, index) => (
            <li key={index}>
              {movie.poster_path &&
              <div className="searchMovieCard">
                {/* movie.media_type === 'tv' ? */}
                {movie.number_of_seasons ?
                <NavLink to={`/tv-card/${movie.id}`} onChange={resetSearch}>
                  <img key={index} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie-img" />
                </NavLink>
                 : 
                <NavLink to={`/movie-card/${movie.id}`} onChange={resetSearch}>
                  <img key={index} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie-img" title="Voir les infos" />
                </NavLink>} 
                {/* <label for={movie.id} className="add-to-favortie-label"><i className='fas fa-star add-favorite-button checked' title="Ajouter aux favoris"></i></label>
                <input type="checkbox" className="add-to-favorite" id={movie.id} onChange={(event) => handleFavorite(event.target.id, movie.number_of_seasons ? 'tv' : 'movie')} />
              </div> */}
              <label for={movie.id} className="add-to-favortie-label"><i className='fas fa-star add-favorite-button checked' title="Ajouter aux favoris"></i></label>
              <input type="checkbox" className="add-to-favorite" id={movie.id} onChange={(event) => handleFavorite(movie)} />
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
