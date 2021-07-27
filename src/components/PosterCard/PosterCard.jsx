import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { BsStar } from "react-icons/bs";
import './PosterCard.css';

const PosterCard = ({ poster }) => {
const [showRate, setShowRate] = useState(false);

return (
    <div className="poster-card">
      <NavLink to={`/movie-card/${poster.id}`} className="poster-img">
        <img src={`https://image.tmdb.org/t/p/w500${poster.poster_path}`} 
        className='poster-img' alt='poster'
        onMouseEnter={() => setShowRate(true)}
        onMouseLeave={() => setShowRate(false)} />
      
        {showRate && (
            <div className="rate-overlay">
            <BsStar />  {poster.vote_average}/10
            </div>
        )}
      </NavLink>
    </div>
    );
}

export default PosterCard;