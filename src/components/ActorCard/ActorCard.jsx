import  { useState, useEffect } from 'react'

function ActorCard() {
    const [Actor, setActor] = useState([])
    const api_key = 'cda80ca49e23464f07b0b27ac89f1fdd'

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/person/287?api_key=${api_key}&language=fr`)
        .then(response => response.json())
        .then(data => setActor(data))
    }, [])

    console.log(Actor)

    return(
        <div>
            <h2>{Actor.name}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${Actor.profile_path}`} alt={Actor.name}/>
            <h3>Métier : {Actor.known_for_department}</h3>
            <h3>Naissance : {Actor.birthday} à {Actor.place_of_birth}</h3>
            <h3>Biographie : </h3>
            <p>{Actor.biography}</p>
        </div>
    )

}

export default ActorCard;