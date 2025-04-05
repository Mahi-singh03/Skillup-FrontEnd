import { useState } from 'react';


const getRandomQuestions = (questionsArray, num) => {
    const shuffled = [...questionsArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
};

const allQuestions = [
        // Basic Computer Questions (1-15)
        {
          question: "What is the main purpose of a computer's power button?",
          options: ["Turn on/off the computer", "Control volume", "Connect to internet", "Print documents"],
          answer: "Turn on/off the computer"
        },
        {
          question: "Which device is considered the 'brain' of the computer?",
          options: ["Monitor", "CPU", "Keyboard", "Mouse"],
          answer: "CPU"
        },
        {
          question: "What does RAM stand for?",
          options: ["Random Access Memory", "Read Always Memory", "Run Application Mode", "Remote Access Module"],
          answer: "Random Access Memory"
        },
        {
          question: "Which of these is an input device?",
          options: ["Printer", "Monitor", "Keyboard", "Speaker"],
          answer: "Keyboard"
        },
        {
          question: "What is the purpose of an operating system?",
          options: ["Manage hardware and software", "Play games", "Store files", "Connect to Wi-Fi"],
          answer: "Manage hardware and software"
        },
        {
          question: "What does CPU stand for?",
          options: ["Central Processing Unit", "Computer Power Unit", "Control Program Utility", "Central Program User"],
          answer: "Central Processing Unit"
        },
        {
          question: "Which of these is a storage device?",
          options: ["Hard Disk", "Mouse", "Monitor", "RAM"],
          answer: "Hard Disk"
        },
        {
          question: "What is the function of a computer monitor?",
          options: ["Display output", "Store data", "Process information", "Input data"],
          answer: "Display output"
        },
        {
          question: "What does USB stand for?",
          options: ["Universal Serial Bus", "United System Base", "User Software Backup", "Ultra Speed Buffer"],
          answer: "Universal Serial Bus"
        },
        {
          question: "Which key is used to start a new line in a text editor?",
          options: ["Enter", "Shift", "Ctrl", "Alt"],
          answer: "Enter"
        },
        {
          question: "What is the purpose of a computer's motherboard?",
          options: ["Connect all components", "Store files", "Display graphics", "Run software"],
          answer: "Connect all components"
        },
        {
          question: "Which of these is an output device?",
          options: ["Scanner", "Printer", "Keyboard", "Mouse"],
          answer: "Printer"
        },
        {
          question: "What does ROM stand for?",
          options: ["Read-Only Memory", "Random Output Memory", "Run-Once Module", "Read Operating Mode"],
          answer: "Read-Only Memory"
        },
        {
          question: "What is a byte made up of?",
          options: ["8 bits", "4 bits", "16 bits", "2 bits"],
          answer: "8 bits"
        },
        {
          question: "Which part of the computer performs arithmetic operations?",
          options: ["ALU", "RAM", "Monitor", "Keyboard"],
          answer: "ALU"
        },
      
        // Basic Full Forms and Terms (16-30)
        {
          question: "What does HTTP stand for?",
          options: ["HyperText Transfer Protocol", "High Tech Transfer Process", "Hyper Terminal Test Program", "Home Text Transmission Protocol"],
          answer: "HyperText Transfer Protocol"
        },
        {
          question: "What does LAN stand for?",
          options: ["Local Area Network", "Large Access Node", "Limited Application Network", "Long Area Node"],
          answer: "Local Area Network"
        },
        {
          question: "What is the full form of GUI?",
          options: ["Graphical User Interface", "General Utility Input", "Global User Interaction", "Graphic Utility Index"],
          answer: "Graphical User Interface"
        },
        {
          question: "What does BIOS stand for?",
          options: ["Basic Input/Output System", "Binary Input/Output Software", "Basic Internet Operating System", "Built-In Output Standard"],
          answer: "Basic Input/Output System"
        },
        {
          question: "What is the full form of WWW?",
          options: ["World Wide Web", "World Web Window", "Wide Web Work", "Web World Wide"],
          answer: "World Wide Web"
        },
        {
          question: "What does URL stand for?",
          options: ["Uniform Resource Locator", "Universal Resource Link", "User Reference Location", "Unique Resource Language"],
          answer: "Uniform Resource Locator"
        },
        {
          question: "What is a 'bit' short for?",
          options: ["Binary Digit", "Basic Input Token", "Byte Information Term", "Binary Integer"],
          answer: "Binary Digit"
        },
        {
          question: "What does SSD stand for?",
          options: ["Solid State Drive", "Simple Storage Device", "System Software Disk", "Standard Speed Drive"],
          answer: "Solid State Drive"
        },
        {
          question: "What does IP stand for in 'IP Address'?",
          options: ["Internet Protocol", "Internal Process", "Input Port", "Integrated Program"],
          answer: "Internet Protocol"
        },
        {
          question: "What is the full form of PDF?",
          options: ["Portable Document Format", "Printable Data File", "Personal Document Folder", "Public Data Format"],
          answer: "Portable Document Format"
        },
        {
          question: "What does GPU stand for?",
          options: ["Graphics Processing Unit", "General Purpose Utility", "Global Processing Unit", "Graphic Power Unit"],
          answer: "Graphics Processing Unit"
        },
        {
          question: "What does VPN stand for?",
          options: ["Virtual Private Network", "Very Powerful Node", "Virtual Public Network", "Visual Processing Node"],
          answer: "Virtual Private Network"
        },
        {
          question: "What is the full form of HTML?",
          options: ["HyperText Markup Language", "High Tech Media Language", "Hyper Terminal Main Language", "Home Text Management Logic"],
          answer: "HyperText Markup Language"
        },
        {
          question: "What does HDD stand for?",
          options: ["Hard Disk Drive", "High Data Device", "Hyper Disk Drive", "Hardware Data Disk"],
          answer: "Hard Disk Drive"
        },
        {
          question: "What does OS stand for?",
          options: ["Operating System", "Output Software", "Online Service", "Open Source"],
          answer: "Operating System"
        },
      
        // MS Word Questions (31-45)
        {
          question: "Which shortcut key is used to save a document in MS Word?",
          options: ["Ctrl + S", "Ctrl + P", "Ctrl + C", "Ctrl + X"],
          answer: "Ctrl + S"
        },
        {
          question: "What is the default file extension for an MS Word document?",
          options: [".docx", ".txt", ".pdf", ".xls"],
          answer: ".docx"
        },
        {
          question: "Which tab in MS Word contains the 'Font Size' option?",
          options: ["Home", "Insert", "View", "Review"],
          answer: "Home"
        },
        {
          question: "What does Ctrl + B do in MS Word?",
          options: ["Bold text", "Italicize text", "Underline text", "Copy text"],
          answer: "Bold text"
        },
        {
          question: "Which feature in MS Word checks spelling and grammar?",
          options: ["Spelling & Grammar", "Word Count", "Find and Replace", "Track Changes"],
          answer: "Spelling & Grammar"
        },
        {
          question: "What is the shortcut to undo an action in MS Word?",
          options: ["Ctrl + Z", "Ctrl + Y", "Ctrl + U", "Ctrl + R"],
          answer: "Ctrl + Z"
        },
        {
          question: "Which option aligns text to the center in MS Word?",
          options: ["Center", "Left", "Right", "Justify"],
          answer: "Center"
        },
        {
          question: "What does Ctrl + C do in MS Word?",
          options: ["Copy text", "Cut text", "Paste text", "Print document"],
          answer: "Copy text"
        },
        {
          question: "Which tab allows you to insert a table in MS Word?",
          options: ["Insert", "Home", "Design", "Page Layout"],
          answer: "Insert"
        },
        {
          question: "What is the purpose of the 'Clipboard' in MS Word?",
          options: ["Store copied items", "Save documents", "Format text", "Insert images"],
          answer: "Store copied items"
        },
        {
          question: "Which shortcut key opens the 'Find' dialog box in MS Word?",
          options: ["Ctrl + F", "Ctrl + H", "Ctrl + G", "Ctrl + D"],
          answer: "Ctrl + F"
        },
        {
          question: "What does the 'Print Preview' option show?",
          options: ["How the document will look when printed", "Word count", "Spelling errors", "File properties"],
          answer: "How the document will look when printed"
        },
        {
          question: "Which feature allows you to add page numbers in MS Word?",
          options: ["Header & Footer", "Page Layout", "References", "Mailings"],
          answer: "Header & Footer"
        },
        {
          question: "What does Ctrl + V do in MS Word?",
          options: ["Paste text", "Cut text", "Copy text", "Undo action"],
          answer: "Paste text"
        },
        {
          question: "Which tab in MS Word contains the 'Margins' option?",
          options: ["Page Layout", "Home", "Insert", "Review"],
          answer: "Page Layout"
        },
      
        // Internet Questions (46-60)
        {
          question: "What is a web browser used for?",
          options: ["Accessing websites", "Editing documents", "Managing hardware", "Running games"],
          answer: "Accessing websites"
        },
        {
          question: "Which of these is an example of a web browser?",
          options: ["Google Chrome", "Microsoft Word", "Windows 10", "Adobe Photoshop"],
          answer: "Google Chrome"
        },
        {
          question: "What does 'www' indicate in a web address?",
          options: ["World Wide Web", "Web Wide Window", "World Web Work", "Wide Web World"],
          answer: "World Wide Web"
        },
        {
          question: "What is the purpose of a search engine?",
          options: ["Find information online", "Send emails", "Edit images", "Store files"],
          answer: "Find information online"
        },
        {
          question: "Which protocol is used to send emails?",
          options: ["SMTP", "HTTP", "FTP", "DNS"],
          answer: "SMTP"
        },
        {
          question: "What does 'download' mean on the internet?",
          options: ["Transfer data to your device", "Upload data to a server", "Delete files", "Edit webpages"],
          answer: "Transfer data to your device"
        },
        {
          question: "What is a hyperlink?",
          options: ["A clickable link to another page", "A type of virus", "A web browser", "An email attachment"],
          answer: "A clickable link to another page"
        },
        {
          question: "Which of these is a popular search engine?",
          options: ["Google", "Facebook", "Twitter", "Instagram"],
          answer: "Google"
        },
        {
          question: "What does 'upload' mean on the internet?",
          options: ["Send data to a server", "Download data", "Delete files", "Open a webpage"],
          answer: "Send data to a server"
        },
        {
          question: "What is Wi-Fi used for?",
          options: ["Wireless internet connection", "File storage", "Printing documents", "Running software"],
          answer: "Wireless internet connection"
        },
        {
          question: "What does DNS stand for?",
          options: ["Domain Name System", "Digital Network Service", "Data Node System", "Dynamic Name Server"],
          answer: "Domain Name System"
        },
        {
          question: "Which of these is a common email service?",
          options: ["Gmail", "Excel", "PowerPoint", "Notepad"],
          answer: "Gmail"
        },
        {
          question: "What is a 'cookie' on the internet?",
          options: ["Data stored by websites", "A type of email", "A web browser", "A search engine"],
          answer: "Data stored by websites"
        },
        {
          question: "What does HTTPS indicate in a URL?",
          options: ["Secure connection", "High-speed transfer", "Hyperlink text", "Home page server"],
          answer: "Secure connection"
        },
        {
          question: "What is the purpose of an IP address?",
          options: ["Identify devices on a network", "Store webpages", "Send emails", "Edit documents"],
          answer: "Identify devices on a network"
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