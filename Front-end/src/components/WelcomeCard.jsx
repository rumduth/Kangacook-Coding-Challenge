import React, { useState } from "react";
import "../css/WelcomeCard.css";

const WelcomeCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="welcome-card-container">
      <div
        className={`welcome-card ${isFlipped ? "flipped" : ""}`}
        onClick={handleFlip}
      >
        <div className="welcome-card-front">
          <h3>Welcome to My Webpage!</h3>
          <p>Click to see my introduction</p>
        </div>
        <div className="welcome-card-back">
          <p>
            I'm Thong Nguyen, a recent Computer Science graduate from the
            University of North Texas with Summa Cum Laude honors and expertise
            in C++, C, Java, and JavaScript. With a diverse background spanning
            Physics and Mathematics, I've applied my skills to various projects
            in web development, game creation, machine learning, and API design,
            and I'm now seeking Software Engineering opportunities to contribute
            my knowledge and passion for technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;
