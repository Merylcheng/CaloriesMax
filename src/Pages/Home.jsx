import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Home.css";
import "../App.css";

function Home() {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setButtonClicked(true);

    // Reset the button state after 300ms
    setTimeout(() => {
      setButtonClicked(false);
    }, 300);
  };

  return (
    <div className="home-container">
      <div className="welcome-message">
        <h1>Welcome to Calories Max!</h1>
        <p>
          Keeping track of your calories intake and too lazy to plan a meal?
        </p>
        {/* <p>
          Let us do all that for you & just focus on getting that tummy YUMMY!
        </p> */}
        <Link to="/RecipeList">
          <button
            className={`start-button ${buttonClicked ? "move-down" : ""}`}
            onClick={handleButtonClick}
          >
            Let's Get Started!
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
