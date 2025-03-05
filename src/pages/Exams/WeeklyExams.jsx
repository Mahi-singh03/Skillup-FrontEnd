import React, { useState, useEffect } from "react";
import { questions as WE_1 } from "./Question/WE_1.jsx";
import { questions as WE_2 } from "./Question/WE_2.jsx";
import "./Question/Question.css";

const WeeklyExam = ({ examId }) => {
  const questions = examId === "WE_1" ? WE_1 : WE_2;

  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [timeLeft, setTimeLeft] = useState(45 * 60);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");


  useEffect(() => {
    if (timeLeft > 0 && !isSubmitted) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !isSubmitted) {
      handleSubmit();
    }
  }, [timeLeft, isSubmitted]);

  useEffect(() => {
    if (isSubmitted) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [isSubmitted]);

  const handleChange = (qIndex, option) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [qIndex]: option,
    }));
    setError("");
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length < questions.length) {
      setError("Please answer all questions before submitting.");
      return;
    }

    let totalScore = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.answer) {
        totalScore += 2;
      }
    });

    setScore(totalScore);
    setIsSubmitted(true);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const progress = Math.round((Object.keys(answers).length / questions.length) * 100);

  return (
    <div className="exam-container">
      <div className="exam-header">
        <h1 className="exam-title">Weekly Exam</h1>
        <div className="timer">⏳ {formatTime(timeLeft)}</div>
      </div>

      {score !== null && (
        <div className="result-box">
          <h2>Exam Results</h2>
          <p>Your Score: {score} out of {questions.length * 2}</p>
          <p>Percentage: {Math.round((score / (questions.length * 2)) * 100)}%</p>
        </div>
      )}

      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        <p className="progress-text">
          Progress: {progress}% ({Object.keys(answers).length}/{questions.length} questions answered)
        </p>
      </div>

      <div className="question-grid">
        {questions.map((q, index) => {
          const isCorrect = isSubmitted && answers[index] === q.answer;
          const isWrong = isSubmitted && answers[index] !== q.answer;

          return (
            <div
              key={index}
              className={`question-card ${isCorrect ? "correct" : ""} ${isWrong ? "wrong" : ""}`}
            >
              <p className="question-text">{index + 1}. {q.question}</p>
              <div className="options-container">
                {q.options.map((option, i) => (
                  <label
                    key={i}
                    className={`option ${isSubmitted && option === q.answer ? "correct-answer" : ""} ${isSubmitted && answers[index] === option && option !== q.answer ? "wrong-answer" : ""}`}
                  >
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={option}
                      onChange={() => handleChange(index, option)}
                      checked={answers[index] === option}
                      disabled={isSubmitted}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <button onClick={handleSubmit} className="submit-button" disabled={isSubmitted}>
        {isSubmitted ? "Submitted" : "Submit"}
      </button>

      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default WeeklyExam;
