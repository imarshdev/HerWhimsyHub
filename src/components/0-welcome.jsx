import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Import images
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
      // If found, use stored images
      setWaveSrc(storedWave);
      setHeySrc(storedHey);
    } else {
      // If not found, convert images to base64 and store them
      const loadImageToBase64 = (imgSrc) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = imgSrc;

          img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);
            const base64 = canvas.toDataURL();
            resolve(base64);
          };

          img.onerror = (err) => reject(err);
        });
      };

      // Convert both images and store them in local storage
      loadImageToBase64(wave)
        .then((waveBase64) => {
          localStorage.setItem("waveImage", waveBase64);
          setWaveSrc(waveBase64);
        })
        .catch((error) => console.error("Error loading wave image:", error));

      loadImageToBase64(hey)
        .then((heyBase64) => {
          localStorage.setItem("heyImage", heyBase64);
          setHeySrc(heyBase64);
        })
        .catch((error) => console.error("Error loading hey image:", error));
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