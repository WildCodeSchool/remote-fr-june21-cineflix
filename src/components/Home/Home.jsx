import React, { useState, useEffect } from 'react';
import Navbar from "../Navbar/Navbar";
import Featured from "../Featured/Featured";
import List from "../List/List";
import "./Home.css";

const Home = () => {




    return (
        <div className="home">
            <Navbar />
            <Featured />
            <List />
            <List />
            <List />
            <List />
        </div>
    );
};

export default Home;
