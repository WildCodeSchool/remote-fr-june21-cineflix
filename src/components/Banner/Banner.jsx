import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import "./Banner.css";

export default function Banner() {

    const [movie, setMovie] = useState([]);
    const API_KEY = 'cda80ca49e23464f07b0b27ac89f1fdd'



    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=fr`)
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                setMovie(
                    data.results[
                    Math.floor(Math.random() * data.results.length - 1)
                    ]
                )
            })
    }, [])

    // console.log(movie);


    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }


    return (
        <header className="banner">
            <div className="bannerContents">
              {movie &&
               <img className="bannerImg" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="poster" />
              }
                <div className="fillContainer">
                    <div className="bannerInfo">
                        <h1 className="bannerTitle">
                            {movie?.title || movie?.name || movie?.original_name}
                        </h1>
                        <div className="flex-banner">
                            <div className="bannerButtons">
                                <button className="bannerButton">liste</button>
                                <Link to={`/movie-card/${movie.id}`}>
                                    <button className="bannerButton">infos</button>
                                </Link>
                            </div>
                            <h2 className="bannerDescription">
                                {truncate(movie?.overview, 150)}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    );
}
