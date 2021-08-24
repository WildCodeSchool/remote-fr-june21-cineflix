import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const RandomMovies = () => {
    // const [RandMovies, setRandMovies] = useState([])
    // const api_key = 'cda80ca49e23464f07b0b27ac89f1fdd'

    // function getRandom(min, max) {
    //     return Math.floor(Math.random() * (max - min) + min);
    // }
    
    // useEffect(() => {
    //     for(let i = 0; i < 10; i++) {
    //     const getRandMovie = () => {
    //         fetch(`https://api.themoviedb.org/3/movie/${getRandom(1, 500000)}?api_key=${api_key}&language=fr`)
    //             .then(response => response.json())
    //             .then(data => data.status_code != 34 && data.adult === false && data.popularity > 10 && data.vote_average > 5 ? setRandMovies(RandMovies => [...RandMovies, data]) : getRandMovie())
    //         }
    //         getRandMovie()
    //         console.log(RandMovies)
    //     }
    // }, [])

}

export default RandomMovies;