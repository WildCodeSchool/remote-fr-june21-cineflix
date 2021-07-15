import React, { useState, useEffect } from 'react';
import Navbar from "../Navbar/Navbar";
import List from "../List/List";
import "./Home.css";
import Banner from '../Featured/Banner';

const Home = () => {




    return (
        <div className="home">
            <Navbar />
            <Banner />
            <List />
            <List />
            <List />
            <List />
        </div>
    );
};

export default Home;
