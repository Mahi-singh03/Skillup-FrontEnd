import React, { useState } from 'react';

const questions = [
  {
    question: "Which of the following language does the computer understand?",
    options: [
      "Computer understands only C Language",
      "Computer understands only Assembly Language",
      "Computer understands only Binary Language",
      "Computer understands only BASIC",
    ],
    answer: "Computer understands only Binary Language",
  },
  {
    question: "Which of the following is the brain of the computer?",
    options: [
      "Central Processing Unit",
      "Memory",
      "Arithmetic and Logic unit",
      "Control unit",
    ],
    answer: "Central Processing Unit",
  },
  {
    question: "Which of the following is the smallest unit of data in a computer?",
    options: ["Bit", "KB", "Nibble", "Byte"],
    answer: "Bit",
  },
  {
    question: "Which feature in MS Word allows you to create a pre-formatted document layout?",
    options: ["Templates", "Styles", "Themes", "Macros"],
    answer: "Templates",
  },
  {
    question: "In MS Word, which shortcut key is used to align text to the center?",
    options: ["Ctrl + L", "Ctrl + R", "Ctrl + E", "Ctrl + J"],
    answer: "Ctrl + E",
  },
  {
    question: "What is the default file format for a Word document in MS Word 2016?",
    options: [".txt", ".doc", ".docx", ".rtf"],
    answer: ".docx",
  },
  {
    question: "What is the function of the 'Format Painter' tool in MS Word?",
    options: [
      "Copies text from one document to another",
      "Copies formatting from one part of the document to another",
      "Creates a new style for text formatting",
      "Removes formatting from selected text",
    ],
    answer: "Copies formatting from one part of the document to another",
  },
  {
    question: "Which feature allows you to view two different parts of a document at the same time?",
    options: ["Split View", "Dual View", "Page Layout", "Outline Mode"],
    answer: "Split View",
  },
  {
    question: "What function is used to count numeric values in a range?",
    options: ["COUNTIF", "COUNTA", "COUNT", "SUM"],
    answer: "COUNT",
  },
  {
    question: "What is the default extension of an Excel workbook in MS Excel 2016?",
    options: [".xlsx", ".xls", ".xlsm", ".csv"],
    answer: ".xlsx",
  },
  {
    question: "What does the VLOOKUP function do in Excel?",
    options: [
      "Looks up a value in a vertical column and returns a corresponding value",
      "Searches for a value in a row and returns a corresponding value",
      "Sorts data alphabetically",
      "Merges two tables",
    ],
    answer: "Looks up a value in a vertical column and returns a corresponding value",
  },
];

const Question = ({ currentQuestion, onAnswerSubmit }) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  
  const handleOptionSelect = (option) => {
    setSelectedAnswer(option);
  };

  const handleSubmit = () => {
    if (selectedAnswer) {
      onAnswerSubmit(selectedAnswer);
      setSelectedAnswer('');
    }
  };

  if (!questions[currentQuestion]) {
    return <div>No question available</div>;
  }

  const question = questions[currentQuestion];

  return (
    <div className="question-container">
      <h3>{question.question}</h3>
      <div className="options-container">
        {question.options.map((option, index) => (
          <div key={index} className="option">
            <input
              type="radio"
              id={`option-${index}`}
              name="question-option"
              value={option}
              checked={selectedAnswer === option}
              onChange={() => handleOptionSelect(option)}
            />
            <label htmlFor={`option-${index}`}>{option}</label>
          </div>
        ))}
      </div>
      <button 
        className="submit-button"
        onClick={handleSubmit}
        disabled={!selectedAnswer}
      >
        Submit Answer
      </button>
    </div>
  );
};

export { questions };
export default Question;