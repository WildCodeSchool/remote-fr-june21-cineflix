import { useState, useEffect, useRef } from "react";
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons";

import Navbar from "../../components/Navbar/Navbar";
import PosterCard from "../../components/PosterCard/PosterCard";
import Footer from './../../components/Footer/Footer';

import './Categories.css';

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
            fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=16&api_key=${apiKey}&language=fr`)
                .then(res => res.json())
                .then(data => setAnimationMovies(data.results));
        }
        fetchAnimationMovies();
        window.scrollTo(0,0);
    }, []);

    useEffect(() => {
        const fetchActionMovies = () => {
            fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=28,12&api_key=${apiKey}&language=fr`)
                .then(res => res.json())
                .then(data => setActionMovies(data.results));
        }
        fetchActionMovies()
    }, []);

    useEffect(() => {
        const fetchComedyMovies = () => {
            fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=35&api_key=${apiKey}&language=fr`)
                .then(res => res.json())
                .then(data => setComedyMovies(data.results));
        }
        fetchComedyMovies()
    }, []);

    useEffect(() => {
        const fetchDocumentaries = () => {
            fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=99&api_key=${apiKey}&language=fr&primary_release_year=2021`)
                .then(res => res.json())
                .then(data => setDocumentaries(data.results));
        }
        fetchDocumentaries()
    }, []);

    useEffect(() => {
        const fetchHorrorMovies = () => {
            fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=27&api_key=${apiKey}&language=fr`)
                .then(res => res.json())
                .then(data => setHorrorMovies(data.results));
        }
        fetchHorrorMovies()
    }, []);

    useEffect(() => {
        const fetchThrillerMovies = () => {
            fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=53,80&api_key=${apiKey}&language=fr`)
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
                <h3>Animation</h3>
                <div className="categorie-cards">
                    <ArrowBackIosOutlined className="sliderArrowLeft" onClick={() => handleClick('left', refAnimation)} />
                    <div className="popularLists" ref={refAnimation}>
                        {mapPoster(animationMovies)}
                    </div>
                    <ArrowForwardIosOutlined className="sliderArrowRight" onClick={() => handleClick('right', refAnimation)} />
                </div>
                <h3>Action / Aventure</h3>
                <div className="categorie-cards">
                    <ArrowBackIosOutlined className="sliderArrowLeft" onClick={() => handleClick('left', refAction)} />
                    <div className="popularLists" ref={refAction}>
                        {mapPoster(actionMovies)}
                    </div>
                    <ArrowForwardIosOutlined className="sliderArrowRight" onClick={() => handleClick('right', refAction)} />
                </div>
                <h3>Comedie</h3>
                <div className="categorie-cards">
                    <ArrowBackIosOutlined className="sliderArrowLeft" onClick={() => handleClick('left', refComedy)} />
                    <div className="popularLists" ref={refComedy}>
                        {mapPoster(comedyMovies)}
                    </div>
                    <ArrowForwardIosOutlined className="sliderArrowRight" onClick={() => handleClick('right', refComedy)} />
                </div>
                <h3>Documentaire</h3>
                <div className="categorie-cards">
                    <ArrowBackIosOutlined className="sliderArrowLeft" onClick={() => handleClick('left', refDocumentary)} />
                    <div className="popularLists" ref={refDocumentary}>
                        {mapPoster(documentaries)}
                    </div>
                    <ArrowForwardIosOutlined className="sliderArrowRight" onClick={() => handleClick('right', refDocumentary)} />
                </div>
                <h3>Horreur</h3>
                <div className="categorie-cards">
                    <ArrowBackIosOutlined className="sliderArrowLeft" onClick={() => handleClick('left', refHorror)} />
                    <div className="popularLists" ref={refHorror}>
                        {mapPoster(horrorMovies)}
                    </div>
                    <ArrowForwardIosOutlined className="sliderArrowRight" onClick={() => handleClick('right', refHorror)} />
                </div>
                <h3>Thriller / Policier</h3>
                <div className="categorie-cards">
                    <ArrowBackIosOutlined className="sliderArrowLeft" onClick={() => handleClick('left', refThriller)} />
                    <div className="popularLists" ref={refThriller}>
                        {mapPoster(thrillerMovies)}
                    </div>
                    <ArrowForwardIosOutlined className="sliderArrowRight" onClick={() => handleClick('right', refThriller)} />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default MovieCategories;