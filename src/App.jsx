import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
//import Footer from './components/Footer/Footer'
import Intro from './components/Intro/Intro';
import MovieCard from "./components/MovieCard/MovieCard";
import NotFound from "./components/Notfound/NotFound";
import Search from './components/Search/Search';

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
        <Route path="/search/:searchValue">
          <Search />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;