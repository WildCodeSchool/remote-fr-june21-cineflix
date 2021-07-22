import React, { useState } from "react"
//import MovieShow from "./MovieShow"
import "./SearchResult.css"

const SearchResult = ({searchResult, setIDMovie}) => {
  
  console.log(searchResult)

  return (
      <div className="SearchResult">
        {/*movieChoice && <MovieShow movieID={movieChoice} />*/}
        <ul>
          {searchResult.map((movie, index) => (
          <li key={index}>
            <figure>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie-img" onClick={() => setIDMovie(movie.id)}/>
              {/*<h5>{movie.id}</h5>*/}
            </figure>
          </li>
          ))}
          </ul>
      </div>
  )
}

export default SearchResult