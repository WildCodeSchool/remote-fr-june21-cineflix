import { useState, useEffect } from "react"

import { NavLink } from "react-router-dom"

import './Similar.css'


const Similar = ({ id }) => {
    const [SimMovies, setSimMovies] = useState([])

    useEffect(() => {
        const getSimMovies = () => {
            fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=frpage=1`)
                .then(response => response.json())
                .then(data => setSimMovies(data))
        }
        getSimMovies()
    }, [id])

    return (
        <>
            <h2 className="SimH2">Similaires : </h2>
            <div className="SimContainer">
                {SimMovies.results ? SimMovies.results.map((movie, index) => (
                    index < 10 &&
                    <figure key={index}>
                        <NavLink to={`/movie-card/${movie.id}`} >
                            <img className="SimImg" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`Affiche ${movie.title}`} />
                            <p>{movie.title}</p>
                        </NavLink>
                    </figure>)) : null}
            </div>
        </>
    )
}

export default Similar;