import React from "react"
import { useHistory } from "react-router-dom";

import Search from "../Search/Search"

import "./SearchBar.css"

const SearchBar = ({searchValue, setSearchValue }) => {

    let history = useHistory();

    function handleClick() {
      console.log(`searchValue : ${searchValue}`);
      history.push(`search/${searchValue}`);
    }

  return (
    <>
    <span className="search-menu">
      <span className="search-elements">
        <input type="text" placeholder="Rechercher un film " value={searchValue} onChange={(event) => setSearchValue(event.target.value)} />
        <button onClick={() => handleClick()}>🔎</button>
      </span>
    </span>
    </>
  )
}

export default SearchBar
