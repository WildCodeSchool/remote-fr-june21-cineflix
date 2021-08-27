import { useState, useEffect, useRef } from "react";
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons";

import Navbar from "../../components/Navbar/Navbar";
import Footer from './../../components/Footer/Footer';

import Carousel from './../../components/Carousel/Carousel';

import './Categories.css';

const MovieCategories = () => {
    const [animationMovies, setAnimationMovies] = useState([]);
    const [actionMovies, setActionMovies] = useState([]);
    const [comedyMovies, setComedyMovies] = useState([]);
    const [documentaries, setDocumentaries] = useState([]);
    const [horrorMovies, setHorrorMovies] = useState([]);
    const [thrillerMovies, setThrillerMovies] = useState([]);
    const [slideNumber, setSlideNumber] = useState(0);


    useEffect(() => {
        const fetchAnimationMovies = () => {
            fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=16&api_key=${process.env.REACT_APP_API_KEY}&language=fr`)
                .then(res => res.json())
                .then(data => setAnimationMovies(data.results));
        }
        fetchAnimationMovies();
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const fetchActionMovies = () => {
            fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=28,12&api_key=${process.env.REACT_APP_API_KEY}&language=fr`)
                .then(res => res.json())
                .then(data => setActionMovies(data.results));
        }
        fetchActionMovies()
    }, []);

    useEffect(() => {
        const fetchComedyMovies = () => {
            fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=35&api_key=${process.env.REACT_APP_API_KEY}&language=fr`)
                .then(res => res.json())
                .then(data => setComedyMovies(data.results));
        }
        fetchComedyMovies()
    }, []);

    useEffect(() => {
        const fetchDocumentaries = () => {
            fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=99&api_key=${process.env.REACT_APP_API_KEY}&language=fr&primary_release_year=2021`)
                .then(res => res.json())
                .then(data => setDocumentaries(data.results));
        }
        fetchDocumentaries()
    }, []);

    useEffect(() => {
        const fetchHorrorMovies = () => {
            fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=27&api_key=${process.env.REACT_APP_API_KEY}&language=fr`)
                .then(res => res.json())
                .then(data => setHorrorMovies(data.results));
        }
        fetchHorrorMovies()
    }, []);

    useEffect(() => {
        const fetchThrillerMovies = () => {
            fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=53,80&api_key=${process.env.REACT_APP_API_KEY}&language=fr`)
                .then(res => res.json())
                .then(data => setThrillerMovies(data.results));
        }
        fetchThrillerMovies()
    }, []);

    return (
        <div className="categorie-container">
            <Navbar />
            <div className="categorie-wrapper">
                <h3>Animation</h3>
                <Carousel items={animationMovies} />
                <h3>Action / Aventure</h3>
                <Carousel items={actionMovies} />
                <h3>Comedie</h3>
                <Carousel items={comedyMovies} />
                <h3>Documentaire</h3>
                <Carousel items={documentaries} />
                <h3>Horreur</h3>
                <Carousel items={horrorMovies} />
                <h3>Thriller / Policier</h3>
                <Carousel items={thrillerMovies} />
            </div>
            <Footer />
        </div>
    );
}

export default MovieCategories;