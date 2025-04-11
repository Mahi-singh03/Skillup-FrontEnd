import { useState } from 'react';


const getRandomQuestions = (questionsArray, num) => {
    const shuffled = [...questionsArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
};


const allQuestions = [
    {
      question: "What does CPU stand for?",
      options: ["Central Processing Unit", "Computer Personal Unit", "Control Processing Unit", "Core Programming Unit"],
      answer: "Central Processing Unit"
    },
    {
      question: "What is the full form of VGA?",
      options: ["Video Graphics Array", "Virtual Graphic Adapter", "Visual Grid Algorithm", "Variable Graphics Access"],
      answer: "Video Graphics Array"
    },
    {
      question: "What does USB stand for?",
      options: ["Universal Serial Bus", "Unique System Base", "Ultra Speed Buffer", "Unified Storage Block"],
      answer: "Universal Serial Bus"
    },
    {
      question: "What is the full form of ROM?",
      options: ["Read Only Memory", "Random Output Memory", "Run Once Module", "Reusable Operating Memory"],
      answer: "Read Only Memory"
    },
    {
      question: "What does LAN stand for?",
      options: ["Local Area Network", "Logical Access Node", "Large Application Network", "Linked Array Node"],
      answer: "Local Area Network"
    },
    {
      question: "What is the shortcut to copy text in MS Word?",
      options: ["Ctrl + C", "Ctrl + V", "Ctrl + X", "Ctrl + Z"],
      answer: "Ctrl + C"
    },
    {
      question: "Which shortcut pastes copied text in MS Word?",
      options: ["Ctrl + V", "Ctrl + C", "Ctrl + P", "Ctrl + S"],
      answer: "Ctrl + V"
    },
    {
      question: "What does Ctrl + Z do in MS Word?",
      options: ["Undo the last action", "Redo the last action", "Save the document", "Bold the text"],
      answer: "Undo the last action"
    },
    {
      question: "What is the shortcut to save a document in MS Word?",
      options: ["Ctrl + S", "Ctrl + P", "Ctrl + B", "Ctrl + I"],
      answer: "Ctrl + S"
    },
    {
      question: "What does Ctrl + X do in MS Word?",
      options: ["Cut selected text", "Copy selected text", "Paste text", "Print the document"],
      answer: "Cut selected text"
    },
    {
      question: "What does HTTP stand for?",
      options: ["HyperText Transfer Protocol", "High Tech Transport Protocol", "Hyper Terminal Text Process", "Hosted Text Translation Protocol"],
      answer: "HyperText Transfer Protocol"
    },
    {
      question: "What is the full form of URL?",
      options: ["Uniform Resource Locator", "Universal Reference Link", "Unique Resource Language", "Unified Retrieval Location"],
      answer: "Uniform Resource Locator"
    },
    {
      question: "What does WWW stand for?",
      options: ["World Wide Web", "Wide Web World", "Web Wide Workspace", "World Web Window"],
      answer: "World Wide Web"
    },
    {
      question: "What is the full form of ISP?",
      options: ["Internet Service Provider", "Internal System Protocol", "Integrated Service Platform", "Interactive Session Processor"],
      answer: "Internet Service Provider"
    },
    {
      question: "What does DNS stand for?",
      options: ["Domain Name System", "Digital Network Service", "Dynamic Node System", "Data Name Server"],
      answer: "Domain Name System"
    },
    {
      question: "In MS Word, what does Ctrl + B do?",
      options: ["Bold the selected text", "Italicize the selected text", "Underline the selected text", "Align text center"],
      answer: "Bold the selected text"
    },
    {
      question: "What is the shortcut to italicize text in MS Word?",
      options: ["Ctrl + I", "Ctrl + U", "Ctrl + L", "Ctrl + T"],
      answer: "Ctrl + I"
    },
    {
      question: "What does Ctrl + U do in MS Word?",
      options: ["Underline selected text", "Undo the last action", "Uppercase text", "Unselect text"],
      answer: "Underline selected text"
    },
    {
      question: "Which shortcut opens the 'Find' dialog box in MS Word?",
      options: ["Ctrl + F", "Ctrl + H", "Ctrl + G", "Ctrl + D"],
      answer: "Ctrl + F"
    },
    {
      question: "What is the shortcut to print a document in MS Word?",
      options: ["Ctrl + P", "Ctrl + S", "Ctrl + R", "Ctrl + Q"],
      answer: "Ctrl + P"
    },
    {
      question: "What does HTML stand for?",
      options: ["HyperText Markup Language", "High Text Machine Language", "Hyper Terminal Main Language", "Hosted Text Management Language"],
      answer: "HyperText Markup Language"
    },
    {
      question: "What is the full form of FTP?",
      options: ["File Transfer Protocol", "Fast Text Processor", "Flexible Terminal Protocol", "Formatted Text Platform"],
      answer: "File Transfer Protocol"
    },
    {
      question: "What does GUI stand for?",
      options: ["Graphical User Interface", "General Utility Interface", "Global User Interaction", "Guided Unit Interface"],
      answer: "Graphical User Interface"
    },
    {
      question: "What does BIOS stand for?",
      options: ["Basic Input Output System", "Binary Internal Operating System", "Base Integrated Output System", "Built-in Operating Software"],
      answer: "Basic Input Output System"
    },
    {
      question: "What is the full form of SSD?",
      options: ["Solid State Drive", "System Software Disk", "Standard Storage Device", "Secure System Drive"],
      answer: "Solid State Drive"
    },
    {
      question: "In internet browsing, what does 'Incognito Mode' do?",
      options: ["Prevents browsing history from being saved", "Increases browsing speed", "Blocks all ads", "Saves all passwords automatically"],
      answer: "Prevents browsing history from being saved"
    },
    {
      question: "What is the purpose of a web browser's 'Bookmarks' feature?",
      options: ["Save favorite websites", "Clear browsing history", "Block pop-up ads", "Change webpage themes"],
      answer: "Save favorite websites"
    },
    {
      question: "What does Ctrl + T do in most web browsers?",
      options: ["Open a new tab", "Close the browser", "Refresh the page", "Open bookmarks"],
      answer: "Open a new tab"
    },
    {
      question: "What is the shortcut to refresh a webpage in a browser?",
      options: ["F5", "Ctrl + N", "Ctrl + W", "Ctrl + O"],
      answer: "F5"
    },
    {
      question: "What does Ctrl + W do in a web browser?",
      options: ["Close the current tab", "Open a new window", "Go back a page", "Zoom in"],
      answer: "Close the current tab"
    },
    {
      question: "In MS Word, what does Ctrl + A do?",
      options: ["Select all content", "Align text left", "Add a hyperlink", "Apply superscript"],
      answer: "Select all content"
    },
    {
      question: "What is the shortcut to align text to the center in MS Word?",
      options: ["Ctrl + E", "Ctrl + L", "Ctrl + R", "Ctrl + J"],
      answer: "Ctrl + E"
    },
    {
      question: "What does Ctrl + R do in MS Word?",
      options: ["Align text right", "Replace text", "Redo the last action", "Rotate text"],
      answer: "Align text right"
    },
    {
      question: "What is the full form of HDD?",
      options: ["Hard Disk Drive", "High Definition Data", "Hybrid Digital Disk", "Hosted Data Drive"],
      answer: "Hard Disk Drive"
    },
    {
      question: "What does VPN stand for?",
      options: ["Virtual Private Network", "Variable Public Node", "Visual Processing Network", "Vital Program Node"],
      answer: "Virtual Private Network"
    },
    {
      question: "What does Ctrl + N do in MS Word?",
      options: ["Create a new document", "Open a new tab", "Close the document", "Insert a footnote"],
      answer: "Create a new document"
    },
    {
      question: "What is the shortcut to open the 'Replace' dialog box in MS Word?",
      options: ["Ctrl + H", "Ctrl + F", "Ctrl + G", "Ctrl + R"],
      answer: "Ctrl + H"
    },
    {
      question: "What does Ctrl + Shift + > do in MS Word?",
      options: ["Increase font size", "Decrease font size", "Change font style", "Add a bullet point"],
      answer: "Increase font size"
    },
    {
      question: "What is the full form of PDF?",
      options: ["Portable Document Format", "Public Data File", "Processed Document Folder", "Permanent Data Format"],
      answer: "Portable Document Format"
    },
    {
      question: "What does Ctrl + Tab do in a web browser?",
      options: ["Switch to the next tab", "Open a new tab", "Close the current tab", "Go to the address bar"],
      answer: "Switch to the next tab"
    },
    {
      question: "In internet browsing, what is a 'cookie'?",
      options: ["A small file storing user data", "A type of virus", "A webpage advertisement", "A browser extension"],
      answer: "A small file storing user data"
    },
    {
      question: "What does Ctrl + Shift + T do in most web browsers?",
      options: ["Reopen the last closed tab", "Open a new tab", "Close all tabs", "Toggle full-screen mode"],
      answer: "Reopen the last closed tab"
    },
    {
      question: "What is the full form of OS?",
      options: ["Operating System", "Output Service", "Optimized Software", "Open Source"],
      answer: "Operating System"
    },
    {
      question: "What does Ctrl + L do in a web browser?",
      options: ["Highlight the address bar", "Open a new window", "Go back a page", "Clear cache"],
      answer: "Highlight the address bar"
    },
    {
      question: "In MS Word, what does Ctrl + J do?",
      options: ["Justify text alignment", "Insert a table", "Change line spacing", "Add a page break"],
      answer: "Justify text alignment"
    },
    {
      question: "What is the full form of Wi-Fi?",
      options: ["Wireless Fidelity", "Wired Fiber", "Web Frequency", "Wide Field"],
      answer: "Wireless Fidelity"
    },
    {
      question: "What does Ctrl + Shift + N do in a web browser?",
      options: ["Open a new incognito window", "Open a new tab", "Close the browser", "Clear browsing data"],
      answer: "Open a new incognito window"
    },
    {
      question: "What is the shortcut to insert a hyperlink in MS Word?",
      options: ["Ctrl + K", "Ctrl + M", "Ctrl + J", "Ctrl + H"],
      answer: "Ctrl + K"
    },
    {
      question: "What does Ctrl + D do in most web browsers?",
      options: ["Bookmark the current page", "Download a file", "Open developer tools", "Delete browsing history"],
      answer: "Bookmark the current page"
    },
    {
      question: "What is the full form of DPI?",
      options: ["Dots Per Inch", "Data Processing Interface", "Digital Print Index", "Dynamic Pixel Input"],
      answer: "Dots Per Inch"
    }
  ];

  
// Select 30 random questions - this will be the only exported questions array
const questions = getRandomQuestions(allQuestions, 30);

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

// Only export the 30 random questions and the component
export { questions };
export default Question;    