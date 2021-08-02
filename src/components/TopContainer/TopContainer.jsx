import { useState, useEffect, useRef } from "react";
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons";
import PosterCard from "../PosterCard/PosterCard";
import './TopContainer.css';

const TopContainer = () => {
    const [popularMovie, setPopularMovie] = useState([]);
    const [popularShow, setPopularShow] = useState([]);
    const [slideNumber, setSlideNumber] = useState(0);

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

    const listRefMovies = useRef();
    const handleClickMovies = (direction) => {
        let distance = listRefMovies.current.getBoundingClientRect().x

        if (direction === 'left' && slideNumber > 0) {
            setSlideNumber(slideNumber-1);
            listRefMovies.current.style.transform = `translateX(${200 + distance}px)`
        }
        if (direction === 'right' && slideNumber <= 13) {
            setSlideNumber(slideNumber+1);
            listRefMovies.current.style.transform = `translateX(${-255 + distance}px)`
        }
    }

    const listRefShows = useRef();
    const handleClickShows = (direction) => {
        let distance = listRefShows.current.getBoundingClientRect().x

        if (direction === 'left' && slideNumber > 0) {
            setSlideNumber(slideNumber-1);
            listRefShows.current.style.transform = `translateX(${200 + distance}px)`
        }
        if (direction === 'right'&& slideNumber <= 13) {
            setSlideNumber(slideNumber+1);
            listRefShows.current.style.transform = `translateX(${-255 + distance}px)`
        }
    }

    return (
        <div className="top-container">
            <h2>Top 20 Films</h2>
            <div className="top-cards">
                <ArrowBackIosOutlined className="sliderArrowLeft" onClick={() => handleClickMovies('left')} />
                <div className="popularLists" ref={listRefMovies}>
                    {mapPoster(popularMovie)}
                </div>
                <ArrowForwardIosOutlined className="sliderArrowRight" onClick={() => handleClickMovies('right')} />
            </div>
            <h2>Top 20 Séries</h2>
            <div className="top-cards">
                <ArrowBackIosOutlined className="sliderArrowLeft" onClick={() => handleClickShows('left')} />
                <div className="popularLists" ref={listRefShows} >
                    {mapPoster(popularShow)}
                </div>
                <ArrowForwardIosOutlined className="sliderArrowRight" onClick={() => handleClickShows('right')} />
            </div>
        </div>
    );
}

export default TopContainer;