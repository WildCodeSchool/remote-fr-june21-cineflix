// import { AuthContext } from './authContext/AuthContext';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ActorCard from "./screens/ActorCard/ActorCard"
import Favourite from "./screens/Favourite/Favourite";
import Home from "./screens/Home/Home";
import Intro from './screens/Intro/Intro';
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';
import MovieCard from './screens/MovieCard/MovieCard';
import MovieCategories from './screens/MovieCategories/MovieCategories';
import NotFound from "./screens/Notfound/NotFound";
import Search from './screens/Search/Search';
import Contact from './screens/Contact/Contact';
import Loading from './screens/Loading/Loading';
import ShowCategories from './screens/ShowCategories/ShowCategories';
import TvCard from './screens/TvCard/TvCard';
import './App.css';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/movie-card/:IdMovie">
            <MovieCard />
          </Route>
          <Route path="/tv-card/:IdTv">
            <TvCard />
          </Route>
          <Route path="/loading" exact component={Loading} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/actor/:IdActor">
            <ActorCard />
          </Route>
          <Route path="/search/:searchValue">
            <Search />
          </Route>
          <Route path="/movie-categories/:movie">
            <MovieCategories />
          </Route>
          <Route path="/serie-categories/:tv">
            <ShowCategories />
          </Route>
          <Route path="/favourites" component={Favourite} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App