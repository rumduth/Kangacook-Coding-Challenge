import React, { useState } from "react";
import "../css/InputCard.css";

const InputCard = ({ name, email, phoneNumber, dispatch }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="input-card-container">
      <div className={`input-card ${isFlipped ? "flipped" : ""}`}>
        <div className="input-card-front" onClick={handleFlip}>
          <h3>Your Information</h3>
          <p>Please click to let me know who you are</p>
        </div>
        <div className="input-card-back">
          <h3>Enter Your Details</h3>
          <div className="input-group">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) =>
                dispatch({ type: "name", payload: e.target.value })
              }
            />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              id="phone"
              type="tel"
              value={phoneNumber}
              onChange={(e) =>
                dispatch({ type: "phone", payload: e.target.value })
              }
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) =>
                dispatch({ type: "email", payload: e.target.value })
              }
            />
          </div>
          {name && email && phoneNumber && (
            <button onClick={() => dispatch({ type: "isReady" })}>
              Submit Your Information
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default InputCard;
