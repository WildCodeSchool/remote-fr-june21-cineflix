import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import TopContainer from '../../components/TopContainer/TopContainer';
import Navbar from '../../components/Navbar/Navbar';


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
