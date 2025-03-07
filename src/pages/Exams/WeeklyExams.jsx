
// WeeklyExam.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { questions as WE_1 } from "./Question/WE_1";
import { questions as WE_2 } from "./Question/WE_2";
import "./Question/Question.css";

const WeeklyExam = () => {
  const { examId } = useParams();
  const [state, setState] = useState({
    answers: {},
    score: null,
    timeLeft: 45 * 60,
    isSubmitted: false,
    error: ""
  });

  const questionsMap = { WE_1, WE_2 };
  const questions = questionsMap[examId] || [];
  
  useEffect(() => {
    if (!questions.length) return;
    
    const timer = setInterval(() => {
      if (state.timeLeft > 0 && !state.isSubmitted) {
        setState(prev => ({ ...prev, timeLeft: prev.timeLeft - 1 }));
      } else if (state.timeLeft === 0 && !state.isSubmitted) {
        handleSubmit();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [state.timeLeft, state.isSubmitted, questions.length]);

  const handleChange = (qIndex, option) => {
    setState(prev => ({
      ...prev,
      answers: { ...prev.answers, [qIndex]: option },
      error: ""
    }));
  };

  const handleSubmit = () => {
    if (Object.keys(state.answers).length < questions.length) {
      setState(prev => ({ ...prev, error: "Please answer all questions before submitting." }));
      return;
    }

    const totalScore = questions.reduce((acc, q, index) => 
      state.answers[index] === q.answer ? acc + 2 : acc, 0);

    setState(prev => ({
      ...prev,
      score: totalScore,
      isSubmitted: true
    }));

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60).toString().padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  const progress = Math.round((Object.keys(state.answers).length / questions.length) * 100);

  if (!questions.length) return <div className="exam-container">Invalid exam ID</div>;

  return (
    <div className="exam-container">
      <div className="exam-header">
        <h1 className="exam-title">Weely Exams</h1>
        <div className="timer">⏳ {formatTime(state.timeLeft)}</div>
      </div>

      {state.score !== null && (
        <div className="result-box">
          <h2>Exam Results</h2>
          <p>Your Score: {state.score} out of {questions.length * 2}</p>
          <p>Percentage: {Math.round((state.score / (questions.length * 2)) * 100)}%</p>
        </div>
      )}

      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
        <p className="progress-text">
          Progress: {progress}% ({Object.keys(state.answers).length}/{questions.length})
        </p>
      </div>

      <div className="question-grid">
        {questions.map((q, index) => {
          const isCorrect = state.isSubmitted && state.answers[index] === q.answer;
          const isWrong = state.isSubmitted && state.answers[index] !== q.answer;

          return (
            <div
              key={index}
              className={`question-card ${isCorrect ? "correct" : ""} ${isWrong ? "wrong" : ""}`}
            >
              <p className="question-text">{index + 1}. {q.question}</p>
              <div className="options-container">
                {q.options.map((option, i) => {
                  const isSelected = state.answers[index] === option;
                  const showCorrect = state.isSubmitted && option === q.answer;
                  const showWrong = state.isSubmitted && isSelected && !showCorrect;

                  return (
                    <label
                      key={i}
                      className={`option ${showCorrect ? "correct-answer" : ""} ${showWrong ? "wrong-answer" : ""}`}
                    >
                      <input
                        type="radio"
                        name={`question-${index}`}
                        value={option}
                        onChange={() => handleChange(index, option)}
                        checked={isSelected}
                        disabled={state.isSubmitted}
                      />
                      {option}
                    </label>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <button
        onClick={handleSubmit}
        className="submit-button"
        disabled={state.isSubmitted}
      >
        {state.isSubmitted ? "Submitted" : "Submit"}
      </button>

      {state.error && <div className="error-message">{state.error}</div>}
    </div>
  );
};

export default WeeklyExam;