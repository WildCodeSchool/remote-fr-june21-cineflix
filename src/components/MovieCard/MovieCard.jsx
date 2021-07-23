import  { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";


import './MovieCard.css'

function MovieCard() {
    let { IdMovie } = useParams()
    const [Movie, setMovie] = useState([])
    const api_key = 'cda80ca49e23464f07b0b27ac89f1fdd'

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${IdMovie}?api_key=${api_key}&language=fr`)
        .then(response => response.json())
        .then(data => setMovie(data))
    }, [])

    
    const [Cast, setCast] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${IdMovie}/credits?api_key=${api_key}&language=fr`)
        .then(response => response.json())
        .then(data => setCast(data))
    }, [])

    const auteur = Cast.cast ? Cast.crew.filter(e => (e.department === "Writing" && e.job === "Screenplay") || e.job === "Novel") : null
    const acteur = Cast.cast ? Cast.cast.filter(e => e.known_for_department === "Acting") : null
    const real = Cast.cast ? Cast.crew.filter(e => e.job === "Director") : null

    const checkCrew = (a) => {
        
        if(a[0]) {
            if(a[2]) {
                return `${a[0].name}, ${a[1].name}, ${a[2].name}`
            }
            if(a[1]) {
                return `${a[0].name}, ${a[1].name}`
        } else {
            return `${a[0].name}`
        }
    }
    }


const checkCategorie = () => {
    if(Movie.genres[0]) {
        if(Movie.genres[1]) {
            return `${Movie.genres[0].name}, ${Movie.genres[1].name}`
    } else {
        return `${Movie.genres[0].name}`
    }
}
}
    return (
        <div className="MovieCard">
        <ul className="navB">NavBar</ul>
        <h1>{Movie.title}</h1>
        <div className="containerFlex">
            <img src={`https://image.tmdb.org/t/p/w500${Movie.poster_path}`} alt=""/>
            <div className="containerDetail">
            <h3>Réalisateur : {Cast.crew ? `${real[0].name}` : null}</h3>
            <h3>Auteur : {Cast.crew ? checkCrew(auteur) : null}</h3>
            <h3>Casting : {Cast.cast ? checkCrew(acteur) : null}</h3>
            <h3>Catégorie : {Movie.genres ? checkCategorie(Movie) : null}</h3>
            <h3>Durée : {Movie.runtime} minutes</h3>
            <h3>Date de sortie : {Movie.release_date}</h3>
            <h3>Synopsis : {Movie.overview}
            </h3>
            <a href={`https://www.youtube.com/results?search_query=${Movie.title}+bande+annonce`} target="_blank" rel="noreferrer">
            <button className="favButton" type="button"> + </button>
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