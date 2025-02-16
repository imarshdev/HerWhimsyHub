import {
  GiButterflyFlower,
  GiHotMeal,
  GiBoxingGloveSurprise,
} from "react-icons/gi";
import { PiPaintBrushDuotone } from "react-icons/pi";
import { SiWondersharefilmora } from "react-icons/si";
import {
  FaAngleDoubleDown,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleDoubleUp,
} from "react-icons/fa";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dash() {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "CupCake | Dashboard";
  }, []);

  const optionStyle = {
    width: "60%",
    height: "3rem",
    border: "solid 1px purple",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    margin: "10px 20px",
    boxSizing: "border-box",
  };

  const menuItem = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const heading = {
    margin: "0",
  };

  return (
    <>
      <div className="container">
        <h2 style={heading}>Purr !!!</h2>
        <div style={menuItem} onClick={() => navigate("/compliments")}>
          <span style={optionStyle}>1. Compliments</span>
          <GiButterflyFlower size="3rem" />
        </div>
        <div style={menuItem}>
          <SiWondersharefilmora size="3rem" />
          <span style={optionStyle}>2. Movie Dates</span>
        </div>
        <div style={menuItem}>
          <span style={optionStyle}>3. Recipes</span>
          <GiHotMeal size="3rem" />
        </div>
        <div style={menuItem}>
          <PiPaintBrushDuotone size="3rem" />
          <span style={optionStyle}>4. Shinah's Gallery</span>
        </div>
        <div style={menuItem}>
          <span style={optionStyle}>5. Some Box</span>
          <GiBoxingGloveSurprise size="3rem" />
        </div>
        <br />
        <br />
        <div style={styles.gamepadContainer}>
          {/* D-Pad (Cross buttons) */}
          <div style={styles.dpadContainer}>
            <button style={styles.dpadButton}>
              <FaAngleDoubleUp size={24} />
            </button>
            <div style={styles.dpadRow}>
              <button style={styles.dpadButton}>
                <FaAngleDoubleLeft size={24} />
              </button>
              <button style={styles.dpadButton}>
                <FaAngleDoubleRight size={24} />
              </button>
            </div>
            <button style={styles.dpadButton}>
              <FaAngleDoubleDown size={24} />
            </button>
          </div>

          {/* Big Round Button */}
          <button style={styles.roundButton}>●</button>
        </div>
      </div>
    </>
  );
}

// Styles for the gamepad controls
const styles = {
  gamepadContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "95%",
    flexDirection: "row",
    marginTop: "20px", // Added margin for some space above the gamepad
  },
  dpadContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  dpadRow: {
    display: "flex",
    width: "14rem",
    justifyContent: "space-between",
  },
  dpadButton: {
    backgroundColor: "transparent",
    margin: "5px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    height: "4rem", // Make the D-pad buttons larger
    boxShadow: "1px 1.5px 3px #000000",
    padding: "5px",
    transition: "all 0.2s ease-in-out", // Add smooth transition
  },
  roundButton: {
    backgroundColor: "purple",
    border: "solid 1px purple",
    width: "6rem", // Increased size for better prominence
    height: "4.5rem", // Increased size
    fontSize: "30px",
    color: "#fff",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "1px 1.5px 3px #000000",
    transition: "all 0.2s ease-in-out", // Smooth transition
  },
};
