import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const RandomMovies = () => {
    const [RandMovies, setRandMovies] = useState([])
    const api_key = 'cda80ca49e23464f07b0b27ac89f1fdd'
    // const [loader, setLoader] = useState(true)

    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    
    useEffect(() => {
        for(let i = 0; i < 10; i++) {
        const getRandMovie = () => {
            fetch(`https://api.themoviedb.org/3/movie/${getRandom(1, 500000)}?api_key=${api_key}&language=fr`)
                .then(response => response.json())
                .then(data => data.status_code != 34 && data.adult === false && data.popularity > 10 && data.vote_average > 5 ? setRandMovies(RandMovies => [...RandMovies, data]) : getRandMovie())
            }
            getRandMovie()
            // setLoader(false)
            console.log(RandMovies)
        }
    }, [])
    
    
    return (
        <div>
            {console.log(RandMovies)}
            <h3> teeeeeeest {RandMovies[9] ? RandMovies.map((movie, index) => (
                    <figure key={index}>
                        <NavLink to={`/movie-card/${movie.id}`} >
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`Affiche ${movie.title}`} />
                            <p>{movie.title}</p>
                        </NavLink>
                    </figure>)) : null }</h3>
        </div>
    );
}

export default RandomMovies;