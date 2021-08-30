import React, { useState, useEffect } from "react";

import { Link } from 'react-router-dom';

import Swal from "sweetalert2";

import "./Banner.css";

export default function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}&language=fr`)
            .then(response => response.json())
            .then(data => {
                setMovie(
                    data.results[
                    Math.floor(Math.random() * data.results.length - 1)
                    ]
                )
            })
    }, [])

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
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
            if (!storedDatas.some(element => (element.id === media.id && element.title === media.title))) {

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

    return (
        <header className="banner">
            <div className="bannerContents">
                {movie &&
                  <div className="bannerImg">
                    <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="" />
                  </div>
                }
                <div className="fillContainer">
                    <div className="bannerInfo">
                        <h1 className="bannerTitle">
                            {movie?.title || movie?.name || movie?.original_name}
                        </h1>
                        <div className="flex-banner">
                            <div className="bannerButtons">
                                <button className="bannerButton" id={movie?.id} onClick={(event) => handleFavourite(movie)}>Ajouter aux favoris</button>
                                <Link to={`/movie-card/${movie?.id}`}>
                                    <button className="bannerButton">Info</button>
                                </Link>
                            </div>
                            <h2 className="bannerDescription">
                                {truncate(movie?.overview, 100)}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
