import 
{ BrowserRouter as Router,
Switch,
Route,
Link
} from "react-router-dom";
import TopMovieContainer from './components/TopContainer/TopContainer';
import './App.css';

const App = () => {
  return (
    <TopMovieContainer />
  );
}

export default App;
