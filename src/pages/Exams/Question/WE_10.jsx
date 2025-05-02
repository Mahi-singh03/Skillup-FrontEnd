const getRandomQuestions = (questionsArray, num) => {
    const shuffled = [...questionsArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
};

const allQuestions = [
    {
      "question": "What does 'CPU' stand for in computer terminology?",
      "options": [
        "Central Processing Unit",
        "Control Program Utility",
        "Computer Processing Unit",
        "Core Processor Unit"
      ],
      "answer": "Central Processing Unit"
    },
    {
      "question": "Which MS Word feature allows you to create a consistent layout across multiple documents?",
      "options": [
        "Mail Merge",
        "Styles",
        "Track Changes",
        "Macros"
      ],
      "answer": "Styles"
    },
    {
      "question": "What does 'ROM' stand for?",
      "options": [
        "Read-Only Memory",
        "Random Output Module",
        "Reusable Operating Memory",
        "Rapid Online Memory"
      ],
      "answer": "Read-Only Memory"
    },
    {
      "question": "In MS Word, what is the purpose of the 'Thesaurus' tool?",
      "options": [
        "To check spelling",
        "To find synonyms and antonyms",
        "To adjust margins",
        "To insert images"
      ],
      "answer": "To find synonyms and antonyms"
    },
    {
      "question": "What does 'HTTP' stand for?",
      "options": [
        "HyperText Transfer Protocol",
        "High-Level Text Processor",
        "Hybrid Terminal Program",
        "Host Tracking Protocol"
      ],
      "answer": "HyperText Transfer Protocol"
    },
    {
      "question": "Which shortcut key in MS Word is used to align text to the center?",
      "options": [
        "Ctrl + E",
        "Ctrl + J",
        "Ctrl + L",
        "Ctrl + R"
      ],
      "answer": "Ctrl + E"
    },
    {
      "question": "What does 'BIOS' stand for?",
      "options": [
        "Basic Input/Output System",
        "Binary Instruction Operating System",
        "Built-In Operating Software",
        "Base Internal Output System"
      ],
      "answer": "Basic Input/Output System"
    },
    {
      "question": "In MS Word, what does the 'Track Changes' feature do?",
      "options": [
        "Records edits for review",
        "Inserts page numbers",
        "Formats text as bold",
        "Creates a table of contents"
      ],
      "answer": "Records edits for review"
    },
    {
      "question": "What does 'USB' stand for?",
      "options": [
        "Universal Serial Bus",
        "Ultra-Speed Buffer",
        "Unified Storage Block",
        "User System Backup"
      ],
      "answer": "Universal Serial Bus"
    },
    {
      "question": "Which MS Word tool allows you to automate repetitive tasks?",
      "options": [
        "Macros",
        "Templates",
        "Styles",
        "Mail Merge"
      ],
      "answer": "Macros"
    },
    {
      "question": "What does 'GPU' stand for?",
      "options": [
        "Graphics Processing Unit",
        "General Program Utility",
        "Global Processing Unit",
        "Grid Power Unit"
      ],
      "answer": "Graphics Processing Unit"
    },
    {
      "question": "In MS Word, what is the purpose of the 'Mail Merge' feature?",
      "options": [
        "To create personalized documents for multiple recipients",
        "To merge multiple documents into one",
        "To check grammar",
        "To insert hyperlinks"
      ],
      "answer": "To create personalized documents for multiple recipients"
    },
    {
      "question": "What does 'LAN' stand for?",
      "options": [
        "Local Area Network",
        "Logical Access Node",
        "Linked Application Network",
        "Large Area Node"
      ],
      "answer": "Local Area Network"
    },
    {
      "question": "Which MS Word shortcut key is used to create a new document?",
      "options": [
        "Ctrl + N",
        "Ctrl + O",
        "Ctrl + S",
        "Ctrl + P"
      ],
      "answer": "Ctrl + N"
    },
    {
      "question": "What does 'HDD' stand for?",
      "options": [
        "Hard Disk Drive",
        "High-Definition Data",
        "Hybrid Digital Device",
        "Host Data Directory"
      ],
      "answer": "Hard Disk Drive"
    },
    {
      "question": "In MS Word, what does the 'SmartArt' feature allow you to create?",
      "options": [
        "Visual diagrams and graphics",
        "Tables of contents",
        "Hyperlinks",
        "Footnotes"
      ],
      "answer": "Visual diagrams and graphics"
    },
    {
      "question": "What does 'WAN' stand for?",
      "options": [
        "Wide Area Network",
        "Wireless Access Node",
        "Web Application Network",
        "Workstation Area Node"
      ],
      "answer": "Wide Area Network"
    },
    {
      "question": "Which MS Word feature allows you to restrict editing in a document?",
      "options": [
        "Protect Document",
        "Track Changes",
        "Styles",
        "References"
      ],
      "answer": "Protect Document"
    },
    {
      "question": "What does 'SSD' stand for?",
      "options": [
        "Solid State Drive",
        "System Storage Device",
        "Secure Software Disk",
        "Standard System Drive"
      ],
      "answer": "Solid State Drive"
    },
    {
      "question": "In MS Word, what is the purpose of the 'Endnote' feature?",
      "options": [
        "To add citations at the end of a document",
        "To insert page numbers",
        "To align text",
        "To create charts"
      ],
      "answer": "To add citations at the end of a document"
    },
    {
      "question": "What does 'OS' stand for in computing?",
      "options": [
        "Operating System",
        "Output Service",
        "Online Storage",
        "Open Software"
      ],
      "answer": "Operating System"
    },
    {
      "question": "Which MS Word shortcut key is used to undo the last action?",
      "options": [
        "Ctrl + Z",
        "Ctrl + Y",
        "Ctrl + X",
        "Ctrl + C"
      ],
      "answer": "Ctrl + Z"
    },
    {
      "question": "What does 'ISP' stand for?",
      "options": [
        "Internet Service Provider",
        "Internal Storage Platform",
        "Information System Processor",
        "Integrated Software Program"
      ],
      "answer": "Internet Service Provider"
    },
    {
      "question": "In MS Word, what does the 'WordArt' feature allow you to create?",
      "options": [
        "Stylized text effects",
        "Tables",
        "Hyperlinks",
        "Bookmarks"
      ],
      "answer": "Stylized text effects"
    },
    {
      "question": "What does 'VGA' stand for?",
      "options": [
        "Video Graphics Array",
        "Virtual Grid Access",
        "Visual Gateway Adapter",
        "Variable Graphic Algorithm"
      ],
      "answer": "Video Graphics Array"
    },
    {
      "question": "Which MS Word feature allows you to insert a list of sources cited in a document?",
      "options": [
        "Bibliography",
        "Table of Contents",
        "Index",
        "Caption"
      ],
      "answer": "Bibliography"
    },
    {
      "question": "What does 'DNS' stand for?",
      "options": [
        "Domain Name System",
        "Digital Network Service",
        "Data Node System",
        "Dynamic Name Server"
      ],
      "answer": "Domain Name System"
    },
    {
      "question": "In MS Word, what is the purpose of the 'Header and Footer' feature?",
      "options": [
        "To add recurring text at the top or bottom of pages",
        "To insert images",
        "To align text",
        "To create tables"
      ],
      "answer": "To add recurring text at the top or bottom of pages"
    },
    {
      "question": "What does 'FTP' stand for?",
      "options": [
        "File Transfer Protocol",
        "Fast Terminal Program",
        "Folder Tracking Protocol",
        "File Type Processor"
      ],
      "answer": "File Transfer Protocol"
    },
    {
      "question": "Which MS Word shortcut key is used to apply bold formatting?",
      "options": [
        "Ctrl + B",
        "Ctrl + I",
        "Ctrl + U",
        "Ctrl + T"
      ],
      "answer": "Ctrl + B"
    },
    {
      "question": "What does 'HTML' stand for?",
      "options": [
        "HyperText Markup Language",
        "High-Level Text Language",
        "Hybrid Terminal Markup",
        "Host Text Management Language"
      ],
      "answer": "HyperText Markup Language"
    },
    {
      "question": "In MS Word, what is the purpose of the 'Table of Contents' feature?",
      "options": [
        "To create a clickable list of sections",
        "To insert footnotes",
        "To format text",
        "To merge documents"
      ],
      "answer": "To create a clickable list of sections"
    },
    {
      "question": "What does 'PDF' stand for?",
      "options": [
        "Portable Document Format",
        "Personal Data File",
        "Programmable Document Function",
        "Public Domain Format"
      ],
      "answer": "Portable Document Format"
    },
    {
      "question": "Which MS Word feature allows you to insert a cross-reference to another part of the document?",
      "options": [
        "Cross-reference",
        "Hyperlink",
        "Bookmark",
        "Footnote"
      ],
      "answer": "Cross-reference"
    },
    {
      "question": "What does 'UPS' stand for in computing?",
      "options": [
        "Uninterruptible Power Supply",
        "Universal Processor System",
        "User Program Storage",
        "Ultra Performance Software"
      ],
      "answer": "Uninterruptible Power Supply"
    },
    {
      "question": "In MS Word, what does the 'Find and Replace' feature do?",
      "options": [
        "Locates and substitutes text",
        "Inserts images",
        "Formats paragraphs",
        "Creates charts"
      ],
      "answer": "Locates and substitutes text"
    },
    {
      "question": "What does 'MAC' stand for in networking?",
      "options": [
        "Media Access Control",
        "Main Application Controller",
        "Memory Allocation Circuit",
        "Multi-Access Computer"
      ],
      "answer": "Media Access Control"
    },
    {
      "question": "Which MS Word shortcut key is used to save a document?",
      "options": [
        "Ctrl + S",
        "Ctrl + P",
        "Ctrl + O",
        "Ctrl + N"
      ],
      "answer": "Ctrl + S"
    },
    {
      "question": "What does 'DHCP' stand for?",
      "options": [
        "Dynamic Host Configuration Protocol",
        "Digital High-Speed Control Program",
        "Data Handling Control Processor",
        "Domain Host Communication Protocol"
      ],
      "answer": "Dynamic Host Configuration Protocol"
    },
    {
      "question": "In MS Word, what is the purpose of the 'Footnote' feature?",
      "options": [
        "To add explanatory notes at the bottom of a page",
        "To insert page numbers",
        "To align text",
        "To create charts"
      ],
      "answer": "To add explanatory notes at the bottom of a page"
    },
    {
      "question": "What does 'TCP' stand for?",
      "options": [
        "Transmission Control Protocol",
        "Terminal Communication Program",
        "Text Control Processor",
        "Tracking Code Protocol"
      ],
      "answer": "Transmission Control Protocol"
    },
    {
      "question": "Which MS Word feature allows you to insert a pre-designed cover page?",
      "options": [
        "Cover Page",
        "Template",
        "Style",
        "SmartArt"
      ],
      "answer": "Cover Page"
    },
    {
      "question": "What does 'API' stand for?",
      "options": [
        "Application Programming Interface",
        "Advanced Processor Integration",
        "Automated Program Installer",
        "Active Peripheral Interface"
      ],
      "answer": "Application Programming Interface"
    },
    {
      "question": "In MS Word, what does the 'Spelling and Grammar' tool do?",
      "options": [
        "Checks for spelling and grammatical errors",
        "Inserts tables",
        "Formats text",
        "Creates hyperlinks"
      ],
      "answer": "Checks for spelling and grammatical errors"
    },
    {
      "question": "What does 'VRAM' stand for?",
      "options": [
        "Video Random Access Memory",
        "Virtual Read-Only Memory",
        "Variable Runtime Application Memory",
        "Visual Resource Allocation Memory"
      ],
      "answer": "Video Random Access Memory"
    },
    {
      "question": "Which MS Word shortcut key is used to apply italic formatting?",
      "options": [
        "Ctrl + I",
        "Ctrl + B",
        "Ctrl + U",
        "Ctrl + T"
      ],
      "answer": "Ctrl + I"
    },
    {
      "question": "What does 'VoIP' stand for?",
      "options": [
        "Voice over Internet Protocol",
        "Virtual Output Input Processor",
        "Video Online Integration Platform",
        "Variable Operation Interface Protocol"
      ],
      "answer": "Voice over Internet Protocol"
    },
    {
      "question": "In MS Word, what is the purpose of the 'Page Break' feature?",
      "options": [
        "To start a new page",
        "To insert images",
        "To align text",
        "To create tables"
      ],
      "answer": "To start a new page"
    },
    {
      "question": "What does 'CMOS' stand for?",
      "options": [
        "Complementary Metal-Oxide Semiconductor",
        "Central Memory Operating System",
        "Circuit Management Output System",
        "Computerized Module Operating Software"
      ],
      "answer": "Complementary Metal-Oxide Semiconductor"
    },
    {
      "question": "Which MS Word feature allows you to insert a caption for an image or table?",
      "options": [
        "Caption",
        "Footnote",
        "Cross-reference",
        "Bookmark"
      ],
      "answer": "Caption"
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