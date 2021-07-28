import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Intro from './components/Intro/Intro';
import MovieCard from "./components/MovieCard/MovieCard";
import NotFound from "./components/Notfound/NotFound";
import ActorCard from "./components/ActorCard/ActorCard"

// import logo from './assets/logo.png';
// import Footer from './components/Footer/Footer'

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
        <Route path="/actor/:IdActor">
          <ActorCard />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App