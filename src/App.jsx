import Home from "./components/Home/Home";
import NotFound from "./components/Notfound/NotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

const App = () => {


  return (

    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;