import { useState, useEffect, useRef } from "react";
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons";

import PosterCard from "../PosterCard/PosterCard";

import './TopContainer.css';

const TopContainer = () => {
    const [popularMovie, setPopularMovie] = useState([]);
    const [popularShow, setPopularShow] = useState([]);
    const [slideNumber, setSlideNumber] = useState(0);
    const [upCo, setUpCo] = useState([])
    const [RandMovies, setRandMovies] = useState([])
    const [selectCat, setSelectCat] = useState("")

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

    useEffect(() => {
        const getMovieCat = () => {
            fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${selectCat}&api_key=${apiKey}&language=fr`)
                .then(res => res.json())
                .then(data => setRandMovies(data.results));
        }
        getMovieCat()
        console.log(RandMovies)
    }, [selectCat]);


    const mapPoster = (state) => {
        return (
            <>
                {state.map((poster) =>
                    <PosterCard key={poster.id} {...poster} />)}
            </>
        );
    }

    const handeChange = (e) => {
        setSelectCat(e.target.value)
    }

    const listRefMovies = useRef();
    const listRefShows = useRef();
    const listRefUpCo = useRef();
    const listRefRand = useRef();
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
            <h2>Récents</h2>
            <div className="top-cards">
                <ArrowBackIosOutlined className="sliderArrowLeft" onClick={() => handleClick('left', listRefUpCo)} />
                <div className="popularLists" ref={listRefUpCo} >
                    {mapPoster(upCo)}
                </div>
                <ArrowForwardIosOutlined className="sliderArrowRight" onClick={() => handleClick('right', listRefUpCo)} />
            </div>
            <div>
                <h2>Hoooooo</h2>
                <select defaultValue="Choisir Catégorie" className="selectB" name="Catégorie" onChange={(e) => handeChange(e)}>
                    <option disabled selected>Choisir Catégorie</option>
                    <option select value='28'>Action</option>
                    <option select value='12'>Aventure</option>
                    <option select value='16'>Animation</option>
                    <option select value='35'>Comédie</option>
                    <option select value='80'>Crime</option>
                    <option select value='99'>Documentaire</option>
                    <option select value='18'>Drame</option>
                    <option select value='10751'>Familial</option>
                    <option select value='14'>Fantastique</option>
                    <option select value='36'>Historique</option>
                    <option select value='27'>Horreur</option>
                    <option select value='10402'>Musique</option>
                    <option select value='9648'>Mystère</option>
                    <option select value='10749'>Romance</option>
                    <option select value='878'>Science-Fiction</option>
                    <option select value='10770'>Téléfilm</option>
                    <option select value='53'>Thriller</option>
                    <option select value='10752'>Guerre</option>
                    <option select value='37'>Western</option>
                </select>
            </div>
            <div className="top-cards">
                <ArrowBackIosOutlined className="sliderArrowLeft" onClick={() => handleClick('left', listRefRand)} />
                <div className="popularLists" ref={listRefRand} >
                    {mapPoster(RandMovies)}
                </div>
                <ArrowForwardIosOutlined className="sliderArrowRight" onClick={() => handleClick('right', listRefRand)} /> 
            </div>
        </div>
    );
}

export default TopContainer;