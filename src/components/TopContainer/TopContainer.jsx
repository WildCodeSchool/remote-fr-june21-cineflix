import { useState, useEffect, useRef } from "react";
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons";
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
                {state.map((poster) =>
                    <PosterCard key={poster.id} {...poster} />)}
            </>
        );
    }

    // const topListRef = useRef();
    // const handleArrowClick = (direction) => {
    //     if (direction === 'left') {
            
            
    //     if (direction === 'right') {
            
    // }


    return (
        <div className="top-container">
            <h2>Top 20 Films</h2>
            <div className="top-cards">
                {/* <ArrowBackIosOutlined className="sliderArrowLeft" onClick={() => handleArrowClick("left")} /> */}
                {mapPoster(popularMovie)}
                {/* <ArrowForwardIosOutlined className="sliderArrowRight" onClick={() => handleArrowClick("right")} /> */}
            </div>
            <h2>Top 20 Séries</h2>
            <div className="top-cards">
                {/* <ArrowBackIosOutlined className="sliderArrowLeft" onClick={() => handleArrowClick("left")} /> */}
                {mapPoster(popularShow)}
                {/* <ArrowForwardIosOutlined className="sliderArrowRight" onClick={() => handleArrowClick("right")} /> */}
            </div>
        </div>
    );
}