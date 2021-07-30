import React from "react"
import { NavLink } from "react-router-dom"

import "./SearchResult.css"

const SearchResult = ({searchResult}) => {

  return (
      <div className={`${searchResult ? "SearchResult searchShow" : "SearchResult"}`}>
        <ul>
          {searchResult.map((movie, index) => (
          <li key={index}>
            <figure>
              <NavLink to={`/movie-card/${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie-img" />
              </NavLink>
            </figure>
          </li>
          ))}
          </ul>
      </div>
  )
}

export default SearchResult