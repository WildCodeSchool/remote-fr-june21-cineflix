import React from "react"
import "./SearchBar.css"

const SearchBar = ({searchValue, setSearchValue, setSearchResult}) => {

  // Function to call the API with the name of the movie seized bu the user and change the state value in Navbar
  const handleChange = (userValue) => {
    console.log(userValue)
    fetch(`https://api.themoviedb.org/3/search/multi?api_key=cda80ca49e23464f07b0b27ac89f1fdd&query=${userValue}&inlude_adult=false`)
      .then((response) => response.json())
      .then((data) => {
        setSearchResult(data.results)
      })
  }


  return (
    <>
    <span className="search-menu">
      <span className="search-elements">
        <input type="text" placeholder="Rechercher un film " value={searchValue} onChange={(event) => setSearchValue(event.target.value)} />
        <button onClick={() => handleChange(searchValue)}>🔎</button>
      </span>
    </span>
    </>
  )
}

export default SearchBar