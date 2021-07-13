import React, { useState, useEffect } from 'react';
import Navbar from "../Navbar/Navbar";
import Featured from "../Featured/Featured";
import List from "../List/List";
import "./Home.css";

const Home = () => {


    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const getMovieRequest = async (searchValue) => {
        const url = `http://www.omdbapi.com/?i=${searchValue}&apikey=4680dd09`;

        const response = await fetch(url);
        const responseJson = await response.json();

        if (responseJson.Search) {
            setMovies(responseJson.Search);
        }
    };

    useEffect(() => {
        getMovieRequest(searchValue);
    }, [searchValue]);

    fetch(`http://www.omdbapi.com/?apikey=4680dd09&`).then((res) => {
        console.log(res.json());
    })

    return (
        <div className="home">
            <Navbar />
            <Featured />
            <List />
            <List />
            <List />
            <List />
        </div>
    );
};

export default Home;
