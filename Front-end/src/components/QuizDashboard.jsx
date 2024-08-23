import React, { useState } from "react";
import Question from "./Question";

const QuizDashboard = ({ questions, onQuizComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [showAnswer, setShowAnswer] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleSelectAnswer = (answerIndex) => {
    if (!showAnswer) {
      const newAnswers = [...answers];
      newAnswers[currentQuestionIndex] = answerIndex;
      setAnswers(newAnswers);
      setShowAnswer(true);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowAnswer(false);
    } else {
      onQuizComplete();
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setShowAnswer(false);
    }
  };

  return (
    <div className="quiz-dashboard">
      <h1>Quiz Dashboard</h1>
      <Question
        question={currentQuestion.question}
        choices={currentQuestion.choices}
        selectedAnswer={answers[currentQuestionIndex]}
        correctAnswer={currentQuestion.correctAnswer}
        showAnswer={showAnswer}
        onSelectAnswer={handleSelectAnswer}
      />
      <div className="quiz-navigation">
        <button
          onClick={handlePrevQuestion}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </button>
        <button onClick={handleNextQuestion}>
          {currentQuestionIndex === questions.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default QuizDashboard;
