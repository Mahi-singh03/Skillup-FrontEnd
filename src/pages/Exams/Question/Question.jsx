import React, { useState } from 'react';

const questions = [
  {
    question: "Which software is commonly used for word processing?",
    options: [
      "Microsoft Excel",
      "Microsoft Word",
      "Adobe Photoshop",
      "Google Chrome"
    ],
    answer: "Microsoft Word"
  },
  {
    question: "Which of the following is NOT an operating system?",
    options: [
      "Windows 11",
      "Linux",
      "Google Drive",
      "macOS"
    ],
    answer: "Google Drive"
  },
  {
    question: "Which application is widely used for creating presentations?",
    options: [
      "MS Paint",
      "Microsoft PowerPoint",
      "Adobe Acrobat",
      "Notepad"
    ],
    answer: "Microsoft PowerPoint"
  },
  {
    question: "Which software is best suited for database management?",
    options: [
      "MySQL",
      "Photoshop",
      "Excel",
      "VLC Media Player"
    ],
    answer: "MySQL"
  },
  {
    question: "What type of software is Microsoft Excel?",
    options: [
      "Word Processor",
      "Database Management System",
      "Spreadsheet Software",
      "Operating System"
    ],
    answer: "Spreadsheet Software"
  },
  {
    question: "Which of the following is an example of a cloud storage service?",
    options: [
      "Microsoft Office",
      "Google Drive",
      "Adobe Photoshop",
      "Mozilla Firefox"
    ],
    answer: "Google Drive"
  },
  {
    question: "Which of the following software is NOT an antivirus program?",
    options: [
      "Norton",
      "McAfee",
      "Kaspersky",
      "WinRAR"
    ],
    answer: "WinRAR"
  },
  {
    question: "Which file format is commonly used for compressed files?",
    options: [
      ".zip",
      ".docx",
      ".mp3",
      ".exe"
    ],
    answer: ".zip"
  },
  {
    question: "Which of the following is an example of an open-source operating system?",
    options: [
      "Windows",
      "macOS",
      "Linux",
      "iOS"
    ],
    answer: "Linux"
  },
  {
    question: "What is the primary function of an operating system?",
    options: [
      "To manage computer hardware and software resources",
      "To create documents",
      "To browse the internet",
      "To edit images"
    ],
    answer: "To manage computer hardware and software resources"
  },
  {
    question: "Which protocol is used for sending emails?",
    options: [
      "FTP",
      "SMTP",
      "HTTP",
      "SSH"
    ],
    answer: "SMTP"
  },
  {
    question: "Which protocol is used for transferring files over the internet?",
    options: [
      "FTP",
      "HTTPS",
      "TCP",
      "POP3"
    ],
    answer: "FTP"
  },
  {
    question: "What does URL stand for?",
    options: [
      "Uniform Resource Locator",
      "Universal Resource Link",
      "Unified Routing Language",
      "User Registered Link"
    ],
    answer: "Uniform Resource Locator"
  },
  {
    question: "Which of the following is a web browser?",
    options: [
      "Windows",
      "Google Chrome",
      "Microsoft Word",
      "Android"
    ],
    answer: "Google Chrome"
  },
  {
    question: "Which of these services is NOT a search engine?",
    options: [
      "Google",
      "Yahoo",
      "Bing",
      "WhatsApp"
    ],
    answer: "WhatsApp"
  },
  {
    question: "Which organization is responsible for assigning domain names?",
    options: [
      "ICANN",
      "W3C",
      "ISO",
      "IEEE"
    ],
    answer: "ICANN"
  },
  {
    question: "Which of the following is an example of a top-level domain (TLD)?",
    options: [
      "www",
      ".com",
      "http",
      "/index.html"
    ],
    answer: ".com"
  },
  {
    question: "Which of the following is NOT a social media platform?",
    options: [
      "Facebook",
      "Instagram",
      "Twitter",
      "Excel"
    ],
    answer: "Excel"
  },
  {
    question: "Which company developed the Chrome web browser?",
    options: [
      "Apple",
      "Microsoft",
      "Google",
      "Mozilla"
    ],
    answer: "Google"
  },
  {
    question: "What does HTTPS stand for?",
    options: [
      "Hypertext Transfer Protocol Secure",
      "High Transmission Protocol System",
      "Hyperlink Text Processing System",
      "Hypertext Technical Processing System"
    ],
    answer: "Hypertext Transfer Protocol Secure"
  },
  {
    question: "What is the purpose of a firewall in a computer network?",
    options: [
      "To speed up internet connections",
      "To protect against unauthorized access",
      "To store backup files",
      "To block advertisements"
    ],
    answer: "To protect against unauthorized access"
  },
  {
    question: "Which of the following is NOT a web hosting service?",
    options: [
      "Bluehost",
      "HostGator",
      "Google Chrome",
      "GoDaddy"
    ],
    answer: "Google Chrome"
  },
  {
    question: "What is phishing?",
    options: [
      "A method to catch fish using technology",
      "A cybersecurity attack to steal personal information",
      "A form of online shopping",
      "A type of software development"
    ],
    answer: "A cybersecurity attack to steal personal information"
  },
  {
    question: "Which of the following is used to secure online transactions?",
    options: [
      "SSL Certificate",
      "JPEG",
      "IP Address",
      "HTML"
    ],
    answer: "SSL Certificate"
  },
  {
    question: "Which of the following is a cloud computing platform?",
    options: [
      "Windows 10",
      "AWS (Amazon Web Services)",
      "Microsoft Paint",
      "Adobe Photoshop"
    ],
    answer: "AWS (Amazon Web Services)"
  },
  {
    question: "Which term refers to the speed of an internet connection?",
    options: [
      "Latency",
      "Bandwidth",
      "Resolution",
      "Cache"
    ],
    answer: "Bandwidth"
  },
  {
    question: "Which of the following best describes the purpose of a VPN?",
    options: [
      "To increase internet speed",
      "To encrypt internet traffic and provide anonymity",
      "To download software faster",
      "To prevent software crashes"
    ],
    answer: "To encrypt internet traffic and provide anonymity"
  },
  {
    question: "What does DNS stand for in networking?",
    options: [
      "Data Name System",
      "Domain Name System",
      "Digital Network Security",
      "Direct Navigation Service"
    ],
    answer: "Domain Name System"
  },
  {
    question: "Which of the following is an example of an online collaboration tool?",
    options: [
      "Photoshop",
      "Google Docs",
      "Windows Explorer",
      "iTunes"
    ],
    answer: "Google Docs"
  },
  {
    question: "Which technology is used for wireless internet access?",
    options: [
      "Bluetooth",
      "Wi-Fi",
      "USB",
      "Ethernet"
    ],
    answer: "Wi-Fi"
  }
];

// Rest of your React component code

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