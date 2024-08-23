import React from "react";
import AnswerChoice from "./AnswerChoice";

const Question = ({
  question,
  choices,
  selectedAnswer,
  correctAnswer,
  showAnswer,
  onSelectAnswer,
}) => (
  <div
    style={{
      width: "100%",
      maxWidth: "32rem",
      margin: "0 auto",
      padding: "16px",
      border: "1px solid #e5e7eb",
      borderRadius: "8px",
    }}
  >
    <h2
      style={{ marginBottom: "16px", fontSize: "1.25rem", fontWeight: "bold" }}
    >
      {question}
    </h2>
    <div>
      {choices.map((choice, index) => (
        <AnswerChoice
          key={index}
          choice={choice}
          isSelected={selectedAnswer === index}
          isCorrect={correctAnswer === index}
          showAnswer={showAnswer}
          onSelect={() => onSelectAnswer(index)}
        />
      ))}
    </div>
  </div>
);

export default Question;
