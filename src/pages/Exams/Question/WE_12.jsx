const getRandomQuestions = (questionsArray, num) => {
    const shuffled = [...questionsArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
};
const allQuestions = [
  {
    "question": "In MS Word, which feature allows you to track changes made to a document?",
    "options": [
      "Track Changes",
      "Comments",
      "Mail Merge",
      "Styles"
    ],
    "answer": "Track Changes"
  },
  {
    "question": "In MS Excel, what does the VLOOKUP function do?",
    "options": [
      "Formats data in columns",
      "Looks up values in a table by row",
      "Sorts data vertically",
      "Merges cells vertically"
    ],
    "answer": "Looks up values in a table by row"
  },
  {
    "question": "In MS PowerPoint, which feature sets the timing for slide transitions?",
    "options": [
      "Slide Sorter",
      "Animation Pane",
      "Transition",
      "Slide Master"
    ],
    "answer": "Transition"
  },
  {
    "question": "What does 'CPU' stand for in computer hardware?",
    "options": [
      "Core Processor Unit",
      "Computer Processing Unit",
      "Central Processing Unit",
      "Control Program Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "question": "In MS Word, what is the shortcut to align text to the center?",
    "options": [
      "Ctrl+E",
      "Ctrl+L",
      "Ctrl+R",
      "Ctrl+J"
    ],
    "answer": "Ctrl+E"
  },
  {
    "question": "In MS Excel, which function calculates the average of a range, ignoring non-numeric values?",
    "options": [
      "AVERAGEIF",
      "AVERAGE",
      "MEAN",
      "AVERAGEA"
    ],
    "answer": "AVERAGE"
  },
  {
    "question": "In MS PowerPoint, what is the purpose of the 'Slide Master'?",
    "options": [
      "To record slide timings",
      "To insert media files",
      "To manage animations",
      "To apply consistent formatting across slides"
    ],
    "answer": "To apply consistent formatting across slides"
  },
  {
    "question": "What does 'RAM' stand for in computer hardware?",
    "options": [
      "Reusable Active Memory",
      "Readily Available Module",
      "Random Access Memory",
      "Rapid Access Mode"
    ],
    "answer": "Random Access Memory"
  },
  {
    "question": "In MS Word, which feature combines data from a list into a document?",
    "options": [
      "Comments",
      "Bookmarks",
      "Mail Merge",
      "Styles"
    ],
    "answer": "Mail Merge"
  },
  {
    "question": "In MS Excel, what does the COUNTIF function do?",
    "options": [
      "Sums values based on a condition",
      "Counts cells based on a condition",
      "Averages values in a range",
      "Sorts data by criteria"
    ],
    "answer": "Counts cells based on a condition"
  },
  {
    "question": "In MS PowerPoint, which tab contains the 'Insert Picture' option?",
    "options": [
      "Design",
      "Home",
      "Insert",
      "View"
    ],
    "answer": "Insert"
  },
  {
    "question": "What does 'SSD' stand for in computer hardware?",
    "options": [
      "Solid State Drive",
      "System Storage Device",
      "Secure Storage Disk",
      "Static System Drive"
    ],
    "answer": "Solid State Drive"
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
    "question": "In MS Excel, which feature highlights cells based on their values?",
    "options": [
      "Conditional Formatting",
      "Data Validation",
      "PivotTable",
      "Goal Seek"
    ],
    "answer": "Conditional Formatting"
  },
  {
    "question": "In MS PowerPoint, what is the purpose of the 'Rehearse Timings' feature?",
    "options": [
      "To set and practice slide transition times",
      "To manage slide layouts",
      "To insert animations",
      "To apply themes"
    ],
    "answer": "To set and practice slide transition times"
  },
  {
    "question": "What does 'USB' stand for in computer hardware?",
    "options": [
      "Ultra Speed Bandwidth",
      "Unique Storage Base",
      "Unified System Buffer",
      "Universal Serial Bus"
    ],
    "answer": "Universal Serial Bus"
  },
  {
    "question": "In MS Word, which feature checks spelling and grammar?",
    "options": [
      "Editor",
      "Thesaurus",
      "Comments",
      "Styles"
    ],
    "answer": "Editor"
  },
  {
    "question": "In MS Excel, which function returns the current date?",
    "options": [
      "NOW",
      "TODAY",
      "DATE",
      "TIME"
    ],
    "answer": "TODAY"
  },
  {
    "question": "In MS PowerPoint, which feature allows you to hide a slide during a presentation?",
    "options": [
      "Animation Pane",
      "Slide Master",
      "Hide Slide",
      "Slide Sorter"
    ],
    "answer": "Hide Slide"
  },
  {
    "question": "What does 'HDD' stand for in computer hardware?",
    "options": [
      "High Density Disk",
      "Hard Disk Drive",
      "Hybrid Data Drive",
      "Hyper Data Device"
    ],
    "answer": "Hard Disk Drive"
  },
  {
    "question": "In MS Word, what is the shortcut to undo the last action?",
    "options": [
      "Ctrl+Z",
      "Ctrl+Y",
      "Ctrl+X",
      "Ctrl+V"
    ],
    "answer": "Ctrl+Z"
  },
  {
    "question": "In MS Excel, what does the SUMIF function do?",
    "options": [
      "Counts cells based on a condition",
      "Averages values based on a condition",
      "Sums values based on a condition",
      "Sorts data based on a condition"
    ],
    "answer": "Sums values based on a condition"
  },
  {
    "question": "In MS PowerPoint, what is the purpose of the 'Format Painter'?",
    "options": [
      "To manage slide transitions",
      "To copy formatting from one object to another",
      "To insert charts",
      "To apply animations"
    ],
    "answer": "To copy formatting from one object to another"
  },
  {
    "question": "What does 'BIOS' stand for in computer hardware?",
    "options": [
      "Binary Internal Operating System",
      "Basic Input/Output System",
      "Base Integrated Output System",
      "Buffered Input/Output Service"
    ],
    "answer": "Basic Input/Output System"
  },
  {
    "question": "In MS Word, which tab contains the 'Table of Contents' feature?",
    "options": [
      "Home",
      "References",
      "Insert",
      "Layout"
    ],
    "answer": "References"
  },
  {
    "question": "In MS Excel, which feature keeps rows or columns visible while scrolling?",
    "options": [
      "Merge Cells",
      "Freeze Panes",
      "Data Validation",
      "Conditional Formatting"
    ],
    "answer": "Freeze Panes"
  },
  {
    "question": "In MS PowerPoint, which file extension is used for a standard presentation?",
    "options": [
      ".pptx",
      ".ppsx",
      ".pptm",
      ".ppt"
    ],
    "answer": ".pptx"
  },
  {
    "question": "What does 'GPU' stand for in computer hardware?",
    "options": [
      "General Processing Unit",
      "Graphics Processing Unit",
      "Global Performance Unit",
      "Grid Power Utility"
    ],
    "answer": "Graphics Processing Unit"
  },
  {
    "question": "In MS Word, what is the purpose of the 'Watermark' feature?",
    "options": [
      "To insert dynamic fields",
      "To add a faint background text or image",
      "To manage citations",
      "To adjust margins"
    ],
    "answer": "To add a faint background text or image"
  },
  {
    "question": "In MS Excel, which function rounds a number to a specified number of digits?",
    "options": [
      "ROUND",
      "TRUNC",
      "CEILING",
      "FLOOR"
    ],
    "answer": "ROUND"
  },
  {
    "question": "In MS PowerPoint, what is the purpose of the 'Animation Painter'?",
    "options": [
      "To manage slide layouts",
      "To insert media",
      "To copy animations from one object to another",
      "To apply themes"
    ],
    "answer": "To copy animations from one object to another"
  },
  {
    "question": "What does 'LAN' stand for in computer hardware?",
    "options": [
      "Logical Access Network",
      "Large Access Node",
      "Local Area Network",
      "Linked Application Network"
    ],
    "answer": "Local Area Network"
  },
  {
    "question": "In MS Word, what is the default file extension for a document?",
    "options": [
      ".txt",
      ".doc",
      ".rtf",
      ".docx"
    ],
    "answer": ".docx"
  },
  {
    "question": "In MS Excel, which chart type is best for showing trends over time?",
    "options": [
      "Line Chart",
      "Pie Chart",
      "Bar Chart",
      "Scatter Chart"
    ],
    "answer": "Line Chart"
  },
  {
    "question": "In MS PowerPoint, which feature allows you to apply a consistent theme across slides?",
    "options": [
      "Slide Master",
      "Theme",
      "Animation Pane",
      "Slide Sorter"
    ],
    "answer": "Theme"
  },
  {
    "question": "What does 'ROM' stand for in computer hardware?",
    "options": [
      "Reusable Operating Memory",
      "Read-Only Memory",
      "Random Output Module",
      "Rapid Online Memory"
    ],
    "answer": "Read-Only Memory"
  },
  {
    "question": "In MS Word, which feature allows you to insert a pre-formatted header or footer?",
    "options": [
      "Quick Parts",
      "Header and Footer",
      "SmartArt",
      "Insert Caption"
    ],
    "answer": "Header and Footer"
  },
  {
    "question": "In MS Excel, what does the IF function do?",
    "options": [
      "Sorts data based on criteria",
      "Performs a logical test and returns a value",
      "Counts cells in a range",
      "Formats cells dynamically"
    ],
    "answer": "Performs a logical test and returns a value"
  },
  {
    "question": "In MS PowerPoint, what is the purpose of the 'Eyedropper' tool?",
    "options": [
      "To apply animations",
      "To match colors from an object or image",
      "To insert media",
      "To manage slide layouts"
    ],
    "answer": "To match colors from an object or image"
  },
  {
    "question": "What does 'VGA' stand for in computer hardware?",
    "options": [
      "Video Graphics Array",
      "Visual Gateway Adapter",
      "Virtual Graphic Algorithm",
      "Vector Graphics Application"
    ],
    "answer": "Video Graphics Array"
  },
  {
    "question": "In MS Word, what is the shortcut to insert a hyperlink?",
    "options": [
      "Ctrl+H",
      "Ctrl+K",
      "Ctrl+L",
      "Ctrl+J"
    ],
    "answer": "Ctrl+K"
  },
  {
    "question": "In MS Excel, what does the CONCATENATE function do?",
    "options": [
      "Combines text from multiple cells",
      "Sorts text alphabetically",
      "Counts text entries",
      "Formats text dynamically"
    ],
    "answer": "Combines text from multiple cells"
  },
  {
    "question": "In MS PowerPoint, which feature allows you to loop a presentation continuously?",
    "options": [
      "Slide Show Setup",
      "Transition Options",
      "Animation Pane",
      "Slide Master"
    ],
    "answer": "Slide Show Setup"
  },
  {
    "question": "What does 'WAN' stand for in computer hardware?",
    "options": [
      "Wide Area Network",
      "Wireless Access Node",
      "Web Application Network",
      "Wired Active Network"
    ],
    "answer": "Wide Area Network"
  },
  {
    "question": "In MS Word, what is the purpose of the 'Ruler' feature?",
    "options": [
      "To measure page size",
      "To draw lines",
      "To adjust margins and tabs",
      "To align images"
    ],
    "answer": "To adjust margins and tabs"
  },
  {
    "question": "In MS Excel, what is the purpose of the 'Data Validation' feature?",
    "options": [
      "To create formulas",
      "To sort data automatically",
      "To restrict data entry to specific criteria",
      "To merge cells"
    ],
    "answer": "To restrict data entry to specific criteria"
  },
  {
    "question": "In MS PowerPoint, what is the purpose of the 'Presenter View'?",
    "options": [
      "To display speaker notes and slide previews",
      "To manage slide transitions",
      "To insert charts",
      "To apply animations"
    ],
    "answer": "To display speaker notes and slide previews"
  },
  {
    "question": "What does 'OS' stand for in computer hardware?",
    "options": [
      "Optimized Storage",
      "Operating System",
      "Output Service",
      "Online Software"
    ],
    "answer": "Operating System"
  },
  {
    "question": "In MS Word, which feature allows you to create a numbered or bulleted list?",
    "options": [
      "Indentation",
      "Styles",
      "Bullets and Numbering",
      "Paragraph"
    ],
    "answer": "Bullets and Numbering"
  },
  {
    "question": "In MS Excel, what does the MAX function do?",
    "options": [
      "Returns the largest value in a range",
      "Counts cells in a range",
      "Sums values in a range",
      "Averages values in a range"
    ],
    "answer": "Returns the largest value in a range"
  },
  {
    "question": "In MS PowerPoint, which feature allows you to record a slide show with narration?",
    "options": [
      "Record Slide Show",
      "Rehearse Timings",
      "Animation Pane",
      "Slide Sorter"
    ],
    "answer": "Record Slide Show"
  },
  {
    "question": "What does 'DVD' stand for in computer hardware?",
    "options": [
      "Dynamic Video Drive",
      "Digital Versatile Disc",
      "Direct Virtual Device",
      "Data Video Disk"
    ],
    "answer": "Digital Versatile Disc"
  },
  {
    "question": "In MS Word, what is the purpose of the 'SmartArt' feature?",
    "options": [
      "To adjust text alignment",
      "To create visual diagrams and graphics",
      "To insert tables",
      "To manage citations"
    ],
    "answer": "To create visual diagrams and graphics"
  },
  {
    "question": "In MS Excel, what does the PivotTable feature do?",
    "options": [
      "Formats cells",
      "Summarizes and analyzes data",
      "Creates charts",
      "Merges worksheets"
    ],
    "answer": "Summarizes and analyzes data"
  },
  {
    "question": "In MS PowerPoint, what is the purpose of the 'Merge Shapes' feature?",
    "options": [
      "To insert charts",
      "To apply animations",
      "To create custom shapes by combining or subtracting",
      "To manage slide transitions"
    ],
    "answer": "To create custom shapes by combining or subtracting"
  },
  {
    "question": "What does 'RAID' stand for in computer hardware?",
    "options": [
      "Rapid Access Integrated Data",
      "Redundant Array of Independent Disks",
      "Randomized Array of Internal Drives",
      "Reliable Archive of Indexed Data"
    ],
    "answer": "Redundant Array of Independent Disks"
  },
  {
    "question": "In MS Word, which feature allows you to protect a document with a password?",
    "options": [
      "Encrypt with Password",
      "Restrict Editing",
      "Mark as Final",
      "Lock Document"
    ],
    "answer": "Encrypt with Password"
  },
  {
    "question": "In MS Excel, what does the NOW function do?",
    "options": [
      "Returns the current date and time",
      "Returns the current time only",
      "Returns the current date only",
      "Formats dates dynamically"
    ],
    "answer": "Returns the current date and time"
  },
  {
    "question": "In MS PowerPoint, which feature allows you to export a presentation as a video?",
    "options": [
      "Package Presentation",
      "Export to Video",
      "Record Slide Show",
      "Save As Video"
    ],
    "answer": "Export to Video"
  },
  {
    "question": "What does 'Cache Memory' refer to in computer hardware?",
    "options": [
      "A slow storage device for backups",
      "A fast memory that stores frequently used data",
      "A type of permanent storage",
      "A network storage system"
    ],
    "answer": "A fast memory that stores frequently used data"
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