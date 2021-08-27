import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { useParams } from "react-router";
import Navbar from '../../components/Navbar/Navbar';

import CircularLoading from "../../components/CircularLoading/CircularLoading";

import Swal from "sweetalert2";

import './TvCard.css';

function TvCard() {
    let { IdTv } = useParams()
    const [tv, setTv] = useState([])
    const [credit, setCredit] = useState([])

    useEffect(() => {
        const getTv = () => {
            fetch(`https://api.themoviedb.org/3/tv/${IdTv}?api_key=${process.env.REACT_APP_API_KEY}&language=fr`)
                .then(response => response.json())
                .then(data => setTv(data))
        }
        getTv()
    }, [IdTv])

    useEffect(() => {
        const getCredit = () => {
            fetch(`https://api.themoviedb.org/3/tv/${IdTv}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=fr`)
                .then(response => response.json())
                .then(data => setCredit(data))
        }
        getCredit()
    }, [IdTv])

    const real = credit.cast ? credit.crew.filter(e => e.job === "Producer") : null;
    const auteur = credit.cast ? credit.crew.filter(e => e.department === "Writing") : null;
    const acteur = credit.cast ? credit.cast.filter(e => e.known_for_department === "Acting") : null;


    const checkReal = (element) => {
        if (element[0]) {
            if (element[2]) {
                return <h3>Réalisateur : {element[0].name}, {element[1].name}, {element[2].name}</h3>
            }
            if (element[1]) {
                return <h3>Réalisateur : {element[0].name}, {element[1].name} </h3>
            } else {
                return <h3> Réalisateur : {element[0].name} </h3>
            }
        }
    }

    const checkAut = (element) => {
        if (element[0]) {
            if (element[2]) {
                return <h3>Auteur : {element[0].name}, {element[1].name}, {element[2].name}</h3>
            }
            if (element[1]) {
                return <h3>Auteur : {element[0].name}, {element[1].name} </h3>
            }
            return <h3> Auteur : {element[0].name} </h3>
        } else if (tv.created_by.length > 0) {
            return <h3>Auteur : {tv.created_by[0].name}</h3>
        }
    }

    console.log(tv)

    const checkActeur = (element) => {
        if (element[0]) {
            if (element[2]) {
                return (
                    <>
                        <NavLink to={`/actor/${acteur[0].id}`}>{element[0].name}</NavLink>,
                        <NavLink to={`/actor/${acteur[1].id}`}>{element[1].name}</NavLink>,
                        <NavLink to={`/actor/${acteur[2].id}`}>{element[2].name}</NavLink>
                    </>
                )
            } else if (element[1]) {
                return (
                    <>
                        <NavLink to={`/actor/${acteur[0].id}`}>{element[0].name}</NavLink>,
                        <NavLink to={`/actor/${acteur[1].id}`}>{element[1].name}</NavLink>;
                    </>
                )
            } else {
                return (
                    <>
                        <NavLink to={`/actor/${acteur[0].id}`}>{element[0].name}</NavLink>;
                    </>
                )
            }
        }
    }


    const checkGenre = (movies) => {
        if (movies.genres[0]) {
            if (movies.genres[1]) {
                return `${movies.genres[0].name}, ${movies.genres[1].name}`
            } else {
                return `${tv.genres[0].name}`
            }
        }
        return "Seigneur Poulet"
    }


    //***** Favourite's scripts

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
            if (!storedDatas.some(element => (element.id === media.id && element.title === media.title))) {  //&& (element.type === type)

                let newDatas = []
                storedDatas.map(element => newDatas.push(element))
                newDatas.push(media)
                localStorage["favourites"] = JSON.stringify(newDatas)
                Swal.fire('Bien ajouté à vos favoris')
            }

            // If there is not the favourites object, we create it
        } else {

            let newFavourite = [media]
            localStorage["favourites"] = JSON.stringify(newFavourite)
            Swal.fire('Bien ajouté à vos favoris')
        }

    }

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    return (

        <div className="TvCard">
            <Navbar />
            {isLoading ? (
                <CircularLoading />
            ) : (
                <>
                    <h1>{tv.name}</h1>
                    <div className="flex">
                        <img src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`} alt="" className="img-tv" />
                        <div className="detail-content">
                            {credit.cast ? checkReal(real) : null}
                            {credit.cast ? checkAut(auteur) : null}
                            <h3>Casting : {credit.cast ? checkActeur(acteur) : null}</h3>
                            <h3>Catégorie :{tv.genres ? checkGenre(tv) : null}</h3>
                            <h3>Nombre de saisons : {tv.number_of_seasons}</h3>
                            <h3>Date de sortie : {tv.first_air_date}</h3>
                            <h3>Synopsis : {tv.overview}</h3>
                            <h3>Diffuseur : </h3>
                            <a href={tv.homepage} target="_blank" rel="noreferrer">
                                <img className="diffImg" src={tv.networks ? `https://image.tmdb.org/t/p/w500${tv.networks[0].logo_path}` : null} alt="" />
                            </a>
                            <div className="buttonCard">
                                <button className="favButton" type="button" id={tv.id} onClick={(event) => handleFavourite(tv)}><i class="icon-favourite far fa-plus-square"></i></button>
                                <a href={`https://www.youtube.com/results?search_query=${tv.name}+bande+annonce`} target="_blank" rel="noreferrer">
                                    <button className="buttonBA" type="button" alt="Bande-Annonce">Bande-Annonce</button>
                                </a>
                            </div>
                            <h3>Note : {tv.vote_average}/10</h3>
                        </div>
                    </div>
                </>
            )}
        </div>


    )


}

export default TvCard;
