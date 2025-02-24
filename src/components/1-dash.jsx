import {
  GiButterflyFlower,
  GiHotMeal,
  GiBoxingGloveSurprise,
} from "react-icons/gi";
import { PiPaintBrushDuotone } from "react-icons/pi";
import { SiWondersharefilmora } from "react-icons/si";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dash({ fontFamily }) {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const options = [
    {
      label: "Compliments",
      icon: <GiButterflyFlower size="3rem" />,
      path: "/compliments",
    },
    {
      label: "Movie Dates",
      icon: <SiWondersharefilmora size="3rem" />,
      path: "/movie-dates",
    },
    { label: "Recipes", icon: <GiHotMeal size="3rem" />, path: "/recipes" },
    {
      label: "Shinah's Gallery",
      icon: <PiPaintBrushDuotone size="3rem" />,
      path: "/gallery",
    },
    {
      label: "Some Box",
      icon: <GiBoxingGloveSurprise size="3rem" />,
      path: "/box",
    },
  ];

  useEffect(() => {
    document.title = "CupCake | Dashboard";

    const handleKeyPress = (e) => {
      if (e.key === "ArrowUp") {
        setSelectedIndex((prevIndex) => Math.max(0, prevIndex - 1));
      }
      if (e.key === "ArrowDown") {
        setSelectedIndex((prevIndex) =>
          Math.min(options.length - 1, prevIndex + 1)
        );
      }
      if (e.key === "Enter") {
        navigate(options[selectedIndex].path);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [selectedIndex, navigate]);

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
    backgroundColor: "#fff", // Default background
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

  // Functions for D-pad controls (for mobile touch or desktop buttons)
  const handleDpadUp = () => {
    setSelectedIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleDpadDown = () => {
    setSelectedIndex((prevIndex) =>
      Math.min(options.length - 1, prevIndex + 1)
    );
  };

  const handleEnter = () => {
    navigate(options[selectedIndex].path);
  };

  return (
    <>
      <div className="container">
        <h2 style={heading}>Purr !!!</h2>
        <br />
        <div style={menuItem}>
          <span
            style={{
              ...optionStyle,
              backgroundColor: selectedIndex === 0 ? "purple" : "#fff", // Background color change on focus
              color: selectedIndex === 0 ? "#fff" : "#000", // Color change on focus
            }}
          >
            1. Compliments
          </span>
          <GiButterflyFlower size="3rem" color="#e91e63" />
        </div>
        <div style={menuItem}>
          <SiWondersharefilmora size="3rem" color="8a2be2" />
          <span
            style={{
              ...optionStyle,
              backgroundColor: selectedIndex === 1 ? "purple" : "#fff", // Background color change on focus
              color: selectedIndex === 1 ? "#fff" : "#000", // Color change on focus
            }}
          >
            2. Movie Dates
          </span>
        </div>
        <div style={menuItem}>
          <span
            style={{
              ...optionStyle,
              backgroundColor: selectedIndex === 2 ? "purple" : "#fff", // Background color change on focus
              color: selectedIndex === 2 ? "#fff" : "#000", // Color change on focus
            }}
          >
            3. Recipes
          </span>
          <GiHotMeal size="3rem" color="#ff6347" />
        </div>
        <div style={menuItem}>
          <PiPaintBrushDuotone size="3rem" color="#008080" />
          <span
            style={{
              ...optionStyle,
              backgroundColor: selectedIndex === 3 ? "purple" : "#fff", // Background color change on focus
              color: selectedIndex === 3 ? "#fff" : "#000", // Color change on focus
            }}
          >
            4. Shinah's Gallery
          </span>
        </div>
        <div style={menuItem}>
          <span
            style={{
              ...optionStyle,
              backgroundColor: selectedIndex === 4 ? "purple" : "#fff", // Background color change on focus
              color: selectedIndex === 4 ? "#fff" : "#000", // Color change on focus
            }}
          >
            5. Some Box
          </span>
          <GiBoxingGloveSurprise size="3rem" color="#daa520" />
        </div>
        <br />
        <br />
        <div style={styles.gamepadContainer}>
          {/* D-Pad (Cross buttons) */}
          <button style={styles.dpadButton} onClick={handleDpadUp}>
            <FaAngleDoubleUp size={24} color="#000" />
          </button>
          <button style={styles.dpadButton} onClick={handleDpadDown}>
            <FaAngleDoubleDown size={24} color="#000" />
          </button>
          {/* Big Round Button */}
          <button
            style={{
              ...styles.dpadButton,
              backgroundColor: "purple",
              color: "#fff",
            }}
            onClick={handleEnter}
          >
            ●
          </button>
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
};
