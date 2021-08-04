import { NavLink, useParams } from 'react-router-dom';
import { useState } from 'react';
import { BsStar } from "react-icons/bs";

import './PosterCard.css';

const PosterCard = ({ id, poster_path, vote_average, release_date, first_air_date }) => {
    const [showRate, setShowRate] = useState(false);

    const { tv } = useParams()

    let mediaType = null;
    tv ? mediaType = 'tv-card' : mediaType = 'movie-card'
    return (
            <div className="poster-card">
              <NavLink to={`/${mediaType}/${id}`} className='poster-img'>
                    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                        className='poster-img' alt='poster'
                        onMouseEnter={() => setShowRate(true)}
                        onMouseLeave={() => setShowRate(false)} />
                    {showRate && (
                            <div className="rate-overlay">
                                <li><BsStar />  {vote_average}/10</li>
                                <li>{release_date ? release_date.slice(0, 4) : first_air_date ? first_air_date.slice(0, 4) : null}</li>
                            </div>
                    )}
              </NavLink>
            </div>
    );
}

export default PosterCard;