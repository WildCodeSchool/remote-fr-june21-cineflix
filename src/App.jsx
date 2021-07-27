import logo from './assets/logo.png';
import Intro from './components/Intro/Intro';
import Footer from './components/Footer/Footer'
import Home from "./components/Home/Home";
import NotFound from "./components/Notfound/NotFound";
import MovieCard from "./components/MovieCard/MovieCard";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

const App = () => {


  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Intro} />
        <Route path="/home" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/movie-card/:IdMovie">
          <MovieCard />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;