import { useState, useEffect, useRef } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from './../../components/Footer/Footer';

import Carousel from './../../components/Carousel/Carousel';

import '../MovieCategories/Categories.css';

const ShowCategories = () => {
    const [animationShows, setAnimationShows] = useState([]);
    const [actionShows, setActionShows] = useState([]);
    const [comedyShows, setComedyShows] = useState([]);
    const [documentaryShows, setDocumentaryShows] = useState([]);
    const [fantasyShows, setFantasyShows] = useState([]);
    const [thrillerShows, setThrillerShows] = useState([]);

    useEffect(() => {
        const fetchAnimationShows = () => {
            fetch('https://api.themoviedb.org/3/discover/tv?api_key=cda80ca49e23464f07b0b27ac89f1fdd&language=fr&with_genres=16')
                .then(res => res.json())
                .then(data => setAnimationShows(data.results))
        }
        fetchAnimationShows();
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        const fetchActionShows = () => {
            fetch('https://api.themoviedb.org/3/discover/tv?api_key=cda80ca49e23464f07b0b27ac89f1fdd&language=fr&with_genres=10759')
                .then(res => res.json())
                .then(data => setActionShows(data.results))
        }
        fetchActionShows()
    }, [])

    useEffect(() => {
        const fetchComedyShows = () => {
            fetch('https://api.themoviedb.org/3/discover/tv?api_key=cda80ca49e23464f07b0b27ac89f1fdd&language=fr&with_genres=35')
                .then(res => res.json())
                .then(data => setComedyShows(data.results))
        }
        fetchComedyShows()
    }, [])

    useEffect(() => {
        const fetchDocumentaryShows = () => {
            fetch('https://api.themoviedb.org/3/discover/tv?api_key=cda80ca49e23464f07b0b27ac89f1fdd&language=fr&with_genres=99')
                .then(res => res.json())
                .then(data => setDocumentaryShows(data.results))
        }
        fetchDocumentaryShows()
    }, [])

    useEffect(() => {
        const fetchFantasyShows = () => {
            fetch('https://api.themoviedb.org/3/discover/tv?api_key=cda80ca49e23464f07b0b27ac89f1fdd&language=fr&with_genres=10765')
                .then(res => res.json())
                .then(data => setFantasyShows(data.results))
        }
        fetchFantasyShows()
    }, [])

    useEffect(() => {
        const fetchThrillerShows = () => {
            fetch('https://api.themoviedb.org/3/discover/tv?api_key=cda80ca49e23464f07b0b27ac89f1fdd&language=fr&with_genres=80')
                .then(res => res.json())
                .then(data => setThrillerShows(data.results))
        }
        fetchThrillerShows()
    }, [])

    return (
        <div className="categorie-container">
            <Navbar />
            <div className="categorie-wrapper">
                <h3>Animation</h3>
                <Carousel items={animationShows} />
                <h3>Action/Aventure</h3>
                <Carousel items={actionShows} />
                <h3>Comedie</h3>
                <Carousel items={comedyShows} />
                <h3>Documentaire</h3>
                <Carousel items={documentaryShows} />
                <h3>Science-Fiction/Fantasy</h3>
                <Carousel items={fantasyShows} />
                <h3>Thriller/Policier</h3>
                <Carousel items={thrillerShows} />
            </div>
            <Footer />
        </div>
    );
}

export default ShowCategories;