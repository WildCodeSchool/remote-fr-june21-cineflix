import { useEffect, useState } from "react";
import axios from "../axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl); // <-- When using a variable from outside
            setMovies(request.data.results); // of useEffect(), you HAVE TO include it
            return request; // inside the '[]' at the end of useEffect()
        }
        fetchData();
    }, [fetchUrl]); // <-- Here's where we need to put the outside variable

    // ^-- If you leave the '[]' blank, this code only runs once when the 'Row' loads.
    // If you put a variable like 'movies' inside the '[]', this code will run once
    // when the page first loads and everytime that varible changes. That variable is
    // called the dependency.

    // https://developers.google.com/youtube/player_parameters

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="rowPosters">
                {movies.map((movie) => (
                    <img
                        key={movie.id}
                        className={`rowPoster ${isLargeRow && "rowPosterLarge"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
                            }`}
                        alt={movie.name}
                    />
                ))}
            </div>
        </div>
    );
}

export default Row;
