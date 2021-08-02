import Navbar from "../Navbar/Navbar";
import Banner from '../Banner/Banner';
import Footer from './../Footer/Footer';
import TopContainer from './../TopContainer/TopContainer';
import MovieCategories from '../MovieCategories/MovieCategories';
import "./Home.css";

const Home = () => {

    return (
        <div className="home">
            <Navbar />
            <Banner />
            <TopContainer />
            <MovieCategories />
        </div>
    );
};

export default Home;
