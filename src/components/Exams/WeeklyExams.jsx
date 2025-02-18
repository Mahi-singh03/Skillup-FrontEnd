import React, { useState, useEffect } from "react";
import { questions } from "./Question/Question.jsx";
import "./Question/Question.css"

const WeeklyExam = () => {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30 * 60);
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
      if (answers[index] === q.correctAnswer) {
        totalScore += 2;
      }
    });
    setScore(totalScore);
    setIsSubmitted(true);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const progress = Math.round((Object.keys(answers).length / questions.length) * 100);

  return (
    <div className="exam-container">
      <div className="exam-header">
        <h1 className="exam-title">Weekly Exam</h1>
        <div className="timer">⏳ {formatTime(timeLeft)}</div>
      </div>

      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        <p className="progress-text">Progress: {progress}% ({Object.keys(answers).length}/{questions.length} questions answered)</p>
      </div>

     

      <div className="question-grid">
        {questions.map((q, index) => (
          <div key={index} className="question-card">
            <p className="question-text">{index + 1}. {q.question}</p>
            <div className="options-container">
              {q.options.map((option, i) => (
                <label key={i} className="option">
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
        ))}
      </div>

      <button onClick={handleSubmit} className="submit-button" disabled={isSubmitted}>
        {isSubmitted ? 'Submitted' : 'Submit'}
      </button>
      {error && <div className="error-message">{error}</div>}

      {score !== null && (
        <div className="result-box">
          <h2>Exam Results</h2>
          <p>Your Score: {score} out of {questions.length * 2}</p>
          <p>Percentage: {Math.round((score / (questions.length * 2)) * 100)}%</p>
        </div>
      )}
    </div>
  );
};

export default WeeklyExam;
