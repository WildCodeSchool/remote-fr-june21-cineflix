import React from "react";
import Navbar from "../Navbar/Navbar";
import "./NotFound.css"


const NotFound = () => {
    return (
        <div className="notFound">
            <Navbar />
            <h1>404</h1>
            <h2>Hélas</h2>
            <p>la page que vous cherchez regarde actuellement un film...</p>
        </div>
    );
};

export default NotFound;