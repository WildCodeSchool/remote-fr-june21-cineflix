import { useState, useEffect } from "react";

import Carousel from './../Carousel/Carousel';

import './TopContainer.css';

const TopContainer = () => {
    const [popularMovie, setPopularMovie] = useState([]);
    const [popularShow, setPopularShow] = useState([]);
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


    const handeChange = (e) => {
        setSelectCat(e.target.value)
    }


    return (
            <>
            <div className="top-container">
                <h2>Top 20 Films</h2>
                <Carousel items={popularMovie} />
                <h2>Top 20 Séries</h2>
                <Carousel items={popularShow} />
                <h2>Récents</h2>
                <Carousel items={upCo} />
      
            
                <h2 className="title-random">Vous ne savez pas quoi regarder ? Essayer notre filtre par catégorie :</h2>
                <select defaultValue="Catégorie" className="selectB" name="Catégorie" onChange={(e) => handeChange(e)}>
                    <option disabled selected> Catégorie</option>
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
            
            
                <Carousel items={RandMovies} />
            </div>
        </>
    );
}

export default TopContainer;