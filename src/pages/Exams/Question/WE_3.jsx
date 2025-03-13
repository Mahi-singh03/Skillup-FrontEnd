
import React, { useState } from 'react';

const questions = [

    {
      question: "What is the default file extension for MS Word documents?",
      options: [".txt", ".docx", ".pdf", ".xlsx"],
      answer: ".docx"
    },
    {
      question: "Which feature allows you to revert to a previous version of a document?",
      options: ["Track Changes", "AutoSave", "Version History", "Compare"],
      answer: "Version History"
    },
    {
      question: "What does 'Ctrl + Z' do in MS Word?",
      options: ["Undo", "Redo", "Zoom", "Paste"],
      answer: "Undo"
    },
    {
      question: "Which tab contains the 'Table of Contents' tool?",
      options: ["Home", "Insert", "References", "View"],
      answer: "References"
    },
    {
      question: "What is the purpose of the 'Format Painter'?",
      options: ["Insert images", "Copy formatting", "Check grammar", "Create charts"],
      answer: "Copy formatting"
    },
    {
      question: "How do you insert a page break in MS Word?",
      options: ["Ctrl + Enter", "Shift + Space", "Alt + F4", "Ctrl + B"],
      answer: "Ctrl + Enter"
    },

    {
      question: "Which tool checks for plagiarism in Word?",
      options: ["Spell Check", "Editor", "Smart Lookup", "None of the above"],
      answer: "None of the above"
    },
    {
      question: "What does the 'Navigation Pane' help you do?",
      options: ["Insert shapes", "Search/reorganize document sections", "Change margins", "Print documents"],
      answer: "Search/reorganize document sections"
    },

    {
      question: "Which symbol starts every Excel formula?",
      options: ["=", "#", "$", "&"],
      answer: "="
    },
    {
      question: "What does the 'IF' function do?",
      options: ["Add numbers", "Check conditions", "Sort data", "Merge cells"],
      answer: "Check conditions"
    },
    
    {
      question: "Which chart is best for trends over time?",
      options: ["Pie Chart", "Line Chart", "Bar Chart", "Scatter Plot"],
      answer: "Line Chart"
    },
    {
      question: "What does 'Freeze Panes' do?",
      options: ["Lock rows/columns while scrolling", "Hide data", "Delete cells", "Format cells"],
      answer: "Lock rows/columns while scrolling"
    },
    {
      question: "Which function counts cells with numerical values?",
      options: ["COUNT", "COUNTA", "COUNTBLANK", "COUNTIF"],
      answer: "COUNT"
    },
    {
      question: "What does 'Text to Columns' do?",
      options: ["Split text into multiple columns", "Merge cells", "Change font size", "Add borders"],
      answer: "Split text into multiple columns"
    },
    {
      question: "Which key combination opens the 'Format Cells' dialog box?",
      options: ["Ctrl + 1", "Alt + F4", "Shift + F3", "Ctrl + F"],
      answer: "Ctrl + 1"
    },
    {
      question: "What is a 'PivotTable' used for?",
      options: ["Create slideshows", "Summarize large datasets", "Insert images", "Write macros"],
      answer: "Summarize large datasets"
    },

    {
      question: "What is the shortcut to start a slideshow from the current slide?",
      options: ["F5", "Shift + F5", "Ctrl + F5", "Alt + F5"],
      answer: "Shift + F5"
    },
    {
      question: "Which tool aligns objects perfectly on a slide?",
      options: ["Gridlines", "Ruler", "Guides", "All of the above"],
      answer: "All of the above"
    },
    
    {
      question: "What is the default slide layout for a new presentation?",
      options: ["Title Slide", "Blank", "Title and Content", "Section Header"],
      answer: "Title Slide"
    },
    {
      question: "Which option hides a slide during a presentation?",
      options: ["Delete Slide", "Hide Slide", "Skip Slide", "Collapse Slide"],
      answer: "Hide Slide"
    },

  
    {
      question: "What does 'HTTP' stand for?",
      options: ["HyperText Transfer Protocol", "High-Tech Text Process", "Home Terminal Transfer Program", "Hyperlink Text Type"],
      answer: "HyperText Transfer Protocol"
    },
    {
      question: "Which device connects a computer to the internet?",
      options: ["CPU", "Modem/Router", "Printer", "Monitor"],
      answer: "Modem/Router"
    },
    {
      question: "What is 'phishing'?",
      options: ["Fishing online", "A cyberattack to steal data", "A video game", "A type of hardware"],
      answer: "A cyberattack to steal data"
    },
    {
      question: "What is 'Bluetooth' commonly used for?",
      options: ["Long-distance internet", "Wireless short-range data transfer", "Cloud storage", "Gaming consoles"],
      answer: "Wireless short-range data transfer"
    },
    {
      question: "Which key deletes text to the right of the cursor?",
      options: ["Backspace", "Delete", "Enter", "Shift"],
      answer: "Delete"
    },
    {
      question: "What is 'Open Source' software?",
      options: ["Free to use/modify", "Requires a license key", "Only works on Windows", "Expires after trial"],
      answer: "Free to use/modify"
    },
    {
      question: "What does 'SSD' stand for?",
      options: ["Super Speed Disk", "Solid State Drive", "System Storage Device", "Secure Software Data"],
      answer: "Solid State Drive"
    },
    {
      question: "Which protocol is used for sending emails?",
      options: ["SMTP", "FTP", "HTTP", "TCP"],
      answer: "SMTP"
    },
    {
      question: "What is a 'cookie' in web browsing?",
      options: ["A snack", "A tracking file", "A virus", "A browser plugin"],
      answer: "A tracking file"
    },
    {
      question: "What does 'GUI' stand for?",
      options: ["Graphical User Interface", "General Utility Icon", "Global User Index", "Graphics Upgrade Interface"],
      answer: "Graphical User Interface"
    }
  ]
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