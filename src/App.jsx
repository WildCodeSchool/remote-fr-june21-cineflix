import './App.css';
import Home from "./components/Home/Home";
import NotFound from "./components/Notfound/NotFound";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {


  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;