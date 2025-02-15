import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import hey from "./assets/R.png";
import Welcome from "./components/0-welcome";
import Dash from "./components/1-dash";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/dash" element={<Dash />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
