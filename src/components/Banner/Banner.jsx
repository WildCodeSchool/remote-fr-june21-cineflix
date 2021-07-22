import React, { useState, useEffect } from "react";
import "./Banner.css";

export default function Banner() {

    const [movie, setMovie] = useState([]);
    const API_KEY = 'cda80ca49e23464f07b0b27ac89f1fdd'


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=FR`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setMovie(
                    data.results[
                    Math.floor(Math.random() * data.results.length - 1)
                    ]
                )
            })
    }, [])

    console.log(movie);


    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }


    return (
        <header className="banner">
            <div className="bannerContents">
                <img className="bannerImg" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="poster" />
                <div className="fillContainer">
                    <div className="bannerInfo">
                        <h1 className="bannerTitle">
                            {movie?.title || movie?.name || movie?.original_name}
                        </h1>
                        <div className="bannerButtons">
                            <button className="bannerButton">liste</button>
                            <button className="bannerButton">infos</button>
                        </div>
                        <h2 className="bannerDescription">
                            {truncate(movie?.overview, 150)}
                        </h2>
                    </div>
                </div>
            </div>

        </header>
    );
}
