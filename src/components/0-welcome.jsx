import hey from "../assets/R.png";
import wave from "../assets/wave.gif";
import { useNavigate } from "react-router-dom";
export default function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <img src={wave} style={{ width: "13rem" }} />
      <h3>
        <img src={hey} style={{ width: "13rem" }} />
      </h3>
      <button className="bouncing-button" onClick={() => navigate("/dash")}>
        <h5 style={{ margin: "0" }}>Press To start</h5>
      </button>
    </div>
  );
}
