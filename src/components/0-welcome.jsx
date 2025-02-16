import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import hey from "../assets/R.png";
import wave from "../assets/wave.gif";

export default function Welcome() {
  const [waveSrc, setWaveSrc] = useState(null);
  const [heySrc, setHeySrc] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    // Check if images are already in local storage
    const storedWave = localStorage.getItem("waveImage");
    const storedHey = localStorage.getItem("heyImage");

    if (storedWave && storedHey) {
      // Use stored images
      setWaveSrc(storedWave);
      setHeySrc(storedHey);
    } else {
      // Convert images to base64 and store them
      const convertToBase64 = async (imageFile, key, setState) => {
        const response = await fetch(imageFile);
        const blob = await response.blob();
        const reader = new FileReader();

        reader.onloadend = () => {
          localStorage.setItem(key, reader.result); // Store in localStorage
          setState(reader.result); // Set state to update UI
        };

        reader.readAsDataURL(blob); // Convert to base64
      };

      convertToBase64(wave, "waveImage", setWaveSrc);
      convertToBase64(hey, "heyImage", setHeySrc);
    }
  }, []);

  return (
    <div className="container">
      {waveSrc && <img src={waveSrc} style={{ width: "13rem" }} alt="Wave" />}
      {heySrc && (
        <h3>
          <img src={heySrc} style={{ width: "13rem" }} alt="Hey" />
        </h3>
      )}
      <button className="bouncing-button" onClick={() => navigate("/dash")}>
        <h5 style={{ margin: "0" }}>Press To start</h5>
      </button>
    </div>
  );
}
