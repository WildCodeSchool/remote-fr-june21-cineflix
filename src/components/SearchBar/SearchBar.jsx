import './SearchBar.css'
import React from 'react';

const SearchBar = (props) => {
    return (
        <div className='searchBar'>
            <input
                className='formControl'
                value={props.value}
                onChange={(event) => props.setSearchValue(event.target.value)}
                placeholder='rechercher...'
            ></input>
        </div>
    );
};

export default SearchBar;
