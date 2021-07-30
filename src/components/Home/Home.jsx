import Banner from '../Banner/Banner';
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import TopContainer from "../TopContainer/TopContainer";

import "./Home.css";

const Home = () => {

    return (
        <div className="home">
            <Navbar />
            <Banner />
            <TopContainer />
            <Footer />
        </div>
    );
};

export default Home;
