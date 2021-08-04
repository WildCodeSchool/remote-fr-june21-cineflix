import React from "react"
import { useEffect, useState } from 'react'
import { NavLink, useParams } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import "./Search.css"

const Search = () => {

  let { searchValue } = useParams();

  const [searchResult, setSearchResult] = useState()
  const [showFavoriteButton, setShowFavoriteButton] = useState(false)

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

  const switchFavorite = () => {
    setShowFavoriteButton(!showFavoriteButton)
  }

  const resetSearch = () => {
    setSearchResult('')
  }
  
  return (
      <div className="searchContainer">
        {console.log(showFavoriteButton)}
        <Navbar />
        <div className="Search searchShow">
          <ul>
            {searchResult &&
            searchResult.map((movie, index) => (
            <li>
              {movie.poster_path &&
              <div className="searchMovieCard">
                {movie.media_type === 'tv' ? 
                <NavLink to={`/tv-card/${movie.id}`} onChange={resetSearch}>
                  <img key={index} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie-img" />
                </NavLink>
                : 
                <NavLink to={`/movie-card/${movie.id}`} onChange={resetSearch}>
                  <img key={index} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie-img" />
                </NavLink>
                }
                {/* <i className={showFavoriteButton ? 'fas fa-star add-favorite-button button-show' : 'fas fa-star add-favorite-button button-hide'} onClick={switchFavorite}></i> */}
                <input type="checkbox" className="add-to-favorite" id={`add-to-favorite-${index}`} /><label for={`add-to-favorite-${index}`}><i className='fas fa-star add-favorite-button'></i></label>
               
               {/* <i onClick={setShowFavoriteButton(!showFavoriteButton)} className={showFavoriteButton ? 'fas fa-star add-favorite-button button-show' : 'fas fa-star add-favorite-button button-hide'}></i> */}
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
