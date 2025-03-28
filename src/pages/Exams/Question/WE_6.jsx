import { useState } from 'react';


const getRandomQuestions = (questionsArray, num) => {
    const shuffled = [...questionsArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
};

const allQuestions = [
    {
        question: "How do you create a new document in Microsoft Word?",
        options: ["Ctrl + N", "Ctrl + P", "Alt + F4", "Shift + Enter"],
        answer: "Ctrl + N"
      },
      {
        question: "What is the purpose of the 'Bold' button in Word?",
        options: ["Underline text", "Make text thicker", "Change font color", "Add bullet points"],
        answer: "Make text thicker"
      },
      {
        question: "How do you add bullet points to a list?",
        options: ["Home > Numbering", "Insert > Picture", "Home > Bullets", "Review > Spell Check"],
        answer: "Home > Bullets"
      },
      {
        question: "What does 'Save As' allow you to do?",
        options: ["Delete the file", "Save with a new name", "Print the document", "Change page color"],
        answer: "Save with a new name"
      },
      {
        question: "How do you insert a picture into a Word document?",
        options: ["Insert > Table", "Insert > Picture", "Review > Comments", "View > Zoom"],
        answer: "Insert > Picture"
      },
      {
        question: "What does the 'Undo' button (Ctrl + Z) do?",
        options: ["Delete text", "Reverse the last action", "Save the file", "Add a new page"],
        answer: "Reverse the last action"
      },
      {
        question: "Which tab contains the 'Font Size' option?",
        options: ["Insert", "Review", "Home", "View"],
        answer: "Home"
      },
      {
        question: "What is a PDF file?",
        options: ["A spreadsheet", "A printable document format", "A slideshow", "A video file"],
        answer: "A printable document format"
      },
      {
        question: "How do you print a document in Word?",
        options: ["Ctrl + P", "Ctrl + S", "Alt + Tab", "Shift + Delete"],
        answer: "Ctrl + P"
      },
      {
        question: "What does the 'Spell Check' tool do?",
        options: ["Adds images", "Finds typing errors", "Changes margins", "Inserts tables"],
        answer: "Finds typing errors"
      },
    
      // **MS Excel (10 Questions)**
      {
        question: "What is a cell in Excel?",
        options: ["A grid row", "A single box in a sheet", "A chart type", "A formula"],
        answer: "A single box in a sheet"
      },
      {
        question: "How do you sum numbers in cells A1 to A5?",
        options: ["=SUM(A1:A5)", "=TOTAL(A1-A5)", "=ADD(A1+A5)", "=AVERAGE(A1:A5)"],
        answer: "=SUM(A1:A5)"
      },
      {
        question: "Which symbol starts all Excel formulas?",
        options: ["#", "=", "$", "*"],
        answer: "="
      },
      {
        question: "What is a bar chart used for?",
        options: ["Writing text", "Comparing values", "Adding images", "Creating slideshows"],
        answer: "Comparing values"
      },
      {
        question: "How do you format numbers as currency?",
        options: ["Home > Bold", "Insert > Chart", "Home > Currency", "Review > Spell Check"],
        answer: "Home > Currency"
      },
      {
        question: "What does 'Sort A to Z' do?",
        options: ["Deletes data", "Arranges text alphabetically", "Adds numbers", "Changes font color"],
        answer: "Arranges text alphabetically"
      },
      {
        question: "What is a row in Excel?",
        options: ["Vertical line of cells", "Horizontal line of cells", "A chart", "A formula"],
        answer: "Horizontal line of cells"
      },
      {
        question: "How do you rename an Excel sheet?",
        options: ["Double-click the sheet tab", "Press Ctrl + Z", "Insert > Picture", "Home > Font Size"],
        answer: "Double-click the sheet tab"
      },
      {
        question: "What does the 'AVERAGE' formula calculate?",
        options: ["Total sum", "Middle value", "Highest number", "Lowest number"],
        answer: "Middle value"
      },
      {
        question: "How do you highlight cells with borders?",
        options: ["Home > Borders", "Insert > Chart", "Review > Comments", "View > Gridlines"],
        answer: "Home > Borders"
      },
    
      // **MS PowerPoint (10 Questions)**
      {
        question: "What is a slide layout?",
        options: ["A color theme", "A pre-designed slide structure", "A font style", "A transition effect"],
        answer: "A pre-designed slide structure"
      },
      {
        question: "How do you add a new slide?",
        options: ["Ctrl + M", "Ctrl + S", "Alt + F4", "Shift + Enter"],
        answer: "Ctrl + M"
      },
      {
        question: "What is a slide transition?",
        options: ["A design template", "Movement between slides", "A sound effect", "A chart type"],
        answer: "Movement between slides"
      },
      {
        question: "How do you start a slideshow?",
        options: ["F5", "Ctrl + P", "Alt + Tab", "Shift + Delete"],
        answer: "F5"
      },
      {
        question: "What does the 'Design' tab offer?",
        options: ["Slide layouts", "Themes and templates", "Spell check", "Charts"],
        answer: "Themes and templates"
      },
      {
        question: "How do you insert a text box?",
        options: ["Insert > Picture", "Insert > Text Box", "Home > Bold", "View > Notes"],
        answer: "Insert > Text Box"
      },
      {
        question: "What is a bullet point used for?",
        options: ["Add images", "Create lists", "Change fonts", "Animate text"],
        answer: "Create lists"
      },
      {
        question: "How do you change the font color?",
        options: ["Home > Font Color", "Insert > Chart", "Review > Comments", "Design > Themes"],
        answer: "Home > Font Color"
      },
      {
        question: "What is the 'Notes' section in PowerPoint?",
        options: ["A slide type", "Space for speaker comments", "A transition effect", "A chart tool"],
        answer: "Space for speaker comments"
      },
      {
        question: "How do you add a photo to a slide?",
        options: ["Insert > Picture", "Home > Paste", "Design > Themes", "View > Gridlines"],
        answer: "Insert > Picture"
      },
    
      // **Internet Basics (10 Questions)**
      {
        question: "What is a web browser?",
        options: ["A file type", "A tool to access websites", "A printer", "A spreadsheet"],
        answer: "A tool to access websites"
      },
      {
        question: "What does 'URL' stand for?",
        options: ["User Request Link", "Uniform Resource Locator", "Universal Remote Link", "Uploaded Resource List"],
        answer: "Uniform Resource Locator"
      },
      {
        question: "How do you bookmark a website?",
        options: ["Ctrl + D", "Ctrl + P", "Alt + F4", "Shift + Enter"],
        answer: "Ctrl + D"
      },
      {
        question: "What is a search engine?",
        options: ["A tool to edit photos", "A website like Google or Bing", "A type of email", "A cloud storage service"],
        answer: "A website like Google or Bing"
      },
      {
        question: "How do you download a file?",
        options: ["Right-click > Save As", "Press Ctrl + Z", "Drag and drop", "Type in the address bar"],
        answer: "Right-click > Save As"
      },
      {
        question: "What is phishing?",
        options: ["A type of video", "A scam to steal personal data", "A search engine", "A font style"],
        answer: "A scam to steal personal data"
      },
      {
        question: "What is a strong password?",
        options: ["'password123'", "'JohnDoe'", "'1985'", "'Tiger#2024!'"],
        answer: "'Tiger#2024!'"
      },
      {
        question: "What does 'https://' mean in a URL?",
        options: ["HyperText Transfer Protocol Secure", "High-Tech Text Page", "Home Toolbar Page Setup", "Hyperlink Text Process"],
        answer: "HyperText Transfer Protocol Secure"
      },
      {
        question: "How do you refresh a webpage?",
        options: ["F5", "Ctrl + S", "Alt + Tab", "Shift + Delete"],
        answer: "F5"
      },
      {
        question: "What is cloud storage?",
        options: ["Physical USB drives", "Online file storage (e.g., Google Drive)", "Computer RAM", "Printer memory"],
        answer: "Online file storage (e.g., Google Drive)"
      },
    
      // **Email & Social Media (10 Questions)**
      {
        question: "How do you attach a file to an email?",
        options: ["Click the paperclip icon", "Type in the subject line", "Use bold text", "Add a CC recipient"],
        answer: "Click the paperclip icon"
      },
      {
        question: "What is 'CC' in an email?",
        options: ["Carbon Copy (send a copy to others)", "Change Color", "Close Chat", "Create Contact"],
        answer: "Carbon Copy (send a copy to others)"
      },
      {
        question: "What does a trash can icon mean in email?",
        options: ["Delete", "Save", "Forward", "Reply"],
        answer: "Delete"
      },
      {
        question: "Which platform is used for short messages (e.g., tweets)?",
        options: ["Facebook", "Twitter/X", "WhatsApp", "LinkedIn"],
        answer: "Twitter/X"
      },
      {
        question: "How do you stay safe on social media?",
        options: ["Share passwords", "Post personal details publicly", "Use privacy settings", "Click all links"],
        answer: "Use privacy settings"
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