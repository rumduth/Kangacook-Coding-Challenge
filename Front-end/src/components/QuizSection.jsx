import React, { useState } from "react";
import StyledButton from "./StyledButton";
import QuizDashboard from "./QuizDashboard";
import "../css/QuizSection.css";

const QuizSection = ({ questions, dispatch }) => {
  const [quizStarted, setQuizStarted] = useState(false);

  const startQuiz = () => {
    setQuizStarted(true);
    dispatch({ type: "startQuiz" });
  };

  return (
    <div className={`quiz-section ${quizStarted ? "quiz-active" : ""}`}>
      {!quizStarted ? (
        <div className="start-quiz-container">
          <h2>Ready to test your knowledge?</h2>
          <StyledButton onClick={startQuiz}>Start Quiz</StyledButton>
        </div>
      ) : (
        <QuizDashboard questions={questions} />
      )}
    </div>
  );
};

export default QuizSection;
