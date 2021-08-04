// import { AuthContext } from './authContext/AuthContext';
import { Redirect } from "react-router-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import { useContext } from 'react';



import ActorCard from "./components/ActorCard/ActorCard";

import Contact from './components/Contact/Contact';
import Home from "./components/Home/Home";
//import Footer from './components/Footer/Footer'
import Intro from './components/Intro/Intro';
import Loading from './components/Loading/Loading';
import Login from './components/Login/Login';
import MovieCard from "./components/MovieCard/MovieCard";
import NotFound from "./components/Notfound/NotFound";
import Register from './components/Register/Register';
import Search from './components/Search/Search';
import TvCard from './components/TvCard/TvCard';

import './App.css';

const App = () => {

  // const { user } = useContext(AuthContext);

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
        <Route path="tv-card/:IdTv" component={TvCard} />

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
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
    </>
  );
};

export default App