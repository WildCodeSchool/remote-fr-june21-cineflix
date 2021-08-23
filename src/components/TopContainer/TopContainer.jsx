import { useState, useEffect, useRef } from "react";
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons";

import PosterCard from "../PosterCard/PosterCard";
import RandomMovies from '../../components/RandomMovies/RandomMovies'

import './TopContainer.css';

const TopContainer = () => {
    const [popularMovie, setPopularMovie] = useState([]);
    const [popularShow, setPopularShow] = useState([]);
    const [slideNumber, setSlideNumber] = useState(0);
    const [upCo, setUpCo] = useState([])
    
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


    useEffect(() => {
        const getUpCo = () => {
            fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&&language=fr&page=1`)
                .then(response => response.json())
                .then(data => setUpCo(data.results))
        }
        getUpCo()
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
    const listRefShows = useRef();
    const handleClick = (direction, type) => {
        let distance = type.current.getBoundingClientRect().x

        if (direction === 'left' && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            type.current.style.transform = `translateX(${200 + distance}px)`
        }
        if (direction === 'right' && slideNumber <= 13) {
            setSlideNumber(slideNumber + 1);
            type.current.style.transform = `translateX(${-255 + distance}px)`
        }
    }

    return (
        <div className="top-container">
            <h2>Top 20 Films</h2>
            <div className="top-cards">
                <ArrowBackIosOutlined className="sliderArrowLeft" onClick={() => handleClick('left', listRefMovies)} />
                <div className="popularLists" ref={listRefMovies}>
                    {mapPoster(popularMovie)}
                </div>
                <ArrowForwardIosOutlined className="sliderArrowRight" onClick={() => handleClick('right', listRefMovies)} />
            </div>
            <h2>Top 20 Séries</h2>
            <div className="top-cards">
                <ArrowBackIosOutlined className="sliderArrowLeft" onClick={() => handleClick('left', listRefShows)} />
                <div className="popularLists" ref={listRefShows} >
                    {mapPoster(popularShow)}
                </div>
                <ArrowForwardIosOutlined className="sliderArrowRight" onClick={() => handleClick('right', listRefShows)} />
            </div>
            <h2>Prochaines Sorties</h2>
            <div className="top-cards">
                <ArrowBackIosOutlined className="sliderArrowLeft" onClick={() => handleClick('left', listRefShows)} />
                <div className="popularLists" ref={listRefShows} >
                    {mapPoster(upCo)}
                </div>
                <ArrowForwardIosOutlined className="sliderArrowRight" onClick={() => handleClick('right', listRefShows)} />
            </div>
            <div>
                <RandomMovies />
            </div>
            
        </div>
    );
}

export default TopContainer;