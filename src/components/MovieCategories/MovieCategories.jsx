import { useState, useEffect, useRef } from "react";
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons";
import PosterCard from "../PosterCard/PosterCard";
import '../TopContainer/TopContainer.css';


const MovieCategories = () => {
const apiKey = 'cda80ca49e23464f07b0b27ac89f1fdd';
const [animationMovie, setAnimationMovie] = useState([]);
const [documentary, setDocumentary] = useState([]);


    useEffect (() => {
        const fetchAnimationMovie = () => {
            fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=16&api_key=${apiKey}&language=en-US`)
            .then(res => res.json())
            .then(data => setAnimationMovie(data.results));
        }
        fetchAnimationMovie()
    }, []);
    
    useEffect (() => {
        const fetchDocumentary = () => {
            fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=99&api_key=${apiKey}&language=en-US`)
            .then(res => res.json())
            .then(data => setDocumentary(data.results));
        }
        fetchDocumentary()
    }, []);

    const mapPoster = (state) => {
        return (
            <>
                {state.map((poster) =>
                    <PosterCard key={poster.id} {...poster} />)}
            </>
        );
    }

    return ( 
        <div className="top-container">
            <h2>Animation</h2>
            <div className="top-cards">
                {/* <ArrowBackIosOutlined className="sliderArrowLeft" onClick={() => handleClickMovies('left')} /> */}
                {/* <div className="popularLists" ref={listRefMovies}> */}
                    {mapPoster(animationMovie)}
                </div>
                {/* <ArrowForwardIosOutlined className="sliderArrowRight" onClick={() => handleClickMovies('right')} /> */}
                <h2>Documentary</h2>
            <div className="top-cards">
                {/* <ArrowBackIosOutlined className="sliderArrowLeft" onClick={() => handleClickMovies('left')} /> */}
                {/* <div className="popularLists" ref={listRefMovies}> */}
                    {mapPoster(documentary)}
                </div>
            </div>
    );
}

export default MovieCategories;