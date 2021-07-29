import React from "react"
import { useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

import "./SearchBar.css"

const SearchBar = ({searchValue, setSearchValue }) => {

    let history = useHistory();
    //let match = useRouteMatch(`search/:searchValue`);

    const handleClick = () => {
      console.log(`searchValue ON CLICK : ${searchValue}`);
      history.push(`search/${searchValue}`);
    }

    const handleKeyPress = (event) => {
      if(event.charCode === 13 ) {
        console.log(`searchValue ON ENTER : ${searchValue}`);
        history.push(`search/${searchValue}`);
      }
    }

    useEffect(() => {
      if(searchValue) {
        const timer = setTimeout(() => {
          console.log(`searchValue ON CLICK : ${searchValue}`);
          history.push(`search/${searchValue}`);
        }, 800)
        return () => clearTimeout(timer) }
    }, [searchValue])

  return (
    <>
    <span className="search-menu">
      <span className="search-elements">
        <input type="text" placeholder="Rechercher un film " value={searchValue}  onChange={(event) => setSearchValue(event.target.value)} onKeyPress={(event) => handleKeyPress(event)} />
        <button onClick={() => handleClick()}>🔎</button>
      </span>
    </span>
    </>
  )
}

export default SearchBar
