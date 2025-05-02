const getRandomQuestions = (questionsArray, num) => {
    const shuffled = [...questionsArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
};

const allQuestions = [
    {
      "question": "What does the `SUMIF` function do in Excel?",
      "options": [
        "Counts cells based on a condition",
        "Adds numbers based on a condition",
        "Finds the average of a range",
        "Multiplies values in a range"
      ],
      "answer": "Adds numbers based on a condition"
    },
    {
      "question": "Which shortcut key is used to insert a new worksheet in Excel?",
      "options": [
        "Ctrl + F11",
        "Shift + F11",
        "Alt + F4",
        "Ctrl + N"
      ],
      "answer": "Shift + F11"
    },
    {
      "question": "What is the purpose of the `IF` function in Excel?",
      "options": [
        "To perform conditional logic",
        "To merge cells",
        "To create charts",
        "To sort data"
      ],
      "answer": "To perform conditional logic"
    },
    {
      "question": "Which Excel feature allows you to filter data in a table?",
      "options": [
        "Conditional Formatting",
        "Data Validation",
        "AutoFilter",
        "PivotTable"
      ],
      "answer": "AutoFilter"
    },
    {
      "question": "What does the `CONCATENATE` function do in Excel?",
      "options": [
        "Joins text from multiple cells",
        "Splits text into multiple cells",
        "Counts non-empty cells",
        "Formats numbers as text"
      ],
      "answer": "Joins text from multiple cells"
    },
    {
      "question": "What does 'LAN' stand for?",
      "options": [
        "Local Area Network",
        "Large Access Node",
        "Linked Application Network",
        "Logical Address Number"
      ],
      "answer": "Local Area Network"
    },
    {
      "question": "What is the function of a router in a network?",
      "options": [
        "Stores data",
        "Directs data traffic",
        "Edits documents",
        "Creates backups"
      ],
      "answer": "Directs data traffic"
    },
    {
      "question": "What does 'ISP' stand for?",
      "options": [
        "Internet Service Provider",
        "Internal System Protocol",
        "Information Storage Platform",
        "Integrated Software Package"
      ],
      "answer": "Internet Service Provider"
    },
    {
      "question": "What is a 'cookie' in the context of browsing?",
      "options": [
        "A type of virus",
        "A small data file stored by websites",
        "A search engine tool",
        "A graphic file"
      ],
      "answer": "A small data file stored by websites"
    },
    {
      "question": "What does the `HLOOKUP` function do in Excel?",
      "options": [
        "Searches for a value in the top row of a table",
        "Counts cells with text",
        "Formats cells as currency",
        "Creates a histogram"
      ],
      "answer": "Searches for a value in the top row of a table"
    },
    {
      "question": "Which Excel tool is used to create charts?",
      "options": [
        "Insert > Chart",
        "Home > Format",
        "Data > Sort",
        "View > Zoom"
      ],
      "answer": "Insert > Chart"
    },
    {
      "question": "What does 'VPN' stand for?",
      "options": [
        "Virtual Private Network",
        "Visual Processing Node",
        "Variable Program Number",
        "Virtual Public Network"
      ],
      "answer": "Virtual Private Network"
    },
    {
      "question": "What is the purpose of a hyperlink in Excel?",
      "options": [
        "To lock cells",
        "To link to external resources or cells",
        "To highlight data",
        "To calculate sums"
      ],
      "answer": "To link to external resources or cells"
    },
    {
      "question": "What does 'DNS' stand for?",
      "options": [
        "Dynamic Network System",
        "Domain Name System",
        "Data Node Server",
        "Digital Network Storage"
      ],
      "answer": "Domain Name System"
    },
    {
      "question": "How do you protect a worksheet in Excel?",
      "options": [
        "Review > Protect Sheet",
        "Home > Lock Cells",
        "Insert > Password",
        "Data > Encrypt"
      ],
      "answer": "Review > Protect Sheet"
    },
    {
      "question": "What is a 'Trojan' in cybersecurity?",
      "options": [
        "A secure firewall",
        "A type of malware disguised as legitimate software",
        "A cloud storage service",
        "A programming language"
      ],
      "answer": "A type of malware disguised as legitimate software"
    },
    {
      "question": "What does the `TODAY()` function in Excel return?",
      "options": [
        "Current time",
        "Current date",
        "Day of the week",
        "Month of the year"
      ],
      "answer": "Current date"
    },
    {
      "question": "What does 'FTP' stand for?",
      "options": [
        "File Transfer Protocol",
        "Fast Text Processor",
        "Folder Tracking Program",
        "File Type Package"
      ],
      "answer": "File Transfer Protocol"
    },
    {
      "question": "What is the purpose of a PivotChart in Excel?",
      "options": [
        "To summarize data visually",
        "To merge worksheets",
        "To validate data",
        "To encrypt files"
      ],
      "answer": "To summarize data visually"
    },
    {
      "question": "What is 'bandwidth' in networking?",
      "options": [
        "The speed of a CPU",
        "The amount of data that can be transferred",
        "The size of a monitor",
        "The number of connected devices"
      ],
      "answer": "The amount of data that can be transferred"
    },
    {
      "question": "Which Excel function rounds a number to a specified number of digits?",
      "options": [
        "ROUND",
        "SUM",
        "AVERAGE",
        "MAX"
      ],
      "answer": "ROUND"
    },
    {
      "question": "What does 'SSL' stand for?",
      "options": [
        "Secure Sockets Layer",
        "System Software Link",
        "Standard Storage Library",
        "Simple Search Language"
      ],
      "answer": "Secure Sockets Layer"
    },
    {
      "question": "What is a 'digital footprint'?",
      "options": [
        "A physical computer chip",
        "The trail of data you leave online",
        "A type of printer",
        "A cloud storage device"
      ],
      "answer": "The trail of data you leave online"
    },
    {
      "question": "What does the `LEN` function in Excel do?",
      "options": [
        "Counts the number of characters in a cell",
        "Sums numbers in a range",
        "Finds the maximum value",
        "Formats text as bold"
      ],
      "answer": "Counts the number of characters in a cell"
    },
    {
      "question": "What is the purpose of two-factor authentication (2FA)?",
      "options": [
        "To increase internet speed",
        "To add an extra layer of security",
        "To compress files",
        "To create backups"
      ],
      "answer": "To add an extra layer of security"
    },
    {
      "question": "What does 'IP' stand for in 'IP address'?",
      "options": [
        "Internet Protocol",
        "Internal Processor",
        "Information Package",
        "Integrated Platform"
      ],
      "answer": "Internet Protocol"
    },
    {
      "question": "Which Excel feature validates data entry based on rules?",
      "options": [
        "Data Validation",
        "Conditional Formatting",
        "PivotTable",
        "AutoSum"
      ],
      "answer": "Data Validation"
    },
    {
      "question": "What is a 'blog'?",
      "options": [
        "A type of hardware",
        "An online journal or informational website",
        "A programming language",
        "A type of virus"
      ],
      "answer": "An online journal or informational website"
    },
    {
      "question": "What does the `NOW()` function in Excel return?",
      "options": [
        "Current date and time",
        "Current year",
        "Current month",
        "Current day"
      ],
      "answer": "Current date and time"
    },
    {
      "question": "What does 'IoT' stand for?",
      "options": [
        "Internet of Things",
        "Input/Output Terminal",
        "Internal Operation Task",
        "Integrated Online Tool"
      ],
      "answer": "Internet of Things"
    },
    {
      "question": "What is a 'cache' in browsing?",
      "options": [
        "A permanent storage device",
        "Temporary storage for faster website loading",
        "A type of software",
        "A security protocol"
      ],
      "answer": "Temporary storage for faster website loading"
    },
    {
      "question": "Which Excel function finds the largest value in a range?",
      "options": [
        "MIN",
        "MAX",
        "AVERAGE",
        "SUM"
      ],
      "answer": "MAX"
    },
    {
      "question": "What does 'SEO' stand for?",
      "options": [
        "Secure Email Option",
        "Search Engine Optimization",
        "System Error Output",
        "Software Extension Organizer"
      ],
      "answer": "Search Engine Optimization"
    },
    {
      "question": "What is the purpose of a data table in Excel?",
      "options": [
        "To perform what-if analysis",
        "To create charts",
        "To lock cells",
        "To merge worksheets"
      ],
      "answer": "To perform what-if analysis"
    },
    {
      "question": "What is a 'domain name'?",
      "options": [
        "A type of software",
        "The address of a website (e.g., google.com)",
        "A cloud storage service",
        "A computer processor"
      ],
      "answer": "The address of a website (e.g., google.com)"
    },
    {
      "question": "What does the `TRIM` function in Excel do?",
      "options": [
        "Removes extra spaces from text",
        "Rounds numbers",
        "Counts cells",
        "Merges text"
      ],
      "answer": "Removes extra spaces from text"
    },
    {
      "question": "What does 'AI' stand for?",
      "options": [
        "Automated Interface",
        "Artificial Intelligence",
        "Advanced Integration",
        "Application Installer"
      ],
      "answer": "Artificial Intelligence"
    },
    {
      "question": "What is a 'hotspot' in networking?",
      "options": [
        "A physical server",
        "A wireless internet access point",
        "A type of virus",
        "A cloud storage device"
      ],
      "answer": "A wireless internet access point"
    },
    {
      "question": "Which Excel shortcut selects the entire worksheet?",
      "options": [
        "Ctrl + A",
        "Ctrl + S",
        "Alt + F4",
        "Shift + F11"
      ],
      "answer": "Ctrl + A"
    },
    {
      "question": "What does 'GUI' stand for?",
      "options": [
        "Global User Interface",
        "Graphical User Interface",
        "General Utility Input",
        "Guided User Integration"
      ],
      "answer": "Graphical User Interface"
    },
    {
      "question": "What is a 'worm' in cybersecurity?",
      "options": [
        "A self-replicating malware",
        "A type of firewall",
        "A cloud storage service",
        "A programming tool"
      ],
      "answer": "A self-replicating malware"
    },
    {
      "question": "What does the `LEFT` function in Excel do?",
      "options": [
        "Extracts characters from the start of a text string",
        "Aligns text to the left",
        "Counts characters",
        "Merges cells"
      ],
      "answer": "Extracts characters from the start of a text string"
    },
    {
      "question": "What is 'spam' in the context of email?",
      "options": [
        "A type of virus",
        "Unwanted or unsolicited emails",
        "A cloud storage service",
        "A programming language"
      ],
      "answer": "Unwanted or unsolicited emails"
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
      "question": "Which Excel feature allows you to create drop-down lists?",
      "options": [
        "Conditional Formatting",
        "Data Validation",
        "PivotTable",
        "AutoFilter"
      ],
      "answer": "Data Validation"
    },
    {
      "question": "What is a 'browser extension'?",
      "options": [
        "A type of hardware",
        "A small program that adds functionality to a browser",
        "A cloud storage service",
        "A type of virus"
      ],
      "answer": "A small program that adds functionality to a browser"
    },
    {
      "question": "What does the `PMT` function in Excel calculate?",
      "options": [
        "Loan payments",
        "Text length",
        "Maximum value",
        "Current time"
      ],
      "answer": "Loan payments"
    },
    {
      "question": "What does 'URL' stand for?",
      "options": [
        "Uniform Resource Locator",
        "Universal Remote Link",
        "User Request Link",
        "Uploaded Resource List"
      ],
      "answer": "Uniform Resource Locator"
    },
    {
      "question": "What is a 'social engineering' attack?",
      "options": [
        "A hardware failure",
        "Manipulating people to gain confidential information",
        "A type of firewall",
        "A cloud storage service"
      ],
      "answer": "Manipulating people to gain confidential information"
    },
    {
      "question": "What does the `SUBTOTAL` function in Excel do?",
      "options": [
        "Calculates aggregates like sum or average for filtered data",
        "Merges cells",
        "Counts characters",
        "Formats text"
      ],
      "answer": "Calculates aggregates like sum or average for filtered data"
    },{
      "question": "What does the `VLOOKUP` function do in Excel?",
      "options": [
        "Searches for a value in the first column of a table",
        "Counts cells with numbers",
        "Formats cells as percentages",
        "Creates a pie chart"
      ],
      "answer": "Searches for a value in the first column of a table"
    },
    {
      "question": "Which Excel shortcut key copies a selected cell?",
      "options": [
        "Ctrl + C",
        "Ctrl + V",
        "Ctrl + X",
        "Ctrl + P"
      ],
      "answer": "Ctrl + C"
    },
    {
      "question": "What does 'HTTP' stand for?",
      "options": [
        "HyperText Transfer Protocol",
        "High-Speed Text Processor",
        "Hosted Terminal Platform",
        "Hybrid Transport Protocol"
      ],
      "answer": "HyperText Transfer Protocol"
    },
    {
      "question": "What is the purpose of the `COUNTIF` function in Excel?",
      "options": [
        "Counts cells based on a condition",
        "Sums numbers in a range",
        "Finds the minimum value",
        "Joins text strings"
      ],
      "answer": "Counts cells based on a condition"
    },
    {
      "question": "What does 'Wi-Fi' stand for?",
      "options": [
        "Wireless Fidelity",
        "Wired File Interface",
        "Web Frequency Integration",
        "Wide Field Internet"
      ],
      "answer": "Wireless Fidelity"
    },
    {
      "question": "Which Excel feature highlights cells based on their values?",
      "options": [
        "Conditional Formatting",
        "Data Validation",
        "AutoFilter",
        "PivotChart"
      ],
      "answer": "Conditional Formatting"
    },
    {
      "question": "What is a 'firewall' in networking?",
      "options": [
        "A security system to protect networks",
        "A data storage device",
        "A type of router",
        "A graphic design tool"
      ],
      "answer": "A security system to protect networks"
    },
    {
      "question": "What does the `AVERAGE` function in Excel do?",
      "options": [
        "Calculates the mean of a range",
        "Counts non-empty cells",
        "Joins text strings",
        "Rounds numbers"
      ],
      "answer": "Calculates the mean of a range"
    },
    {
      "question": "What does 'MAC' stand for in 'MAC address'?",
      "options": [
        "Media Access Control",
        "Main Application Code",
        "Memory Allocation Channel",
        "Multi-Access Computer"
      ],
      "answer": "Media Access Control"
    },
    {
      "question": "What is the purpose of the `TEXT` function in Excel?",
      "options": [
        "Formats numbers as text",
        "Counts characters",
        "Merges cells",
        "Sums numbers"
      ],
      "answer": "Formats numbers as text"
    },
    {
      "question": "What is 'phishing' in cybersecurity?",
      "options": [
        "A type of scam to steal sensitive information",
        "A cloud storage service",
        "A programming language",
        "A hardware component"
      ],
      "answer": "A type of scam to steal sensitive information"
    },
    {
      "question": "Which Excel shortcut key saves a workbook?",
      "options": [
        "Ctrl + S",
        "Ctrl + P",
        "Ctrl + Z",
        "Ctrl + Y"
      ],
      "answer": "Ctrl + S"
    },
    {
      "question": "What does 'HTML' stand for?",
      "options": [
        "HyperText Markup Language",
        "High-Tech Media Link",
        "Hosted Text Management Layer",
        "Hybrid Terminal Module"
      ],
      "answer": "HyperText Markup Language"
    },
    {
      "question": "What does the `MIN` function in Excel do?",
      "options": [
        "Finds the smallest value in a range",
        "Counts empty cells",
        "Formats text as bold",
        "Merges text strings"
      ],
      "answer": "Finds the smallest value in a range"
    },
    {
      "question": "What is a 'server' in networking?",
      "options": [
        "A computer that provides data to other computers",
        "A type of monitor",
        "A graphic design tool",
        "A programming language"
      ],
      "answer": "A computer that provides data to other computers"
    },
    {
      "question": "What does the `RIGHT` function in Excel do?",
      "options": [
        "Extracts characters from the end of a text string",
        "Aligns text to the right",
        "Counts non-empty cells",
        "Rounds numbers"
      ],
      "answer": "Extracts characters from the end of a text string"
    },
    {
      "question": "What does 'SaaS' stand for?",
      "options": [
        "Software as a Service",
        "System Access Security",
        "Storage and Analysis Service",
        "Simple Application Software"
      ],
      "answer": "Software as a Service"
    },
    {
      "question": "Which Excel tool is used to summarize large datasets?",
      "options": [
        "PivotTable",
        "Conditional Formatting",
        "AutoFilter",
        "Data Validation"
      ],
      "answer": "PivotTable"
    },
    {
      "question": "What is a 'byte' in computing?",
      "options": [
        "A unit of digital information (8 bits)",
        "A type of processor",
        "A graphic file format",
        "A security protocol"
      ],
      "answer": "A unit of digital information (8 bits)"
    },
    {
      "question": "What does the `UPPER` function in Excel do?",
      "options": [
        "Converts text to uppercase",
        "Counts characters",
        "Sums numbers",
        "Formats cells as currency"
      ],
      "answer": "Converts text to uppercase"
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