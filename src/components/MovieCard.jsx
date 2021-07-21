import  { useState, useEffect } from 'react'


import './MovieCard.css'

function MovieCard() {
    const [Movie, setMovie] = useState([])
    const api_key = 'cda80ca49e23464f07b0b27ac89f1fdd'

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/245891?api_key=${api_key}&language=fr`)
        .then(response => response.json())
        .then(data => setMovie(data))
    }, [])

    
    const [Cast, setCast] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/245891/credits?api_key=${api_key}&language=fr`)
        .then(response => response.json())
        .then(data => setCast(data))
    }, [])

    
    console.log(Movie)
    console.log(Cast)
    const real = Cast.cast ? Cast.crew.filter(e => e.job === "Director") : null
    console.log(real)
    const auteur = Cast.cast ? Cast.crew.filter(e => e.known_for_department === "Writing" && e.job === "Screenplay" || e.job === "Novel") : null
    console.log(auteur)

    return (
        <div>
        <ul className="navB">NavBar</ul>
        <h1>{Movie.title}</h1>
        <button className="favButton" type="button"> + </button>
        <div className="containerFlex">
            <img src={`https://image.tmdb.org/t/p/w500${Movie.poster_path}`} alt=""/>
            <div className="containerDetail">
            <h3>Réalisateur : {Cast.crew ? `${real[0].name}` : null}</h3>
            <h3>Auteur : {Cast.crew ? `${auteur[0].name}` : null}</h3>
            <h3>Casting : {Cast.cast ? `${Cast.cast[0].name},  ${Cast.cast[1].name},  ${Cast.cast[2].name}` : null}</h3>
            <h3>Catégorie : {Movie.genres ? `${Movie.genres[0].name}, ${Movie.genres[1].name}` : null}</h3>
            <h3>Durée : {Movie.runtime} minutes</h3>
            <h3>Date de sortie : {Movie.release_date}</h3>
            <h3>Synopsis : {Movie.overview}
            </h3>
            <a href={`https://www.youtube.com/results?search_query=${Movie.title}+bande+annonce`} target="_blank" rel="noreferrer">
            <button className="buttonBA" type="button" alt="Bande-Annonce">Bande-Annonce</button>
            </a>
            <h3>Note : {Movie.vote_average}/10</h3>
            </div>
        </div>
            <h3>Similaire :</h3>
        </div>
        )

}

export default MovieCard;