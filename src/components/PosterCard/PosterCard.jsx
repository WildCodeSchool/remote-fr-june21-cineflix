import { useState } from 'react';
import './PosterCard.css';

const PosterCard = ({ poster }) => {
const [selectedPoster, setSelectedPoster] = useState('');
const [showRate, setShowRate] = useState(false);


return (
    <>
    <div className="poster-card">
        <img src={`https://image.tmdb.org/t/p/w500${poster.poster_path}`} 
        className='poster-img' alt='poster'
        onMouseEnter={() => setShowRate(true)}
        onMouseLeave={() => setShowRate(false)} />
        {showRate && (
        <div className="rate-overlay">
            Note : {poster.vote_average}/10
        </div>
        )}
    </div>
    </>
    );
}

export default PosterCard;