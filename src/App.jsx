import logo from './assets/logo.png';
import Intro from './components/Intro/Intro';
import Footer from './components/Footer/Footer'
import Home from "./components/Home/Home";
import NotFound from "./components/Notfound/NotFound";
import MovieCard from "./components/MovieCard/MovieCard";
import Contact from "./components/Contact/Contact";
import Loading from "./components/Loading/Loading";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

const App = () => {


  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Intro} />
        <Route path="/home" exact component={Home} />
        <Route path="/movie-card/:IdMovie">
          <MovieCard />
        </Route>
        <Route path="/loading" exact component={Loading} />
        <Route path="/contact" exact component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;