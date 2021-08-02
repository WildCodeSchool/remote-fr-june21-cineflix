// import { AuthContext } from './authContext/AuthContext';
// import { Redirect } from "react-router-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import { useContext } from 'react';

import ActorCard from "./screens/ActorCard/ActorCard"
import Home from "./screens/Home/Home";
import Intro from './screens/Intro/Intro';
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';
import MovieCard from './screens/MovieCard/MovieCard';
import NotFound from "./screens/Notfound/NotFound";
import Search from './screens/Search/Search';
import Contact from './screens/Contact/Contact';
import Loading from './components/Loading/Loading';

import './App.css';
import MovieCategories from './components/MovieCategories/MovieCategories';


const App = () => {

  // const { user } = useContext(AuthContext);

  return (
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
        <Route path="/movie-categories">
          <MovieCategories />
        </Route>
        <Route path='/not-found' component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App