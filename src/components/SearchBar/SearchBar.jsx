import React from "react"
import { useEffect } from "react";
import { Redirect, useHistory, useLocation, NavLink } from "react-router-dom";

import "./SearchBar.css"

const SearchBar = ({searchValue, setSearchValue }) => {

    let history = useHistory();
    let location = useLocation();

  
/*
    const handleClick = () => {
      if(searchValue !== "") {
        if(location.pathname.includes('search/')) {
          history.push(`${searchValue}`);
        } else {
          history.push(`search/${searchValue}`);
        }
        <Redirect to={`/search/${searchValue}`} />;
      }
    }
*/
    const handleKeyPress = (event) => {
      if(searchValue !== "") {
        if(event.charCode === 13 ) {
          if(location.pathname.includes('search/')) {
            history.push(`${searchValue}`);
          } else {
            history.push(`search/${searchValue}`);
          }
        }
      }
    }

    useEffect(() => {
      if(searchValue) {
        const timer = setTimeout(() => {
          history.replace(`/search/${searchValue}`)
        }, 1200)
        return () => clearTimeout(timer) }
    }, [searchValue])

  return (
    <>
    <span className="search-menu">
      <span className="search-elements">
        <input type="text" placeholder="Rechercher un film " value={searchValue}  onChange={(event) => setSearchValue(event.target.value)}/>
        <NavLink to={`/search/${searchValue}`}><button className="search-button">🔎</button></NavLink>
      </span>
    </span>
    </>
  )
}

export default SearchBar
