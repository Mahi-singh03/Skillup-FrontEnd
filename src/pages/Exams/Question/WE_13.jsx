const getRandomQuestions = (questionsArray, num) => {
    const shuffled = [...questionsArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
};


const allQuestions = [
    {
      "question": "In MS Word, which feature allows you to restrict editing to specific sections while allowing comments elsewhere?",
      "options": [
        "Encrypt with Password",
        "Restrict Editing",
        "Mark as Final",
        "Protect Document"
      ],
      "answer": "Restrict Editing"
    },
    {
      "question": "What does 'URL' stand for in computing?",
      "options": [
        "Unique Resource Label",
        "Uniform Resource Locator",
        "Universal Reference Link",
        "Unified Retrieval Location"
      ],
      "answer": "Uniform Resource Locator"
    },
    {
      "question": "In MS Word, what is the purpose of the 'Developer' tab when enabled?",
      "options": [
        "To create and manage macros and form controls",
        "To insert multimedia",
        "To manage document themes",
        "To adjust page margins"
      ],
      "answer": "To create and manage macros and form controls"
    },
    {
      "question": "What does 'HTML' stand for?",
      "options": [
        "HyperText Markup Language",
        "High Text Manipulation Language",
        "Hosted Terminal Markup Logic",
        "Hyperlink Text Management Layer"
      ],
      "answer": "HyperText Markup Language"
    },
    {
      "question": "In MS Word, which feature allows you to create a dynamic table of figures?",
      "options": [
        "Insert Caption",
        "Table of Contents",
        "References Tab",
        "Cross-Reference"
      ],
      "answer": "Insert Caption"
    },
    {
      "question": "What does 'BIOS' stand for in computer systems?",
      "options": [
        "Base Integrated Output System",
        "Basic Input/Output System",
        "Binary Internal Operating System",
        "Buffered Input/Output Service"
      ],
      "answer": "Basic Input/Output System"
    },
    {
      "question": "In MS Word, what is the purpose of the 'Navigation Pane' when enabled?",
      "options": [
        "To browse headings and search content",
        "To insert footnotes",
        "To manage styles",
        "To adjust line spacing"
      ],
      "answer": "To browse headings and search content"
    },
    {
      "question": "What does 'GUI' stand for in computing?",
      "options": [
        "Guided Update Interface",
        "Graphical User Interface",
        "General Utility Input",
        "Global User Integration"
      ],
      "answer": "Graphical User Interface"
    },
    {
      "question": "In MS Word, which feature allows you to save a document as a template for reuse?",
      "options": [
        "Quick Parts",
        "Styles",
        "Save As Template",
        "Macros"
      ],
      "answer": "Save As Template"
    },
    {
      "question": "What does 'HTTP' stand for?",
      "options": [
        "HyperText Transfer Protocol",
        "High Throughput Terminal Protocol",
        "Hyperlink Text Transmission Process",
        "Hosted Transfer Program"
      ],
      "answer": "HyperText Transfer Protocol"
    },
    {
      "question": "In MS Word, what is the file extension for a macro-enabled document?",
      "options": [
        ".docx",
        ".docm",
        ".dotx",
        ".doc"
      ],
      "answer": ".docm"
    },
    {
      "question": "What does 'LAN' stand for in networking?",
      "options": [
        "Linked Application Network",
        "Local Area Network",
        "Large Access Node",
        "Logical Access Network"
      ],
      "answer": "Local Area Network"
    },
    {
      "question": "In MS Word, what is the purpose of the 'Document Inspector'?",
      "options": [
        "To adjust text alignment",
        "To remove hidden data and personal information",
        "To insert dynamic fields",
        "To manage styles"
      ],
      "answer": "To remove hidden data and personal information"
    },
    {
      "question": "What does 'RAM' stand for in computing?",
      "options": [
        "Random Access Memory",
        "Reusable Active Memory",
        "Readily Available Module",
        "Rapid Access Mode"
      ],
      "answer": "Random Access Memory"
    },
    {
      "question": "In MS Word, which feature allows you to create a form with interactive fields like checkboxes?",
      "options": [
        "Content Controls",
        "Quick Parts",
        "SmartArt",
        "Mail Merge"
      ],
      "answer": "Content Controls"
    },
    {
      "question": "What does 'CPU' stand for in computing?",
      "options": [
        "Core Processor Unit",
        "Control Program Utility",
        "Central Processing Unit",
        "Computer Processing Unit"
      ],
      "answer": "Central Processing Unit"
    },
    {
      "question": "In MS Word, what is the purpose of the 'Building Blocks Organizer'?",
      "options": [
        "To insert footnotes",
        "To manage reusable content like cover pages",
        "To create macros",
        "To adjust line spacing"
      ],
      "answer": "To manage reusable content like cover pages"
    },
    {
      "question": "What does 'USB' stand for in computing?",
      "options": [
        "Unified System Buffer",
        "Universal Serial Bus",
        "Ultra Speed Bandwidth",
        "Unique Storage Base"
      ],
      "answer": "Universal Serial Bus"
    },
    {
      "question": "In MS Word, what is the purpose of the 'Trust Center' settings?",
      "options": [
        "To create styles",
        "To manage macro and security settings",
        "To adjust margins",
        "To insert multimedia"
      ],
      "answer": "To manage macro and security settings"
    },
    {
      "question": "What does 'ROM' stand for in computing?",
      "options": [
        "Read-Only Memory",
        "Random Output Module",
        "Reusable Operating Memory",
        "Rapid Online Memory"
      ],
      "answer": "Read-Only Memory"
    },
    {
      "question": "In MS Word, which feature allows you to update all cross-references at once?",
      "options": [
        "Quick Parts",
        "Update Field",
        "Table of Contents",
        "Insert Caption"
      ],
      "answer": "Update Field"
    },
    {
      "question": "What does 'WAN' stand for in networking?",
      "options": [
        "Wide Area Network",
        "Wireless Access Node",
        "Web Application Network",
        "Wired Active Network"
      ],
      "answer": "Wide Area Network"
    },
    {
      "question": "In MS Word, what is the purpose of the 'Compare' feature?",
      "options": [
        "To highlight differences between two versions",
        "To merge two documents",
        "To insert comments",
        "To adjust formatting"
      ],
      "answer": "To highlight differences between two versions"
    },
    {
      "question": "What does 'DNS' stand for in networking?",
      "options": [
        "Digital Node Structure",
        "Dynamic Network Service",
        "Domain Name System",
        "Data Network Standard"
      ],
      "answer": "Domain Name System"
    },
    {
      "question": "In MS Word, which feature allows you to insert a signature line?",
      "options": [
        "Signature Line",
        "Quick Parts",
        "Insert Picture",
        "SmartArt"
      ],
      "answer": "Signature Line"
    },
    {
      "question": "What does 'FTP' stand for in networking?",
      "options": [
        "Fast Terminal Process",
        "Formatted Text Protocol",
        "File Transfer Protocol",
        "Flexible Transmission Platform"
      ],
      "answer": "File Transfer Protocol"
    },
    {
      "question": "In MS Word, what is the purpose of the 'Field' feature?",
      "options": [
        "To adjust text alignment",
        "To insert dynamic content like dates or page numbers",
        "To manage styles",
        "To insert media"
      ],
      "answer": "To insert dynamic content like dates or page numbers"
    },
    {
      "question": "What does 'IP' stand for in networking?",
      "options": [
        "Information Packet",
        "Internet Protocol",
        "Integrated Platform",
        "Internal Processor"
      ],
      "answer": "Internet Protocol"
    },
    {
      "question": "In MS Word, which feature allows you to create a custom dictionary for specific terms?",
      "options": [
        "Custom Dictionary",
        "Editor",
        "Thesaurus",
        "Spelling Options"
      ],
      "answer": "Custom Dictionary"
    },
    {
      "question": "What does 'VGA' stand for in computing?",
      "options": [
        "Virtual Graphic Algorithm",
        "Video Graphics Array",
        "Visual Gateway Adapter",
        "Vector Graphics Application"
      ],
      "answer": "Video Graphics Array"
    },
    {
      "question": "In MS Word, what is the purpose of the 'Combine Documents' feature?",
      "options": [
        "To insert comments",
        "To merge revisions from multiple versions",
        "To adjust formatting",
        "To create hyperlinks"
      ],
      "answer": "To merge revisions from multiple versions"
    },
    {
      "question": "What does 'OS' stand for in computing?",
      "options": [
        "Operating System",
        "Output Service",
        "Optimized Storage",
        "Online Software"
      ],
      "answer": "Operating System"
    },
    {
      "question": "In MS Word, which feature allows you to insert a pre-formatted title page?",
      "options": [
        "SmartArt",
        "Insert Cover Page",
        "Quick Parts",
        "Page Layout"
      ],
      "answer": "Insert Cover Page"
    },
    {
      "question": "What does 'SSD' stand for in computing?",
      "options": [
        "Secure Storage Disk",
        "System Storage Device",
        "Solid State Drive",
        "Static System Drive"
      ],
      "answer": "Solid State Drive"
    },
    {
      "question": "In MS Word, what is the purpose of the 'Drop Cap' feature?",
      "options": [
        "To enlarge the first letter of a paragraph",
        "To insert footnotes",
        "To adjust line spacing",
        "To manage styles"
      ],
      "answer": "To enlarge the first letter of a paragraph"
    },
    {
      "question": "What does 'HDD' stand for in computing?",
      "options": [
        "Hard Disk Drive",
        "High Density Disk",
        "Hybrid Data Drive",
        "Hyper Data Device"
      ],
      "answer": "Hard Disk Drive"
    },
    {
      "question": "In MS Word, which feature allows you to insert a table of authorities?",
      "options": [
        "Table of Contents",
        "Table of Authorities",
        "References Tab",
        "Insert Caption"
      ],
      "answer": "Table of Authorities"
    },
    {
      "question": "What does 'API' stand for in computing?",
      "options": [
        "Application Programming Interface",
        "Automated Process Integration",
        "Active Program Instruction",
        "Adaptive Protocol Interface"
      ],
      "answer": "Application Programming Interface"
    },
    {
      "question": "In MS Word, what is the purpose of the 'Text Box' feature?",
      "options": [
        "To insert movable text containers",
        "To adjust line spacing",
        "To manage citations",
        "To insert footnotes"
      ],
      "answer": "To insert movable text containers"
    },
    {
      "question": "What does 'MAC' stand for in networking?",
      "options": [
        "Main Application Controller",
        "Media Access Control",
        "Memory Allocation Channel",
        "Multi-Access Circuit"
      ],
      "answer": "Media Access Control"
    },
    {
      "question": "In MS Word, which feature allows you to protect a document with a password?",
      "options": [
        "Restrict Editing",
        "Encrypt with Password",
        "Mark as Final",
        "Lock Document"
      ],
      "answer": "Encrypt with Password"
    },
    {
      "question": "What does 'GPU' stand for in computing?",
      "options": [
        "Global Performance Unit",
        "Grid Power Utility",
        "Graphics Processing Unit",
        "General Processing Unit"
      ],
      "answer": "Graphics Processing Unit"
    },
    {
      "question": "In MS Word, what is the purpose of the 'SmartArt' feature?",
      "options": [
        "To create visual diagrams and graphics",
        "To insert tables",
        "To manage citations",
        "To adjust text alignment"
      ],
      "answer": "To create visual diagrams and graphics"
    },
    {
      "question": "What does 'DVD' stand for in computing?",
      "options": [
        "Digital Versatile Disc",
        "Dynamic Video Drive",
        "Direct Virtual Device",
        "Data Video Disk"
      ],
      "answer": "Digital Versatile Disc"
    },
    {
      "question": "In MS Word, what is the shortcut to open the 'Find and Replace' dialog?",
      "options": [
        "Ctrl+R",
        "Ctrl+G",
        "Ctrl+H",
        "Ctrl+F"
      ],
      "answer": "Ctrl+H"
    },
    {
      "question": "What does 'SATA' stand for in computing?",
      "options": [
        "Systematic Array Transfer Architecture",
        "Serial Advanced Technology Attachment",
        "Standard Access Terminal Adapter",
        "Secure Automated Transfer Array"
      ],
      "answer": "Serial Advanced Technology Attachment"
    },
    {
      "question": "In MS Word, which feature allows you to insert pre-formatted text or graphics?",
      "options": [
        "Quick Parts",
        "Bookmarks",
        "Hyperlinks",
        "Comments"
      ],
      "answer": "Quick Parts"
    },
    {
      "question": "What does 'PCI' stand for in computing?",
      "options": [
        "Programmable Circuit Interface",
        "Peripheral Component Interconnect",
        "Parallel Computing Interface",
        "Primary Component Integration"
      ],
      "answer": "Peripheral Component Interconnect"
    },
    {
      "question": "In MS Word, what is the purpose of the 'Watermark' feature?",
      "options": [
        "To manage citations",
        "To add a faint background text or image",
        "To insert dynamic fields",
        "To adjust margins"
      ],
      "answer": "To add a faint background text or image"
    },
    {
      "question": "What does 'TCP' stand for in networking?",
      "options": [
        "Terminal Control Protocol",
        "Transmission Control Protocol",
        "Text Communication Process",
        "Transfer Capacity Protocol"
      ],
      "answer": "Transmission Control Protocol"
    },
    {
      "question": "In MS Word, which tab contains the 'WordArt' feature?",
      "options": [
        "Home",
        "Design",
        "Insert",
        "Layout"
      ],
      "answer": "Insert"
    },
    {
      "question": "What does 'UPS' stand for in computing?",
      "options": [
        "Unified Power System",
        "Uninterruptible Power Supply",
        "Ultra Processing Speed",
        "Universal Peripheral Service"
      ],
      "answer": "Uninterruptible Power Supply"
    },
    {
      "question": "In MS Word, what is the purpose of the 'Ruler' feature?",
      "options": [
        "To adjust margins and tabs",
        "To measure page size",
        "To draw lines",
        "To align images"
      ],
      "answer": "To adjust margins and tabs"
    },
    {
      "question": "What does 'NAT' stand for in networking?",
      "options": [
        "Network Address Translation",
        "Node Access Terminal",
        "Neural Address Tracker",
        "Networked Application Tool"
      ],
      "answer": "Network Address Translation"
    },
    {
      "question": "In MS Word, which feature allows you to record a sequence of commands for automation?",
      "options": [
        "Styles",
        "Macros",
        "Templates",
        "Quick Parts"
      ],
      "answer": "Macros"
    },
    {
      "question": "What does 'DHCP' stand for in networking?",
      "options": [
        "Dynamic Host Configuration Protocol",
        "Direct Host Control Process",
        "Distributed Hardware Communication Protocol",
        "Data Handling Control Program"
      ],
      "answer": "Dynamic Host Configuration Protocol"
    },
    {
      "question": "In MS Word, what is the purpose of the 'Line and Paragraph Spacing' feature?",
      "options": [
        "To insert dynamic fields",
        "To adjust spacing between lines and paragraphs",
        "To manage styles",
        "To align text"
      ],
      "answer": "To adjust spacing between lines and paragraphs"
    },
    {
      "question": "What does 'RAID' stand for in computing?",
      "options": [
        "Redundant Array of Independent Disks",
        "Rapid Access Integrated Data",
        "Randomized Array of Internal Drives",
        "Reliable Archive of Indexed Data"
      ],
      "answer": "Redundant Array of Independent Disks"
    },
    {
      "question": "In MS Word, which feature allows you to insert a bibliography in a specific citation style?",
      "options": [
        "Table of Contents",
        "Citations & Bibliography",
        "Quick Parts",
        "Insert Caption"
      ],
      "answer": "Citations & Bibliography"
    },
    {
      "question": "What does 'VoIP' stand for in computing?",
      "options": [
        "Virtual Office Integration Protocol",
        "Voice over Internet Protocol",
        "Vectorized Operational Input Process",
        "Volatile Online Interface Program"
      ],
      "answer": "Voice over Internet Protocol"
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