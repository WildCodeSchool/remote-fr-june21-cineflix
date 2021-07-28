import  { useState, useEffect } from 'react'

import Navbar from '../Navbar/Navbar';

import './ActorCard.css'

function ActorCard() {
    const [Actor, setActor] = useState([])
    const [ActorMovies, setActorMovies] = useState([])

    const api_key = 'cda80ca49e23464f07b0b27ac89f1fdd'

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/person/287?api_key=${api_key}&language=fr`)
        .then(response => response.json())
        .then(data => setActor(data))
    }, [])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3//person/287/movie_credits?api_key=${api_key}&language=fr`)
        .then(response => response.json())
        .then(data => setActorMovies(data))
    }, [])



    // console.log(Actor)
    console.log(ActorMovies)

    return(
        <div className="ActorCard">
            <Navbar />
            <h2>{Actor.name}</h2>
            <div className="ActorContainerFlex">
                <img src={`https://image.tmdb.org/t/p/w500${Actor.profile_path}`} alt={Actor.name}/>
                <div className="ActorContainerDetail">
                    <h3>Métier : {Actor.known_for_department}</h3>
                    <h3>Naissance : {Actor.birthday} à {Actor.place_of_birth}</h3>
                    <h3>Biographie : </h3>
                    <p>{Actor.biography}</p>
                </div>
            </div>

            <h3>Filmographie :</h3>
            <ul>
                {ActorMovies.cast ? ActorMovies.cast.map((movie) => (
                    <li><img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`Affiche ${movie.title}`}/>
                    {console.log(movie.title)}
                    {console.log(movie.backdrop_path)}
                    <p>{movie.title}</p> </li>
                )) : null}
                
            </ul>
        </div>
    )

}

export default ActorCard;