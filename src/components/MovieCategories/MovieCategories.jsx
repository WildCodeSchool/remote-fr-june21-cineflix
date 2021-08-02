import { useState, useEffect, useRef } from "react";
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons";
import PosterCard from "../PosterCard/PosterCard";
import './MovieCategories.css';
import Navbar from "../Navbar/Navbar";


const MovieCategories = () => {
    const apiKey = 'cda80ca49e23464f07b0b27ac89f1fdd';
    const [animationMovies, setAnimationMovies] = useState([]);
    const [actionMovies, setActionMovies] = useState([]);
    const [comedyMovies, setComedyMovies] = useState([]);
    const [documentaries, setDocumentaries] = useState([]);
    const [horrorMovies, setHorrorMovies] = useState([]);
    const [thrillerMovies, setThrillerMovies] = useState([]);
    const [slideNumber, setSlideNumber] = useState(0);


    useEffect(() => {
        const fetchAnimationMovies = () => {
            fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=16&api_key=${apiKey}&language=en-US`)
                .then(res => res.json())
                .then(data => setAnimationMovies(data.results));
        }
        fetchAnimationMovies()
    }, []);

    useEffect(() => {
        const fetchActionMovies = () => {
            fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=28,12&api_key=${apiKey}&language=en-US`)
                .then(res => res.json())
                .then(data => setActionMovies(data.results));
        }
        fetchActionMovies()
    }, []);

    useEffect(() => {
        const fetchComedyMovies = () => {
            fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=35&api_key=${apiKey}&language=en-US`)
                .then(res => res.json())
                .then(data => setComedyMovies(data.results));
        }
        fetchComedyMovies()
    }, []);

    useEffect(() => {
        const fetchDocumentaries = () => {
            fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=99&api_key=${apiKey}&language=en-US&primary_release_year=2021`)
                .then(res => res.json())
                .then(data => setDocumentaries(data.results));
        }
        fetchDocumentaries()
    }, []);

    useEffect(() => {
        const fetchHorrorMovies = () => {
            fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=27&api_key=${apiKey}&language=en-US`)
                .then(res => res.json())
                .then(data => setHorrorMovies(data.results));
        }
        fetchHorrorMovies()
    }, []);

    useEffect(() => {
        const fetchThrillerMovies = () => {
            fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=53,80&api_key=${apiKey}&language=en-US`)
                .then(res => res.json())
                .then(data => setThrillerMovies(data.results));
        }
        fetchThrillerMovies()
    }, []);

    const mapPoster = (state) => {
        return (
            <>
                {state.map((poster) =>
                    <PosterCard key={poster.id} {...poster} />)}
            </>
        );
    }

    const refAnimation = useRef();
    const refAction = useRef();
    const refComedy = useRef();
    const refDocumentary = useRef();
    const refHorror = useRef();
    const refThriller = useRef();

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
        <div className="categorie-container">
            <Navbar />
            <div className="categorie-wrapper">
                <h2>Animation</h2>
                <div className="categorie-cards">
                    <ArrowBackIosOutlined className="sliderArrowLeft" onClick={() => handleClick('left', refAnimation)} />
                    <div className="popularLists" ref={refAnimation}>
                        {mapPoster(animationMovies)}
                    </div>
                    <ArrowForwardIosOutlined className="sliderArrowRight" onClick={() => handleClick('right', refAnimation)} />
                </div>
                <h2>Action/Aventure</h2>
                <div className="categorie-cards">
                    <ArrowBackIosOutlined className="sliderArrowLeft" onClick={() => handleClick('left', refAction)} />
                    <div className="popularLists" ref={refAction}>
                        {mapPoster(actionMovies)}
                    </div>
                    <ArrowForwardIosOutlined className="sliderArrowRight" onClick={() => handleClick('right', refAction)} />
                </div>
                <h2>Comedie</h2>
                <div className="categorie-cards">
                    <ArrowBackIosOutlined className="sliderArrowLeft" onClick={() => handleClick('left', refComedy)} />
                    <div className="popularLists" ref={refComedy}>
                        {mapPoster(comedyMovies)}
                    </div>
                    <ArrowForwardIosOutlined className="sliderArrowRight" onClick={() => handleClick('right', refComedy)} />
                </div>
                <h2>Documentaire</h2>
                <div className="categorie-cards">
                    <ArrowBackIosOutlined className="sliderArrowLeft" onClick={() => handleClick('left', refDocumentary)} />
                    <div className="popularLists" ref={refDocumentary}>
                        {mapPoster(documentaries)}
                    </div>
                    <ArrowForwardIosOutlined className="sliderArrowRight" onClick={() => handleClick('right', refDocumentary)} />
                </div>
                <h2>Horreur</h2>
                <div className="categorie-cards">
                    <ArrowBackIosOutlined className="sliderArrowLeft" onClick={() => handleClick('left', refHorror)} />
                    <div className="popularLists" ref={refHorror}>
                        {mapPoster(horrorMovies)}
                    </div>
                    <ArrowForwardIosOutlined className="sliderArrowRight" onClick={() => handleClick('right', refHorror)} />
                </div>
                <h2>Thriller/Crime</h2>
                <div className="categorie-cards">
                    <ArrowBackIosOutlined className="sliderArrowLeft" onClick={() => handleClick('left', refThriller)} />
                    <div className="popularLists" ref={refThriller}>
                        {mapPoster(thrillerMovies)}
                    </div>
                    <ArrowForwardIosOutlined className="sliderArrowRight" onClick={() => handleClick('right', refThriller)} />
                </div>
            </div>
        </div>
    );
}

export default MovieCategories;