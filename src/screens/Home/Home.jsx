import { useState, useEffect } from "react";

import Banner from '../../components/Banner/Banner';
import CircularLoading from "../../components/CircularLoading/CircularLoading";
import Footer from '../../components/Footer/Footer';
import TopContainer from '../../components/TopContainer/TopContainer';
import Navbar from '../../components/Navbar/Navbar';

import "./Home.css";


const Home = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <div className="home">
            <Navbar />
            {isLoading ? (
                <CircularLoading />
            ) : (
                <Banner />
            )}
            <TopContainer />
            <Footer />
        </div>
    );
};

export default Home;
