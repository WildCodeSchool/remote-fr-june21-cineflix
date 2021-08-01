import  { useState, useEffect } from 'react'
import { useParams, NavLink } from "react-router-dom";
import Navbar from '../Navbar/Navbar';

import '.TvCard.css';

function TvCard() {
    let {idTv} = useParams()
    const [tv, setTv] = useState([])

    const api_key = 'cda80ca49e23464f07b0b27ac89f1fdd'


    useEffect(() => {
        const getTv = () => {
            fetch(`https://api.themoviedb.org/3/movie/${IdTv}?api_key=${api_key}&language=fr`)
            .then(response => response.json())
            .then(data => setTv(data))
        }
        getMovie()
    }, [IdTv])


}