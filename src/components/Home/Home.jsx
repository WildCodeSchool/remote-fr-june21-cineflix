import Navbar from "../Navbar/Navbar";
import Requests from "../Requests";
import Row from "../Row/Row";
import "./Home.css";
import Banner from '../Banner/Banner';

const Home = () => {




    return (
        <div className="home">
            <Navbar />
            <Banner />
            <Row
                title="Les mieux notés" fetchUrl={Requests.fetchTopRated}
                isLargeRow />
            <Row title="À la mode maintenant" fetchUrl={Requests.fetchTrending} />
            <Row title="Films d'action" fetchUrl={Requests.fetchActionMovies} />
            <Row title="Comédies" fetchUrl={Requests.fetchComedyMovies} />
            <Row title="Films d'horreur" fetchUrl={Requests.fetchHorrorMovies} />
            <Row title="Films romantiques" fetchUrl={Requests.fetchRomanceMovies} />
            <Row title="Documentaires" fetchUrl={Requests.fetchDocumentaries} />
        </div>
    );
};

export default Home;
