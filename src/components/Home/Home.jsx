import Navbar from "../Navbar/Navbar";
import Banner from '../Banner/Banner';
import TopContainer from "../TopContainer/TopContainer";
import "./Home.css";

const Home = () => {

    return (
        <div className="home">
            <Navbar />
            <Banner />
            <TopContainer />
        </div>
    );
};

export default Home;
