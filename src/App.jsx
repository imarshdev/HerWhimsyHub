import { Routes, Route, HashRouter as Router } from "react-router-dom";
import "./App.css";
import hey from "./assets/R.png";
import Welcome from "./components/0-welcome";
import Dash from "./components/1-dash";
import Compliments from "./components/a-compliments";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/dash" element={<Dash />} />
        <Route path="/compliments" element={<Compliments />} />
      </Routes>
    </Router>
  );
}

export default App;
