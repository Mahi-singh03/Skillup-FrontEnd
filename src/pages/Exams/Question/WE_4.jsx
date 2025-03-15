const questions = [
    {
      question: "What does 'URL' stand for?",
      options: ["Uniform Resource Locator", "Universal Remote Link", "User Request Language", "Unified Response Layer"],
      answer: "Uniform Resource Locator"
    },
    {
      question: "Which key is used to capitalize letters?",
      options: ["Ctrl", "Alt", "Shift", "Tab"],
      answer: "Shift"
    },
    {
      question: "What is the main purpose of a computer mouse?",
      options: ["Print documents", "Input device", "Store files", "Connect to internet"],
      answer: "Input device"
    },
    {
      question: "Which symbol is generally used for email addresses?",
      options: ["#", "@", "&", "%"],
      answer: "@"
    },
    {
      question: "What does 'PDF' stand for?",
      options: ["Printed Document File", "Portable Document Format", "Public Data Form", "Personal Digital Folder"],
      answer: "Portable Document Format"
    },
    {
      question: "Which button is used to close a window?",
      options: ["Minimize", "Maximize", "Close (X)", "Restore"],
      answer: "Close (X)"
    },
    {
      question: "What is the function of the 'Caps Lock' key?",
      options: ["Delete text", "Type in uppercase", "Save document", "Open menu"],
      answer: "Type in uppercase"
    },
    {
      question: "Which program is used for web browsing?",
      options: ["Excel", "Photoshop", "Chrome", "PowerPoint"],
      answer: "Chrome"
    },
    {
      question: "What does 'CC' mean in emails?",
      options: ["Carbon Copy", "Computer Code", "Creative Commons", "Copy Content"],
      answer: "Carbon Copy"
    },
    {
      question: "Which folder stores deleted files?",
      options: ["Documents", "Downloads", "Recycle Bin", "Desktop"],
      answer: "Recycle Bin"
    },
    {
      question: "What is the shortcut for pasting?",
      options: ["Ctrl+V", "Ctrl+C", "Ctrl+X", "Ctrl+Z"],
      answer: "Ctrl+V"
    },
    {
      question: "Which device connects to WiFi?",
      options: ["Keyboard", "Monitor", "Router", "Printer"],
      answer: "Router"
    },
    {
      question: "What does 'USB' stand for?",
      options: ["Universal Serial Bus", "United Software Base", "User System Backup", "Ultra Speed Buffer"],
      answer: "Universal Serial Bus"
    },
    {
      question: "Which program creates text documents?",
      options: ["Excel", "Notepad", "Photoshop", "PowerPoint"],
      answer: "Notepad"
    },
    {
      question: "What is the main computer storage?",
      options: ["RAM", "CPU", "Hard Drive", "Monitor"],
      answer: "Hard Drive"
    },
    {
      question: "Which key refreshes a webpage?",
      options: ["F1", "F5", "F10", "F12"],
      answer: "F5"
    },
    {
      question: "What is the function of a printer?",
      options: ["Display images", "Create physical copies", "Play sound", "Scan documents"],
      answer: "Create physical copies"
    },
    {
      question: "Which tool is used for calculations?",
      options: ["Calculator", "Paint", "WordPad", "Media Player"],
      answer: "Calculator"
    },
    {
      question: "What does 'www' stand for?",
      options: ["World Wide Web", "World Wireless Web", "Web World Wide", "Wide World Web"],
      answer: "World Wide Web"
    },
    {
      question: "Which icon represents a saved file?",
      options: ["Floppy disk", "Folder", "Trash can", "Magnifying glass"],
      answer: "Floppy disk"
    },
    {
      question: "What is the main purpose of antivirus software?",
      options: ["Speed up computer", "Protect from viruses", "Create backups", "Edit photos"],
      answer: "Protect from viruses"
    },
    {
      question: "Which device displays output?",
      options: ["Monitor", "Keyboard", "Printer", "Scanner"],
      answer: "Monitor"
    },
    {
      question: "What does 'CPU' stand for?",
      options: ["Central Processing Unit", "Computer Power Unit", "Core Processing Utility", "Central Performance Unit"],
      answer: "Central Processing Unit"
    },
    {
      question: "Which key creates a new paragraph?",
      options: ["Tab", "Enter", "Spacebar", "Backspace"],
      answer: "Enter"
    },
    {
      question: "What is the function of the 'Escape' (Esc) key?",
      options: ["Start program", "Cancel operation", "Save file", "Open menu"],
      answer: "Cancel operation"
    },
    {
      question: "Which storage has more capacity?",
      options: ["CD", "DVD", "USB Drive", "Blu-ray"],
      answer: "USB Drive"
    },
    {
      question: "What does 'MP3' refer to?",
      options: ["Image format", "Audio format", "Document type", "Video format"],
      answer: "Audio format"
    },
    {
      question: "Which tool helps organize files?",
      options: ["Folders", "Recycle Bin", "Taskbar", "Desktop"],
      answer: "Folders"
    },
    {
      question: "What is the first step in troubleshooting?",
      options: ["Replace hardware", "Restart computer", "Call technician", "Format drive"],
      answer: "Restart computer"
    },
    {
      question: "Which device is wireless?",
      options: ["Wired mouse", "Bluetooth headphones", "USB printer", "HDMI cable"],
      answer: "Bluetooth headphones"
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