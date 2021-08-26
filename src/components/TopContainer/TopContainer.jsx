import { useState, useEffect } from "react";

import Carousel from './../Carousel/Carousel';

import './TopContainer.css';

const TopContainer = () => {
    const [popularMovie, setPopularMovie] = useState([]);
    const [popularShow, setPopularShow] = useState([]);

    const apiKey = 'cda80ca49e23464f07b0b27ac89f1fdd';

    useEffect(() => {
        const fetchMovies = () => {
            fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}&language=fr`)
                .then((res) => res.json())
                .then((data) => setPopularMovie(data.results));
        }
        fetchMovies()
    }, [])

    useEffect(() => {
        const fetchShows = () => {
            fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKey}&language=fr`)
                .then((res) => res.json())
                .then((data) => setPopularShow(data.results));
        }
        fetchShows()
    }, [])

    return (
        <div className="top-container">
            <h2>Top 20 Films</h2>
            <Carousel items={popularMovie} />
            <h2>Top 20 Séries</h2>
            <Carousel items={popularShow} />
        </div>
    );
}

export default TopContainer;