import React from "react";

const AnswerChoice = ({
  choice,
  isSelected,
  isCorrect,
  showAnswer,
  onSelect,
}) => {
  let buttonStyle = {
    width: "100%",
    textAlign: "left",
    marginBottom: "8px",
    padding: "8px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    backgroundColor: isSelected ? "#3b82f6" : "#f3f4f6",
    color: isSelected ? "white" : "black",
  };

  if (showAnswer) {
    buttonStyle.backgroundColor = isCorrect ? "#10b981" : "#ef4444";
    buttonStyle.color = "white";
  }

  return (
    <button style={buttonStyle} onClick={onSelect} disabled={showAnswer}>
      {choice}
      {showAnswer && (isCorrect ? " ✓" : " ✗")}
    </button>
  );
};

export default AnswerChoice;
