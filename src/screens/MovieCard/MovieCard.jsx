import { useState, useEffect } from 'react'
import { useParams, NavLink } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar';
import Similar from '../../components/Similar/Similar';

import Swal from "sweetalert2";

import CircularLoading from "../../components/CircularLoading/CircularLoading";

import './MovieCard.css'

function MovieCard() {
    let { IdMovie } = useParams()
   
    const [Cast, setCast] = useState([])
    const [Movie, setMovie] = useState([])

    useEffect(() => {
        const getMovie = () => {
            fetch(`https://api.themoviedb.org/3/movie/${IdMovie}?api_key=${process.env.REACT_APP_API_KEY}&language=fr`)
                .then(response => response.json())
                .then(data => setMovie(data))
        }
        getMovie();
        window.scrollTo(0, 0);
    }, [IdMovie])



    useEffect(() => {
        const getCast = () => {
            fetch(`https://api.themoviedb.org/3/movie/${IdMovie}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=fr`)
                .then(response => response.json())
                .then(data => setCast(data))
        }
        getCast()
    }, [IdMovie])

    const auteur = Cast.cast ? Cast.crew.filter(e => e.department === "Writing") : null
    const acteur = Cast.cast ? Cast.cast.filter(e => e.known_for_department === "Acting") : null
    const real = Cast.cast ? Cast.crew.filter(e => e.job === "Director") : null

    const checkCast = (a) => {
        if (a[0]) {
            if (a[2]) {
                return (
                    <>
                        <NavLink to={`/actor/${acteur[0].id}`}>{a[0].name}</NavLink>,
                        <NavLink to={`/actor/${acteur[1].id}`}>{a[1].name}</NavLink>,
                        <NavLink to={`/actor/${acteur[2].id}`}>{a[2].name}</NavLink>
                    </>
                )
            } else if (a[1]) {
                return (
                    <>
                        <NavLink to={`/actor/${acteur[0].id}`}>{a[0].name}</NavLink>,
                        <NavLink to={`/actor/${acteur[1].id}`}>{a[1].name}</NavLink>;
                    </>
                )
            } else {
                return (
                    <>
                        <NavLink to={`/actor/${acteur[0].id}`}>{a[0].name}</NavLink>;
                    </>
                )
            }
        }
    }

    const checkCrew = (a) => {

        if (a[0]) {
            if (a[2]) {
                return `${a[0].name}, ${a[1].name}, ${a[2].name}`
            }
            if (a[1]) {
                return `${a[0].name}, ${a[1].name}`
            } else {
                return `${a[0].name}`
            }
        }
        return "Seigneur Poulet"
    }

    const checkCategorie = () => {
        if (Movie.genres[0]) {
            if (Movie.genres[1]) {
                return `${Movie.genres[0].name}, ${Movie.genres[1].name}`
            } else {
                return `${Movie.genres[0].name}`
            }
        }
    }

    //***** Favourite's scripts

    const [inFavourite, setInFavourite] = useState(false)

    useEffect(() => {
      const checkIsFavourite = (id) => {
        let storedDatas

        // Try to get the favourites object in localstorage
        try {
            storedDatas = JSON.parse(localStorage["favourites"])
        } catch (error) {
        }

        // If there is already the favourites object
        if (storedDatas) {

          // Check if there is not already in the array, if not we retrieve all the data, add the new one and push it all
          if (storedDatas.some(element => (element.id == id))) {
            setInFavourite(true)
          }
        } 
      }
      checkIsFavourite(IdMovie)
    },[])

    const handleFavourite = (media) => {

        let storedDatas

        // Try to get the favourites object in localstorage
        try {
            storedDatas = JSON.parse(localStorage["favourites"])
        } catch (error) {

        }

        // If there is already the favourites object
        if (storedDatas) {

            // Check if there is not already in the array, if not we retrieve all the data, add the new one and push it all
            if (!storedDatas.some(element => (element.id === media.id && element.title === media.title))) {

              let newDatas = []
              storedDatas.map(element => newDatas.push(element))
              newDatas.push(media)
              localStorage["favourites"] = JSON.stringify(newDatas)
              Swal.fire('Bien ajouté à vos favoris')
              setInFavourite(true)
            } else {
              Swal.fire('Déjà dans vos favoris')
            }

            // If there is not the favourites object, we create it
        } else {

            let newFavourite = [media]
            localStorage["favourites"] = JSON.stringify(newFavourite)
            Swal.fire('Bien ajouté à vos favoris')
            setInFavourite(true)
        }

    }

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);


    return (
        <div className="MovieCard">
            <Navbar />
            {isLoading ? (
                <CircularLoading />
            ) : (
                <>
                    <h1>{Movie.title}</h1>
                    <div className="containerFlex">
                        <img src={`https://image.tmdb.org/t/p/w500${Movie.poster_path}`} alt="" className="image-movie-card" />
                        <div className="containerDetail">
                            <h3>Réalisateur : {Cast.crew ? checkCrew(real) : null}</h3>
                            <h3>Auteur : {Cast.crew ? checkCrew(auteur) : null}</h3>
                            <h3>Casting : {Cast.cast ? checkCast(acteur) : null}</h3>
                            <h3>Catégorie : {Movie.genres ? checkCategorie(Movie) : null}</h3>
                            <h3>Durée : {Movie.runtime} minutes</h3>
                            <h3>Date de sortie : {Movie.release_date}</h3>
                            <h3>Synopsis : {Movie.overview}
                            </h3>
                            <div className="buttonCard">
                              <button className="favButton" type="button" id={Movie.id} onClick={(event) => handleFavourite(Movie)}><i class={inFavourite ? "icon-favourite inFav fas fa-heart" : "icon-favourite notInFav fas fa-heart"}></i></button>
                              <a href={`https://www.youtube.com/results?search_query=${Movie.title}+bande+annonce`} target="_blank" rel="noreferrer">
                                  <button className="buttonBA" type="button" alt="Bande-Annonce">Bande-Annonce</button>
                              </a>
                            </div>
                            <h3>Note : {Movie.vote_average}/10</h3>
                        </div>
                    </div>
                    <Similar id={IdMovie} />
                </>
            )}
        </div>
    )

}

export default MovieCard;