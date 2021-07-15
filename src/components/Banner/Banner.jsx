import React, { useState, useEffect } from "react";
import axios from "../axios";
import Requests from "../Requests";
import "./Banner.css";

export default function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const Request = await axios.get(Requests.fetchTrending);
            setMovie(
                Request.data.results[
                Math.floor(Math.random() * Request.data.results.length - 1)
                ]
            );
            return Request;
        }
        fetchData();
    }, []);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    console.log(movie);

    return (
        <header
            className="banner"
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            }}
        >
            <div className="bannerContents">
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
            <div className="bannerFadeBottom" />

        </header>
    );
}
