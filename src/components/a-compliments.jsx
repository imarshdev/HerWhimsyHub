import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart, FaRedo } from "react-icons/fa";
import Confetti from "react-confetti";
import "./css/Compliments.css"; // Import custom CSS

export default function Compliments() {
  const [compliment, setCompliment] = useState("");
  const [showCompliment, setShowCompliment] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const compliments = [
    "You light up the room with your presence.",
    "Your smile is contagious and brightens up my day.",
    "I love the way you always know how to make me laugh.",
    "You have a heart of gold and are an amazing partner.",
    "Your kindness and empathy inspire me to be a better person.",
    "You are my rock, my best friend, and my soulmate.",
    "I am so grateful to have you in my life.",
    "You make every day brighter and more meaningful.",
    "Your intelligence and wit fascinate me.",
    "You are beautiful inside and out.",
  ];

  const handleButtonClick = () => {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    setCompliment(compliments[randomIndex]);
    setShowCompliment(true);
    setShowConfetti(true);

    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  };

  const handleSave = () => {
    if (!favorites.includes(compliment)) {
      setFavorites([...favorites, compliment]);
    }
  };

  return (
    <div className="container">
      <div className="compliments-container">
        {showConfetti && (
          <Confetti
            numberOfPieces={200}
            gravity={0.2}
            wind={0.01}
            recycle={false}
          />
        )}
        <div className="compliments-box">
          <h1 className="compliments-title">✨ Your Compliment ✨</h1>

          <div className="compliment-wrapper">
            {/* New fixed-height wrapper */}
            <AnimatePresence mode="wait">
              {showCompliment && (
                <motion.p
                  key={compliment}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }} // Move up instead of down
                  transition={{ duration: 0.5 }}
                  className="compliments-text"
                >
                  {compliment}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <div className="compliments-buttons">
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              onClick={handleButtonClick}
              className="compliments-btn new-btn"
            >
              <FaRedo /> New Compliment
            </motion.button>

            {showCompliment && (
              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                onClick={handleSave}
                className="compliments-btn save-btn"
              >
                <FaHeart /> Save
              </motion.button>
            )}
          </div>
        </div>

        {favorites.length > 0 && (
          <div className="favorites-box">
            <h2 className="favorites-title">💖 Saved Compliments</h2>
            <ul className="favorites-list">
              {favorites.map((fav, index) => (
                <li key={index} className="favorites-item">
                  {fav}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
