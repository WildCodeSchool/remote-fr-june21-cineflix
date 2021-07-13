import './App.css';
import Home from "./pages/home/Home";
import NotFound from "./pages/notfound/NotFound";
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