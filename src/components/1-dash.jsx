import meal from "../assets/mealplate.svg";
import bear from "../assets/bear.svg";
import movie from "../assets/movie.svg";
import flower from "../assets/flower.svg";
import paint from "../assets/paint.svg";
import present from "../assets/present.svg";
import { useEffect } from "react";
export default function Dash() {
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
  };
  return (
    <>
      <div className="container">
        <img src={bear} style={{ width: "20%" }} />
        <div style={menuItem}>
          <span style={optionStyle}>1. Compliments</span>
          <img src={flower} style={{ width: "20%" }} />
        </div>
        <div style={menuItem}>
          <img src={movie} style={{ width: "20%" }} />
          <span style={optionStyle}>2. Movie Dates</span>
        </div>
        <div style={menuItem}>
          <span style={optionStyle}>3. Recipes</span>
          <img src={meal} style={{ width: "20%" }} />
        </div>
        <div style={menuItem}>
          <img src={paint} style={{ height: "4rem" }} />
          <span style={optionStyle}>4. Shinah's Gallery</span>
        </div>
        <div style={menuItem}>
          <span style={optionStyle}>5. Some Box</span>
          <img src={present} style={{ height: "4rem" }} />
        </div>
      </div>
    </>
  );
}
