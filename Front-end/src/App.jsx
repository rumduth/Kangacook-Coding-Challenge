import React, { useReducer, useState } from "react";
import Intro from "./components/Intro";
import FriendIntro from "./components/FriendIntro";
import WelcomeCard from "./components/WelcomeCard";
import InputCard from "./components/InputCard";
import QuizDashboard from "./components/QuizDashboard";
import StyledButton from "./components/StyledButton";
import questions from "./js/quizQuestions";
import { reducer, initialState } from "./js/reducer";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { name, email, phoneNumber, isReady, quizStarted, quizCompleted } =
    state;
  const [showQuizSection, setShowQuizSection] = useState(false);

  const handleMoreAboutMe = () => {
    dispatch({ type: "isReady" });
    setShowQuizSection(true);
  };

  const startQuiz = () => {
    dispatch({ type: "startQuiz" });
  };

  const handleQuizComplete = () => {
    dispatch({ type: "quizCompleted" });
    setTimeout(() => {
      setShowQuizSection(false);
    }, 3000);
  };

  return (
    <div className="app-container">
      <div className={`main-content ${showQuizSection ? "fade-out" : ""}`}>
        <Intro
          name="Thong Nguyen"
          id="940-629-5520"
          dob="06/25/1998"
          photo="./assets/photo.jpeg"
          address="Dallas, Texas"
        />
        {!isReady && (
          <InputCard
            name={name}
            phoneNumber={phoneNumber}
            email={email}
            dispatch={dispatch}
          />
        )}
        {isReady && (quizCompleted || !showQuizSection) && (
          <>
            <FriendIntro name={name} phone={phoneNumber} email={email} />
            <WelcomeCard />
          </>
        )}
        {isReady && !quizCompleted && !showQuizSection && (
          <div className="button-container">
            <StyledButton onClick={handleMoreAboutMe}>
              More About Me
            </StyledButton>
          </div>
        )}
      </div>
      {isReady && showQuizSection && (
        <div className="quiz-section-wrapper">
          <div className={`quiz-section ${showQuizSection ? "fade-in" : ""}`}>
            {!quizStarted && (
              <div className="start-quiz-container">
                {!quizCompleted && (
                  <>
                    <h2>I'm excited to let you know about myself</h2>
                    <StyledButton onClick={startQuiz}>
                      Let's dive in
                    </StyledButton>
                  </>
                )}
              </div>
            )}
            {quizStarted && !quizCompleted && (
              <QuizDashboard
                questions={questions}
                onQuizComplete={handleQuizComplete}
              />
            )}
            {quizCompleted && (
              <div className="quiz-completed">
                <h2>Congratulations!</h2>
                <p>That's all about me</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
