const getRandomQuestions = (questionsArray, num) => {
    const shuffled = [...questionsArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
};


const allQuestions = [
    {
      "question": "What does 'CPU' stand for in computer terminology?",
      "options": [
        "Control Program Utility",
        "Central Processing Unit",
        "Computer Processing Unit",
        "Core Processor Unit"
      ],
      "answer": "Central Processing Unit"
    },
    {
      "question": "Which MS Word feature allows you to create a consistent layout across multiple documents?",
      "options": [
        "Mail Merge",
        "Track Changes",
        "Styles",
        "Macros"
      ],
      "answer": "Styles"
    },
    {
      "question": "What does 'ROM' stand for?",
      "options": [
        "Random Output Module",
        "Read-Only Memory",
        "Reusable Operating Memory",
        "Rapid Online Memory"
      ],
      "answer": "Read-Only Memory"
    },
    {
      "question": "In MS Excel, which function calculates the average of a range, ignoring non-numeric values?",
      "options": [
        "AVERAGE",
        "MEAN",
        "AVERAGEIF",
        "AVERAGEA"
      ],
      "answer": "AVERAGEA"
    },
    {
      "question": "What does 'LAN' stand for in networking?",
      "options": [
        "Large Access Node",
        "Local Area Network",
        "Linked Application Network",
        "Logical Access Network"
      ],
      "answer": "Local Area Network"
    },
    {
      "question": "In MS Word, which feature allows you to combine data from a list into a document?",
      "options": [
        "Bookmarks",
        "Mail Merge",
        "Styles",
        "Comments"
      ],
      "answer": "Mail Merge"
    },
    {
      "question": "What does 'RAM' stand for?",
      "options": [
        "Readily Available Module",
        "Random Access Memory",
        "Reusable Active Memory",
        "Rapid Access Mode"
      ],
      "answer": "Random Access Memory"
    },
    {
      "question": "In MS Excel, what does the VLOOKUP function primarily do?",
      "options": [
        "Sorts data vertically",
        "Formats data in columns",
        "Looks up values in a table by row",
        "Merges cells vertically"
      ],
      "answer": "Looks up values in a table by row"
    },
    {
      "question": "What does 'BIOS' stand for in computer systems?",
      "options": [
        "Binary Internal Operating System",
        "Basic Input/Output System",
        "Base Integrated Output System",
        "Buffered Input/Output Service"
      ],
      "answer": "Basic Input/Output System"
    },
    {
      "question": "In MS Word, what is the purpose of the 'Track Changes' feature?",
      "options": [
        "To merge multiple documents",
        "To monitor document revisions",
        "To create hyperlinks",
        "To insert footnotes"
      ],
      "answer": "To monitor document revisions"
    },
    {
      "question": "In MS Excel, which function counts cells that meet multiple criteria?",
      "options": [
        "COUNT",
        "COUNTIFS",
        "COUNTIF",
        "SUMIF"
      ],
      "answer": "COUNTIFS"
    },
    {
      "question": "What does 'URL' stand for?",
      "options": [
        "Uniform Resource Locator",
        "Universal Reference Link",
        "Unique Resource Label",
        "Unified Retrieval Location"
      ],
      "answer": "Uniform Resource Locator"
    },
    {
      "question": "In MS Word, which tab contains the 'Table of Contents' feature?",
      "options": [
        "References",
        "Home",
        "Insert",
        "Layout"
      ],
      "answer": "References"
    },
    {
      "question": "What does 'GUI' stand for in computing?",
      "options": [
        "General Utility Input",
        "Global User Integration",
        "Graphical User Interface",
        "Guided Update Interface"
      ],
      "answer": "Graphical User Interface"
    },
    {
      "question": "In MS Excel, what is the purpose of the 'PivotTable' feature?",
      "options": [
        "To create charts",
        "To merge worksheets",
        "To summarize and analyze data",
        "To format cells"
      ],
      "answer": "To summarize and analyze data"
    },
    {
      "question": "What does 'HTTP' stand for?",
      "options": [
        "High Throughput Terminal Protocol",
        "HyperText Transfer Protocol",
        "Hyperlink Text Transmission Process",
        "Hosted Transfer Program"
      ],
      "answer": "HyperText Transfer Protocol"
    },
    {
      "question": "In MS Word, what is the shortcut key to align text to the center?",
      "options": [
        "Ctrl+L",
        "Ctrl+R",
        "Ctrl+E",
        "Ctrl+J"
      ],
      "answer": "Ctrl+E"
    },
    {
      "question": "In MS Excel, which function returns the current date and time?",
      "options": [
        "TODAY",
        "NOW",
        "DATE",
        "TIME"
      ],
      "answer": "NOW"
    },
    {
      "question": "What does 'USB' stand for?",
      "options": [
        "Universal Serial Bus",
        "Unified System Buffer",
        "Ultra Speed Bandwidth",
        "Unique Storage Base"
      ],
      "answer": "Universal Serial Bus"
    },
    {
      "question": "In MS Word, which feature allows you to record a sequence of commands for automation?",
      "options": [
        "Templates",
        "Macros",
        "Styles",
        "Quick Parts"
      ],
      "answer": "Macros"
    },
    {
      "question": "In MS Excel, what does the 'IFERROR' function do?",
      "options": [
        "Formats cells with errors",
        "Checks for errors and returns a specified value",
        "Counts cells with errors",
        "Corrects formula errors"
      ],
      "answer": "Checks for errors and returns a specified value"
    },
    {
      "question": "What does 'WAN' stand for in networking?",
      "options": [
        "Wireless Access Node",
        "Wide Area Network",
        "Web Application Network",
        "Wired Active Network"
      ],
      "answer": "Wide Area Network"
    },
    {
      "question": "In MS Word, what is the purpose of the 'Quick Access Toolbar'?",
      "options": [
        "To display document properties",
        "To store frequently used commands",
        "To manage page layouts",
        "To insert media files"
      ],
      "answer": "To store frequently used commands"
    },
    {
      "question": "In MS Excel, which chart type is best for showing trends over time?",
      "options": [
        "Pie Chart",
        "Line Chart",
        "Bar Chart",
        "Scatter Chart"
      ],
      "answer": "Line Chart"
    },
    {
      "question": "What does 'DNS' stand for in networking?",
      "options": [
        "Digital Node Structure",
        "Domain Name System",
        "Dynamic Network Service",
        "Data Network Standard"
      ],
      "answer": "Domain Name System"
    },
    {
      "question": "In MS Word, which feature helps to check spelling and grammar?",
      "options": [
        "Thesaurus",
        "Comments",
        "Editor",
        "Styles"
      ],
      "answer": "Editor"
    },
    {
      "question": "In MS Excel, what is the purpose of the 'Data Validation' feature?",
      "options": [
        "To sort data automatically",
        "To restrict data entry to specific criteria",
        "To merge cells",
        "To create formulas"
      ],
      "answer": "To restrict data entry to specific criteria"
    },
    {
      "question": "What does 'IP' stand for in networking?",
      "options": [
        "Integrated Platform",
        "Internet Protocol",
        "Internal Processor",
        "Information Packet"
      ],
      "answer": "Internet Protocol"
    },
    {
      "question": "In MS Word, what is the default file extension for a document in recent versions?",
      "options": [
        ".docx",
        ".doc",
        ".txt",
        ".rtf"
      ],
      "answer": ".docx"
    },
    {
      "question": "In MS Excel, which function rounds a number to a specified number of digits?",
      "options": [
        "TRUNC",
        "ROUND",
        "CEILING",
        "FLOOR"
      ],
      "answer": "ROUND"
    },
    {
      "question": "What does 'VGA' stand for in display technology?",
      "options": [
        "Video Graphics Array",
        "Visual Gateway Adapter",
        "Virtual Graphic Algorithm",
        "Vector Graphics Application"
      ],
      "answer": "Video Graphics Array"
    },
    {
      "question": "In MS Word, which option allows you to protect a document with a password?",
      "options": [
        "Restrict Editing",
        "Encrypt with Password",
        "Mark as Final",
        "Lock Document"
      ],
      "answer": "Encrypt with Password"
    },
    {
      "question": "In MS Excel, what does the 'SUMIF' function do?",
      "options": [
        "Counts cells based on a condition",
        "Sums values based on a condition",
        "Averages values based on a condition",
        "Sorts data based on a condition"
      ],
      "answer": "Sums values based on a condition"
    },
    {
      "question": "What does 'OS' stand for in computing?",
      "options": [
        "Output Service",
        "Operating System",
        "Optimized Storage",
        "Online Software"
      ],
      "answer": "Operating System"
    },
    {
      "question": "In MS Word, which feature allows you to insert pre-formatted text or graphics?",
      "options": [
        "Bookmarks",
        "Quick Parts",
        "Hyperlinks",
        "Comments"
      ],
      "answer": "Quick Parts"
    },
    {
      "question": "In MS Excel, which feature allows you to highlight cells based on their values?",
      "options": [
        "Data Validation",
        "Conditional Formatting",
        "PivotTable",
        "Goal Seek"
      ],
      "answer": "Conditional Formatting"
    },
    {
      "question": "What does 'SSD' stand for in storage technology?",
      "options": [
        "System Storage Device",
        "Solid State Drive",
        "Secure Storage Disk",
        "Static System Drive"
      ],
      "answer": "Solid State Drive"
    },
    {
      "question": "In MS Word, what is the purpose of the 'Ruler' feature?",
      "options": [
        "To measure page size",
        "To adjust margins and tabs",
        "To draw lines",
        "To align images"
      ],
      "answer": "To adjust margins and tabs"
    },
    {
      "question": "In MS Excel, what is the purpose of the 'Goal Seek' feature?",
      "options": [
        "To find the input needed for a desired result",
        "To create charts",
        "To sort data",
        "To merge cells"
      ],
      "answer": "To find the input needed for a desired result"
    },
    {
      "question": "What does 'HTML' stand for?",
      "options": [
        "High Text Manipulation Language",
        "HyperText Markup Language",
        "Hosted Terminal Markup Logic",
        "Hyperlink Text Management Layer"
      ],
      "answer": "HyperText Markup Language"
    },
    {
      "question": "In MS Word, which tab contains the 'WordArt' feature?",
      "options": [
        "Insert",
        "Home",
        "Design",
        "Layout"
      ],
      "answer": "Insert"
    },
    {
      "question": "In MS Excel, which function returns the largest value in a range?",
      "options": [
        "LARGE",
        "MAX",
        "HIGHEST",
        "TOP"
      ],
      "answer": "MAX"
    },
    {
      "question": "What does 'FTP' stand for in networking?",
      "options": [
        "Fast Terminal Process",
        "File Transfer Protocol",
        "Flexible Transmission Platform",
        "Formatted Text Protocol"
      ],
      "answer": "File Transfer Protocol"
    },
    {
      "question": "In MS Word, what is the shortcut to undo the last action?",
      "options": [
        "Ctrl+Y",
        "Ctrl+Z",
        "Ctrl+X",
        "Ctrl+V"
      ],
      "answer": "Ctrl+Z"
    },
    {
      "question": "In MS Excel, what does the 'INDEX' function do?",
      "options": [
        "Sorts data in a range",
        "Returns a value from a specified range",
        "Counts cells in a range",
        "Formats a range"
      ],
      "answer": "Returns a value from a specified range"
    },
    {
      "question": "What does 'MAC' stand for in networking?",
      "options": [
        "Media Access Control",
        "Main Application Controller",
        "Memory Allocation Channel",
        "Multi-Access Circuit"
      ],
      "answer": "Media Access Control"
    },
    {
      "question": "In MS Word, which feature allows you to create a numbered or bulleted list?",
      "options": [
        "Paragraph",
        "Indentation",
        "Bullets and Numbering",
        "Styles"
      ],
      "answer": "Bullets and Numbering"
    },
    {
      "question": "In MS Excel, what is the purpose of the 'Freeze Panes' feature?",
      "options": [
        "To lock cell values",
        "To keep rows or columns visible while scrolling",
        "To merge cells",
        "To format borders"
      ],
      "answer": "To keep rows or columns visible while scrolling"
    },
    {
      "question": "What does 'API' stand for in programming?",
      "options": [
        "Automated Process Integration",
        "Application Programming Interface",
        "Active Program Instruction",
        "Adaptive Protocol Interface"
      ],
      "answer": "Application Programming Interface"
    }
];


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