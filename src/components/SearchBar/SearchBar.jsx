import React from "react"
import { useEffect } from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";

import "./SearchBar.css"

const SearchBar = ({searchValue, setSearchValue }) => {

    let history = useHistory();
    let location = useLocation();
    console.log(location)

    const handleClick = () => {
      console.log(`searchValue ON CLICK : ${searchValue}`);
      if(location.pathname.includes('search/')) {
        history.push(`${searchValue}`);
      } else {
        history.push(`search/${searchValue}`);
      }
      
    }

    const handleKeyPress = (event) => {
      if(event.charCode === 13 ) {
        console.log(`searchValue ON ENTER : ${searchValue}`);
        if(location.pathname.includes('search/')) {
          history.push(`${searchValue}`);
        } else {
          history.push(`search/${searchValue}`);
        }
      }
    }

    useEffect(() => {
      if(searchValue) {
        const timer = setTimeout(() => {
          console.log(`searchValue ON AWAIT : ${searchValue}`);
          if(location.pathname.includes('search/')) {
            history.push(`${searchValue}`);
          } else {
            history.push(`search/${searchValue}`);
          }
        }, 800)
        return () => clearTimeout(timer) }
    }, [searchValue])

  return (
    <>
    <span className="search-menu">
      <span className="search-elements">
        <input type="text" placeholder="Rechercher un film " value={searchValue}  onChange={(event) => setSearchValue(event.target.value)}/>
        <button onClick={() => handleClick()}>🔎</button>
      </span>
    </span>
    </>
  )
}

export default SearchBar
