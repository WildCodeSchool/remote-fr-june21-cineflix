import { useState, useEffect } from "react";
import PosterCard from "../PosterCard/PosterCard";
import './TopContainer.css';

const TopContainer = () => {
    const [popularMovie, setPopularMovie] = useState([]);
    const [popularShow, setPopularShow] = useState([]);

    const apiKey = 'cda80ca49e23464f07b0b27ac89f1fdd';

    useEffect(() => {
        const fetchMovies = () => {
            fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`)
                .then((res) => res.json())
                .then((data) => setPopularMovie(data.results));
        }
        fetchMovies()
    }, [])

    useEffect(() => {
        const fetchShows = () => {
            fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKey}`)
                .then((res) => res.json())
                .then((data) => setPopularShow(data.results));
        }
        fetchShows()
    }, [])


    const mapPoster = (state) => {
        return (
            <>
                {state.map((poster, id) =>
                    <PosterCard key={poster.id} poster={poster} />)}
            </>
        );
    }

    return (
        <div className="top-container">
            <h3>Top 20 Films</h3>
            <div className="top-cards">
                {mapPoster(popularMovie)}
            </div>
            <h3>Top 20 Séries</h3>
            <div className="top-cards">
                {mapPoster(popularShow)}
            </div>
        </div>
    );
}

export default TopContainer;