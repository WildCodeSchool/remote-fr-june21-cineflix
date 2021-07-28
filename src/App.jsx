import logo from './assets/logo.png';
import Intro from './components/Intro/Intro';
import Footer from './components/Footer/Footer'
import Home from "./components/Home/Home";
import NotFound from "./components/Notfound/NotFound";
import MovieCard from "./components/MovieCard/MovieCard";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { AuthContext } from './authContext/AuthContext';
import { useContext } from 'react';

import './App.css';

const App = () => {

  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Intro} />
        <Route exact path="/home">
          {user ? <Home /> : <Redirect to="/register" />}
        </Route>
        <Route exact path="/register">
          {!user ? <Register /> : <Redirect to="/home" />}
        </Route>
        <Route exact path="/login">
          {!user ? <Login /> : <Redirect to="/" />}
        </Route>
        {user && (
          <>
            <Route path="/movie-card/:IdMovie">
              <MovieCard />
            </Route>
          </>
        )}
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;