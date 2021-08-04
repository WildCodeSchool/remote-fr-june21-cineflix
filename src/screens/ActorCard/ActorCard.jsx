import { useState, useEffect } from 'react'
import { NavLink, useParams } from "react-router-dom"

import Navbar from '../../components/Navbar/Navbar';

import './ActorCard.css'

function ActorCard() {
    let { IdActor } = useParams()
    const [Actor, setActor] = useState([])
    const [ActorMovies, setActorMovies] = useState([])

    const api_key = 'cda80ca49e23464f07b0b27ac89f1fdd'

    useEffect(() => {
        const getActor = () => {
            fetch(`https://api.themoviedb.org/3/person/${IdActor}?api_key=${api_key}&language=fr`)
                .then(response => response.json())
                .then(data => setActor(data))
        }
        getActor()
    }, [IdActor])

    useEffect(() => {
        const getMovie = () => {
            fetch(`https://api.themoviedb.org/3//person/${IdActor}/movie_credits?api_key=${api_key}&language=fr`)
                .then(response => response.json())
                .then(data => setActorMovies(data))
        }
        getMovie()
    }, [IdActor])


    return (
        <div className="ActorCard">
            <Navbar />
            <h2>{Actor.name}</h2>
            <div className="ActorContainerFlex">
                <img src={`https://image.tmdb.org/t/p/w500${Actor.profile_path}`} alt={Actor.name} />
                <div className="ActorContainerDetail">
                    <h3>Métier : {Actor.gender === 1 ? "Actrice" : "Acteur"}</h3>
                    <h3>Naissance : {Actor.birthday} à {Actor.place_of_birth}</h3>
                    <h3>Biographie : </h3>
                    <p>{Actor.biography}</p>
                </div>
            </div>

            <h2>Filmographie :</h2>
            <div className="FilmoContainer">
                {ActorMovies.cast ? ActorMovies.cast.map((movie, index) => (
                    index < 10 &&
                    <figure key={index}>
                        <NavLink to={`/movie-card/${movie.id}`} >
                            <img className="FilmoImg" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`Affiche ${movie.title}`} />
                            <p>{movie.title}</p>
                        </NavLink>
                    </figure>
                )) : null}

            </div>
        </div>
    )

}

export default ActorCard;