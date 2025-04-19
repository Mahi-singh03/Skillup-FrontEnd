const getRandomQuestions = (questionsArray, num) => {
    const shuffled = [...questionsArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
};

const allQuestions = [
      {
        "question": "What does the `COUNTIF` function do in Excel?",
        "options": [
          "Adds all numbers in a range",
          "Counts cells based on a condition",
          "Finds the highest value",
          "Rounds numbers to decimals"
        ],
        "answer": "Counts cells based on a condition"
      },
      {
        "question": "Which shortcut opens the 'Format Cells' dialog box?",
        "options": [
          "Ctrl + 1",
          "Alt + F4",
          "Shift + F3",
          "Ctrl + F"
        ],
        "answer": "Ctrl + 1"
      },
      {
        "question": "What is a PivotTable used for?",
        "options": [
          "Inserting images",
          "Summarizing large datasets",
          "Drawing charts",
          "Writing macros"
        ],
        "answer": "Summarizing large datasets"
      },
      {
        "question": "Which formula calculates the average of cells A1 to A10?",
        "options": [
          "=MAX(A1:A10)",
          "=MIN(A1:A10)",
          "=AVERAGE(A1:A10)",
          "=SUM(A1:A10)"
        ],
        "answer": "=AVERAGE(A1:A10)"
      },
      {
        "question": "What does the 'Freeze Panes' feature do?",
        "options": [
          "Hides formulas",
          "Protects the workbook",
          "Locks rows/columns while scrolling",
          "Deletes empty cells"
        ],
        "answer": "Locks rows/columns while scrolling"
      },
      {
        "question": "How do you autofill a series (e.g., 1, 2, 3...) in Excel?",
        "options": [
          "Drag the fill handle",
          "Press Ctrl + Z",
          "Use the 'Paste Special' option",
          "Type each number manually"
        ],
        "answer": "Drag the fill handle"
      },
      {
        "question": "What does the `VLOOKUP` function do?",
        "options": [
          "Creates a chart",
          "Searches for a value in the first column of a table",
          "Merges cells",
          "Formats text as bold"
        ],
        "answer": "Searches for a value in the first column of a table"
      },
      {
        "question": "Which key combination inserts the current date in Excel?",
        "options": [
          "Ctrl + D",
          "Ctrl + ;",
          "Alt + F4",
          "Shift + Enter"
        ],
        "answer": "Ctrl + ;"
      },
      {
        "question": "What is the purpose of conditional formatting?",
        "options": [
          "To lock cells",
          "To highlight cells based on rules",
          "To create pivot tables",
          "To insert hyperlinks"
        ],
        "answer": "To highlight cells based on rules"
      },
      {
        "question": "How do you wrap text in a cell?",
        "options": [
          "Home > Wrap Text",
          "Insert > Page Break",
          "View > Gridlines",
          "Data > Filter"
        ],
        "answer": "Home > Wrap Text"
      },
      {
        "question": "How do you create a new document in Microsoft Word?",
        "options": [
          "Ctrl + P",
          "Ctrl + N",
          "Alt + F4",
          "Shift + Enter"
        ],
        "answer": "Ctrl + N"
      },
      {
        "question": "What is the purpose of the 'Bold' button in Word?",
        "options": [
          "Change font color",
          "Underline text",
          "Make text thicker",
          "Add bullet points"
        ],
        "answer": "Make text thicker"
      },
      {
        "question": "How do you add bullet points to a list?",
        "options": [
          "Home > Numbering",
          "Home > Bullets",
          "Insert > Picture",
          "Review > Spell Check"
        ],
        "answer": "Home > Bullets"
      },
      {
        "question": "What does 'Save As' allow you to do?",
        "options": [
          "Print the document",
          "Save with a new name",
          "Delete the file",
          "Change page color"
        ],
        "answer": "Save with a new name"
      },
      {
        "question": "How do you insert a picture into a Word document?",
        "options": [
          "Insert > Table",
          "Review > Comments",
          "Insert > Picture",
          "View > Zoom"
        ],
        "answer": "Insert > Picture"
      },
      {
        "question": "What does the 'Undo' button (Ctrl + Z) do?",
        "options": [
          "Add a new page",
          "Delete text",
          "Reverse the last action",
          "Save the file"
        ],
        "answer": "Reverse the last action"
      },
      {
        "question": "Which tab contains the 'Font Size' option?",
        "options": [
          "Insert",
          "Home",
          "Review",
          "View"
        ],
        "answer": "Home"
      },
      {
        "question": "What is a PDF file?",
        "options": [
          "A spreadsheet",
          "A video file",
          "A printable document format",
          "A slideshow"
        ],
        "answer": "A printable document format"
      },
      {
        "question": "How do you print a document in Word?",
        "options": [
          "Ctrl + S",
          "Alt + Tab",
          "Ctrl + P",
          "Shift + Delete"
        ],
        "answer": "Ctrl + P"
      },
      {
        "question": "What does the 'Spell Check' tool do?",
        "options": [
          "Adds images",
          "Changes margins",
          "Finds typing errors",
          "Inserts tables"
        ],
        "answer": "Finds typing errors"
      },
      {
        "question": "What does 'RAM' stand for?",
        "options": [
          "Random Access Memory",
          "Read-Only Memory",
          "Remote Access Module",
          "Rapid Application Management"
        ],
        "answer": "Random Access Memory"
      },
      {
        "question": "What is the function of an operating system?",
        "options": [
          "To edit photos",
          "To manage hardware/software resources",
          "To create spreadsheets",
          "To browse the internet"
        ],
        "answer": "To manage hardware/software resources"
      },
      {
        "question": "What is a 'CPU'?",
        "options": [
          "Central Processing Unit",
          "Computer Power Unit",
          "Control Panel Utility",
          "Critical Performance Upgrade"
        ],
        "answer": "Central Processing Unit"
      },
      {
        "question": "What does 'URL' stand for?",
        "options": [
          "Universal Remote Link",
          "Uniform Resource Locator",
          "User Request Link",
          "Uploaded Resource List"
        ],
        "answer": "Uniform Resource Locator"
      },
      {
        "question": "What is 'phishing'?",
        "options": [
          "A type of video",
          "A font style",
          "A scam to steal personal data",
          "A search engine"
        ],
        "answer": "A scam to steal personal data"
      },
      {
        "question": "What does 'HTML' stand for?",
        "options": [
          "HyperText Markup Language",
          "High-Tech Modern Language",
          "Home Tool Management Link",
          "Hyperlink Text Mode Logic"
        ],
        "answer": "HyperText Markup Language"
      },
      {
        "question": "What is 'cloud storage'?",
        "options": [
          "Physical USB drives",
          "Computer RAM",
          "Online file storage (e.g., Google Drive)",
          "Printer memory"
        ],
        "answer": "Online file storage (e.g., Google Drive)"
      },
      {
        "question": "What does 'USB' stand for?",
        "options": [
          "Universal Serial Bus",
          "United Software Backup",
          "User System Buffer",
          "Ultra Speed Bandwidth"
        ],
        "answer": "Universal Serial Bus"
      },
      {
        "question": "What is a 'firewall'?",
        "options": [
          "A physical wall for servers",
          "A security system for networks",
          "A type of printer",
          "A cooling device for CPUs"
        ],
        "answer": "A security system for networks"
      },
      {
        "question": "What does 'PDF' stand for?",
        "options": [
          "Printable Document Format",
          "Portable Document Format",
          "Personal Data File",
          "Public Domain File"
        ],
        "answer": "Portable Document Format"
      },
      {
        "question": "What is a 'web browser'?",
        "options": [
          "A tool to edit videos",
          "A spreadsheet software",
          "A tool to access websites",
          "A type of printer"
        ],
        "answer": "A tool to access websites"
      },
      {
        "question": "How do you bookmark a website?",
        "options": [
          "Ctrl + P",
          "Ctrl + D",
          "Alt + F4",
          "Shift + Enter"
        ],
        "answer": "Ctrl + D"
      },
      {
        "question": "What is a 'search engine'?",
        "options": [
          "A tool to edit photos",
          "A website like Google or Bing",
          "A type of email",
          "A cloud storage service"
        ],
        "answer": "A website like Google or Bing"
      },
      {
        "question": "How do you download a file?",
        "options": [
          "Press Ctrl + Z",
          "Right-click > Save As",
          "Drag and drop",
          "Type in the address bar"
        ],
        "answer": "Right-click > Save As"
      },
      {
        "question": "What is a strong password?",
        "options": [
          "'password123'",
          "'JohnDoe'",
          "'Tiger#2024!'",
          "'1985'"
        ],
        "answer": "'Tiger#2024!'"
      },
      {
        "question": "What does 'https://' mean in a URL?",
        "options": [
          "HyperText Transfer Protocol Secure",
          "High-Tech Text Page",
          "Home Toolbar Page Setup",
          "Hyperlink Text Process"
        ],
        "answer": "HyperText Transfer Protocol Secure"
      },
      {
        "question": "How do you refresh a webpage?",
        "options": [
          "Ctrl + S",
          "F5",
          "Alt + Tab",
          "Shift + Delete"
        ],
        "answer": "F5"
      },
      {
        "question": "What is 'CC' in an email?",
        "options": [
          "Change Color",
          "Carbon Copy (send a copy to others)",
          "Close Chat",
          "Create Contact"
        ],
        "answer": "Carbon Copy (send a copy to others)"
      },
      {
        "question": "What does a trash can icon mean in email?",
        "options": [
          "Save",
          "Delete",
          "Forward",
          "Reply"
        ],
        "answer": "Delete"
      },
      {
        "question": "Which platform is used for short messages (e.g., tweets)?",
        "options": [
          "Facebook",
          "WhatsApp",
          "Twitter/X",
          "LinkedIn"
        ],
        "answer": "Twitter/X"
      },
      {
        "question": "How do you stay safe on social media?",
        "options": [
          "Share passwords",
          "Use privacy settings",
          "Post personal details publicly",
          "Click all links"
        ],
        "answer": "Use privacy settings"
      }
    ]

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