import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const RandomMovies = () => {
    const [RandMovies, setRandMovies] = useState([])
    function getRandom() {
        return Math.floor(Math.random() * 700000);
    }

    console.log(getRandom())
    const api_key = 'cda80ca49e23464f07b0b27ac89f1fdd'

    useEffect(() => {
        for(let i = 0; i < 20; i++) {
        const getRandMovie = () => {
            fetch(`https://api.themoviedb.org/3/movie/${getRandom()}?api_key=${api_key}&language=fr`)
                .then(response => response.json())
                .then(data => data.status_code != 34 ? setRandMovies(RandMovies.push(data)) : getRandMovie())
                console.log(RandMovies)
            }
            getRandMovie()
        }
    }, [])
    
    
    return (
        <div>
            {RandMovies.title ? console.log(RandMovies) : null }
        </div>
    );
}

export default RandomMovies;