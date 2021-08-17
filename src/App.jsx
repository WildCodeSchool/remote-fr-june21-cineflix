// import { AuthContext } from './authContext/AuthContext';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ActorCard from "./screens/ActorCard/ActorCard"
import Favorite from "./screens/Favorite/Favorite";
import Home from "./screens/Home/Home";
import Intro from './screens/Intro/Intro';
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';
import MovieCard from './screens/MovieCard/MovieCard';
import MovieCategories from './screens/MovieCategories/MovieCategories';
import NotFound from "./screens/Notfound/NotFound";
import Search from './screens/Search/Search';
import Contact from './screens/Contact/Contact';
import Loading from './components/Loading/Loading';
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
          {/* {user ? <Home /> : <Redirect to="/register" />} */}
          <Home />
        </Route>
        <Route exact path="/register">
          {/* {!user ? <Register /> : <Redirect to="/home" />} */}
          <Register />
        </Route>
        <Route exact path="/login">
          {/* {!user ? <Login /> : <Redirect to="/" />} */}
          <Login />
        </Route>
        {/* {user && ( */}
        {/* <> */}
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
        {/* </> */}
        {/* )} */}
        <Route path="/search/:searchValue">
          <Search />
        </Route>
        <Route path="/movie-categories/:movie">
          <MovieCategories />
        </Route>
        <Route path="/serie-categories/:tv">
          <ShowCategories />
        </Route>
        <Route path="/favorites" component={Favorite} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
    </>
  );
};

export default App