import React, { useState } from "react"
//import MovieShow from "./MovieShow"
import "./SearchResult.css"

const SearchResult = ({searchResult}) => {
  
  const [movieChoice, setMovieChoice] = useState('')
  console.log(searchResult)

  return (
      <div className="MovieList">
        {/*movieChoice && <MovieShow movieID={movieChoice} />*/}
        <ul>
          {searchResult.map((movie, index) => (
          <li key={index}>
            <figure>
              <h3>{movie.title}</h3>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie-img" onClick={() => setMovieChoice(movie.id)}/>
              <h5>{movie.id}</h5>
            </figure>
          </li>
          ))}
          </ul>
      </div>
  )
}

export default SearchResult