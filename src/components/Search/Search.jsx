import React from "react"
import { useEffect, useState } from 'react'
import { NavLink, useParams } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import SearchResult from "../SearchResult/SearchResult"
import "./Search.css"

const Search = () => {

  let { searchValue } = useParams();

  const [searchResult, setSearchResult] = useState()

  useEffect(() => {
    console.log(`searchValue : ${searchValue} ; searchResult : ${SearchResult}`);
    fetch(`https://api.themoviedb.org/3/search/multi?api_key=cda80ca49e23464f07b0b27ac89f1fdd&query=${searchValue}&inlude_adult=false`)
      .then((response) => response.json())
      .then((data) => {
        setSearchResult(data.results)
      })
  }, [])

  return (
      <div className="searchContainer">
        <Navbar />
        <div className="Search searchShow">
          <ul>
            {searchResult &&
            searchResult.map((movie, index) => (
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
      </div>
  )
}

export default Search