import  { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { useParams } from "react-router";
import Navbar from '../../components/Navbar/Navbar';
import Loading from '../../components/Loading/Loading';

//import './TvCard.css';

function TvCard() {
    let { IdTv } = useParams()
    const [tv, setTv] = useState([])
    const [credit, setCredit] = useState([])
    const [loader, setLoader] = useState(true)

    const api_key = 'cda80ca49e23464f07b0b27ac89f1fdd'


    useEffect(() => {
        const getTv = () => {
            fetch(`https://api.themoviedb.org/3/movie/${IdTv}?api_key=${api_key}&language=fr`)
            .then(response => response.json())
            .then(data => setTv(data))
        }
        getTv()
        setLoader(false)
    }, [IdTv])

    useEffect(() => {
        const getCredit = () => {
            fetch(`https://api.themoviedb.org/3/movie/${IdTv}/credits?api_key=${api_key}&language=fr`)
                .then(response => response.json())
                .then(data => setCredit(data))
        }
        getCredit()
        setLoader(false)
    }, [IdTv])

const real = credit.cast ? credit.crew.filter(e => e.job === "Producer") : null;
const auteur = credit.cast ? credit.crew.filter(e => e.department === "Writing") : null;
const acteur = credit.cast ? credit.cast.filter(e => e.known_for_department === "Acting") : null;


const checkReal = (element) => {
    if(element[0]) {
        if(element[2]){
            return `${element[0].name}, ${element[1].name}, ${element[2].name}`
            }
            if(element[1]) {
                return `${element[0].name}, ${element[1].name}`
                    } else {
                        return `${element[0].name}`
                }
            }
        }

const checkActeur = (element) => {
    if(element[0]) {
        if(element[2]) {
            return (
                <>
                <NavLink to={`/actor/${acteur[0].id}`}>{element[0].name}</NavLink>,
                <NavLink to={`/actor/${acteur[1].id}`}>{element[1].name}</NavLink>,
                <NavLink to={`/actor/${acteur[2].id}`}>{element[2].name}</NavLink>
                </>
                    )
        } else if(element[1]) {
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
    if(movies.genres[0]) {
        if(movies.genres[1]) {
            return `${movies.genres[0].name}, ${movies.genres[1]}`
        } else {
            return `${movies.genres[0].name}`
        }
    }
}
        

return (
    <>
        {loader ? <Loading /> : 
    <div className="TvCard">
        <Navbar />
        <h1>{tv.name}</h1>
            <img src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`} alt="" className="img-tv" />
                <div className="detail-content">
                <h3>Réalisateur : {credit.cast ? real[0].name : null} </h3>
                <h3>Auteur : {credit.crew ? checkReal(real) : null}</h3>
                <h3>Casting : {credit.cast ? checkActeur(acteur) : null}</h3>
                <h3>Catégorie :{tv.genres ? checkGenre(tv) : null}</h3>
                <h3>nombre de saisons : {tv.number_of_seasons}</h3>
                <h3>Date de sortie : {tv.first_air_date}</h3>
                <h3>Synopsis : {tv.overview}</h3>

                </div>
    </div>
            }

    </>

)


}

export default TvCard;
