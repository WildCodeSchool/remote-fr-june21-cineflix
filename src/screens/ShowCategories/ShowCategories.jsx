import { useState, useEffect, useRef } from "react";
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons";
import PosterCard from "../../components/PosterCard/PosterCard";
import Navbar from "../../components/Navbar/Navbar";
import Footer from './../../components/Footer/Footer';

import '../MovieCategories/Categories.css'

const ShowCategories = () => {
    const [animationShows, setAnimationShows] = useState([]);
    const [actionShows, setActionShows] = useState([]);
    const [comedyShows, setComedyShows] = useState([]);
    const [documentaryShows, setDocumentaryShows] = useState([]);
    const [fantasyShows, setFantasyShows] = useState([]);
    const [thrillerShows, setThrillerShows] = useState([]);
    const [slideNumber, setSlideNumber] = useState(0);

    useEffect(() => {
        const fetchAnimationShows = () => {
            fetch('https://api.themoviedb.org/3/discover/tv?api_key=cda80ca49e23464f07b0b27ac89f1fdd&language=fr&with_genres=16')
                .then(res => res.json())
                .then(data => setAnimationShows(data.results))
        }
        fetchAnimationShows()
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
    const refFantasy = useRef();
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
                        {mapPoster(animationShows)}
                    </div>
                    <ArrowForwardIosOutlined className="sliderArrowRight" onClick={() => handleClick('right', refAnimation)} />
                </div>
                <h3>Action/Aventure</h3>
                <div className="categorie-cards">
                    <ArrowBackIosOutlined className="sliderArrowLeft" onClick={() => handleClick('left', refAction)} />
                    <div className="popularLists" ref={refAction}>
                        {mapPoster(actionShows)}
                    </div>
                    <ArrowForwardIosOutlined className="sliderArrowRight" onClick={() => handleClick('right', refAction)} />
                </div>
                <h3>Comedie</h3>
                <div className="categorie-cards">
                    <ArrowBackIosOutlined className="sliderArrowLeft" onClick={() => handleClick('left', refComedy)} />
                    <div className="popularLists" ref={refComedy}>
                        {mapPoster(comedyShows)}
                    </div>
                    <ArrowForwardIosOutlined className="sliderArrowRight" onClick={() => handleClick('right', refComedy)} />
                </div>
                <h3>Documentaire</h3>
                <div className="categorie-cards">
                    <ArrowBackIosOutlined className="sliderArrowLeft" onClick={() => handleClick('left', refDocumentary)} />
                    <div className="popularLists" ref={refDocumentary}>
                        {mapPoster(documentaryShows)}
                    </div>
                    <ArrowForwardIosOutlined className="sliderArrowRight" onClick={() => handleClick('right', refDocumentary)} />
                </div>
                <h3>Science-Fiction/Fantasy</h3>
                <div className="categorie-cards">
                    <ArrowBackIosOutlined className="sliderArrowLeft" onClick={() => handleClick('left', refFantasy)} />
                    <div className="popularLists" ref={refFantasy}>
                        {mapPoster(fantasyShows)}
                    </div>
                    <ArrowForwardIosOutlined className="sliderArrowRight" onClick={() => handleClick('right', refFantasy)} />
                </div>
                <h3>Thriller/Policier</h3>
                <div className="categorie-cards">
                    <ArrowBackIosOutlined className="sliderArrowLeft" onClick={() => handleClick('left', refThriller)} />
                    <div className="popularLists" ref={refThriller}>
                        {mapPoster(thrillerShows)}
                    </div>
                    <ArrowForwardIosOutlined className="sliderArrowRight" onClick={() => handleClick('right', refThriller)} />
                </div>
            </div>
            <Footer />
        </div>


    );
}

export default ShowCategories;