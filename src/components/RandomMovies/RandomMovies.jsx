import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const RandomMovies = () => {
    const [RandMovies, setRandMovies] = useState([])
    const api_key = 'cda80ca49e23464f07b0b27ac89f1fdd'

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

    const [selectCat, setSelectCat] = useState("")
    const handeChange= (e) => {
        setSelectCat(e.target.value) 
    }
    console.log(selectCat)

    useEffect(() => {
        const getMovieCat = () => {
            fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${selectCat}&api_key=${api_key}&language=fr`)
                .then(res => res.json())
                .then(data => setRandMovies(data.results));
        }
        getMovieCat()
    }, []);

    return (
        <div>
            <select name="Catégorie" onChange={(e) => handeChange(e)}>
                <option disabled selected>Choisir Catégorie</option>
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

            {/* {console.log(RandMovies)}
            <h3> Random {RandMovies[9] ? RandMovies.map((movie, index) => (
                    <figure key={index}>
                        <NavLink to={`/movie-card/${movie.id}`} >
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`Affiche ${movie.title}`} />
                            <p>{movie.title}</p>
                        </NavLink>
                    </figure>)) : null }</h3> */}
        </div>
    );
}

export default RandomMovies;