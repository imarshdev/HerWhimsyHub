import { Routes, Route, HashRouter as Router } from "react-router-dom";
import "./App.css";
import hey from "./assets/R.png";
import Welcome from "./components/0-welcome";
import Dash from "./components/1-dash";
import Compliments from "./components/a-compliments";
import Movies from "./components/b-moviefinder";
import Recipes from "./components/c-recipes"
import Gallery from "./components/d-gallery";
import SurpriseBox from "./components/e-box";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/dash" element={<Dash />} />
        <Route path="/compliments" element={<Compliments />} />
        <Route path="/movie-dates" element={<Movies />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/box" element={<SurpriseBox />} />
      </Routes>
    </Router>
  );
}

export default App;
