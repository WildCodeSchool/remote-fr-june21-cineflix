import './PosterCard.css';

const PosterCard = ({ poster }) => {
    return (
        <>
    <img src={`https://image.tmdb.org/t/p/w500${poster.poster_path}`} alt='poster' />
    <div >
        <ul className="rate-container">
            <li>Note des utilisateurs : {poster.vote_average}</li>
        </ul>
    </div>
    </>
    );
}

export default PosterCard;