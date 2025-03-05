import React, { useState } from 'react';

const questions = [
    {
      question: "Which of the following language does the computer understand?",
      options: [
        "Computer understands only C Language",
        "Computer understands only Assembly Language",
        "Computer understands only Binary Language",
        "Computer understands only BASIC"
      ],
      answer: "Computer understands only Binary Language"
    },
    {
      question: "Which of the following is the brain of the computer?",
      options: [
        "Central Processing Unit",
        "Memory",
        "Arithmetic and Logic unit",
        "Control unit"
      ],
      answer: "Central Processing Unit"
    },
    {
      question: "Which of the following is the smallest unit of data in a computer?",
      options: [
        "Bit",
        "KB",
        "Nibble",
        "Byte"
      ],
      answer: "Bit"
    },
    {
      question: "Which feature in MS Word allows you to create a pre-formatted document layout?",
      options: [
        "Templates",
        "Styles",
        "Themes",
        "Macros"
      ],
      answer: "Templates"
    },
    {
      question: "In MS Word, which shortcut key is used to align text to the center?",
      options: [
        "Ctrl + L",
        "Ctrl + R",
        "Ctrl + E",
        "Ctrl + J"
      ],
      answer: "Ctrl + E"
    },
    {
      question: "What is the default file format for a Word document in MS Word 2016?",
      options: [
        ".txt",
        ".doc",
        ".docx",
        ".rtf"
      ],
      answer: ".docx"
    },
    {
      question: "What is the function of the 'Format Painter' tool in MS Word?",
      options: [
        "Copies text from one document to another",
        "Copies formatting from one part of the document to another",
        "Creates a new style for text formatting",
        "Removes formatting from selected text"
      ],
      answer: "Copies formatting from one part of the document to another"
    },
    {
      question: "Which feature allows you to view two different parts of a document at the same time?",
      options: [
        "Split View",
        "Dual View",
        "Page Layout",
        "Outline Mode"
      ],
      answer: "Split View"
    },
    {
      question: "What function is used to count numeric values in a range?",
      options: [
        "COUNTIF",
        "COUNTA",
        "COUNT",
        "SUM"
      ],
      answer: "COUNT"
    },
    {
      question: "What is the default extension of an Excel workbook in MS Excel 2016?",
      options: [
        ".xlsx",
        ".xls",
        ".xlsm",
        ".csv"
      ],
      answer: ".xlsx"
    },
    {
      question: "What does the VLOOKUP function do in Excel?",
      options: [
        "Looks up a value in a vertical column and returns a corresponding value",
        "Searches for a value in a row and returns a corresponding value",
        "Sorts data alphabetically",
        "Merges two tables"
      ],
      answer: "Looks up a value in a vertical column and returns a corresponding value"
    },
    {
      question: "In Excel, which of the following is not a valid chart type?",
      options: [
        "Line Chart",
        "Pie Chart",
        "Diagram Chart",
        "Column Chart"
      ],
      answer: "Diagram Chart"
    },
    {
      question: "Which function returns the highest value from a range of numbers?",
      options: [
        "MIN",
        "MAX",
        "AVERAGE",
        "SUM"
      ],
      answer: "MAX"
    },
    {
      question: "What is the default view in PowerPoint when you open a new presentation?",
      options: [
        "Slide Sorter View",
        "Normal View",
        "Outline View",
        "Reading View"
      ],
      answer: "Normal View"
    },
    {
      question: "Which feature allows you to apply motion effects to objects on a slide?",
      options: [
        "Transitions",
        "Animations",
        "Slide Master",
        "Themes"
      ],
      answer: "Animations"
    },
    {
      question: "In PowerPoint, which shortcut key is used to start the slideshow from the beginning?",
      options: [
        "F5",
        "Shift + F5",
        "Ctrl + S",
        "Alt + Enter"
      ],
      answer: "F5"
    },
    {
      question: "The speed of a processor is measured in:",
      options: [
        "Bytes",
        "Hertz (Hz)",
        "Bits",
        "Pixels"
      ],
      answer: "Hertz (Hz)"
    },
    {
      question: "Which part of the computer is responsible for executing instructions of a program?",
      options: [
        "RAM",
        "CPU",
        "Hard Drive",
        "Cache"
      ],
      answer: "CPU"
    },
    {
      question: "What does IP stand for in networking?",
      options: [
        "Internet Process",
        "Internet Protocol",
        "Internal Program",
        "Internet Provider"
      ],
      answer: "Internet Protocol"
    },
    {
      question: "Which device is used to connect multiple networks together?",
      options: [
        "Switch",
        "Router",
        "Hub",
        "Modem"
      ],
      answer: "Router"
    },
    {
        question: "Which of the following is a private IP address?",
        options: [
            "192.168.1.1",
            "8.8.8.8",
            "172.217.0.1",
            "208.67.222.222"
        ],
        answer: "192.168.1.1"
    },
    {
        question: "What does DNS stand for? ",
        options: [
            "Domain Name System",
            "Data Network Service",
            "Digital Name Server",
            "Dynamic Network System"
        ],
        answer: "Domain Name System"
    }
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
  

export default questions;