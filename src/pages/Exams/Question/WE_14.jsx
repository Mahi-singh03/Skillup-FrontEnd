const getRandomQuestions = (questionsArray, num) => {
    const shuffled = [...questionsArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
};


const allQuestions = [
    // MS Excel Questions (20)
    {
      "question": "In MS Excel, what is the shortcut to save a workbook?",
      "options": [
        "Ctrl+V",
        "Ctrl+C",
        "Ctrl+S",
        "Ctrl+P"
      ],
      "answer": "Ctrl+S"
    },
    {
      "question": "What does the SUM function do in MS Excel?",
      "options": [
        "Counts cells",
        "Adds numbers in a range",
        "Averages numbers",
        "Finds the maximum value"
      ],
      "answer": "Adds numbers in a range"
    },
    {
      "question": "In MS Excel, which tab contains the 'Insert Chart' option?",
      "options": [
        "Insert",
        "Home",
        "View",
        "Data"
      ],
      "answer": "Insert"
    },
    {
      "question": "What symbol starts a formula in MS Excel?",
      "options": [
        "#",
        "=",
        "&",
        "@"
      ],
      "answer": "="
    },
    {
      "question": "In MS Excel, what does the 'AutoFill' feature do?",
      "options": [
        "Formats cells automatically",
        "Fills cells with a series or pattern",
        "Merges multiple cells",
        "Sorts data"
      ],
      "answer": "Fills cells with a series or pattern"
    },
    {
      "question": "Which MS Excel function displays the current date?",
      "options": [
        "NOW()",
        "TODAY()",
        "DATE()",
        "TIME()"
      ],
      "answer": "TODAY()"
    },
    {
      "question": "In MS Excel, how do you bold text?",
      "options": [
        "Ctrl+U",
        "Ctrl+B",
        "Ctrl+I",
        "Ctrl+E"
      ],
      "answer": "Ctrl+B"
    },
    {
      "question": "What is the default font in MS Excel?",
      "options": [
        "Times New Roman",
        "Arial",
        "Calibri",
        "Verdana"
      ],
      "answer": "Calibri"
    },
    {
      "question": "In MS Excel, which feature aligns text to the center of a cell?",
      "options": [
        "Wrap Text",
        "Merge Cells",
        "Center Alignment",
        "Format Painter"
      ],
      "answer": "Center Alignment"
    },
    {
      "question": "What does the 'Freeze Panes' feature do in MS Excel?",
      "options": [
        "Locks rows or columns while scrolling",
        "Merges cells",
        "Formats borders",
        "Sorts data"
      ],
      "answer": "Locks rows or columns while scrolling"
    },
    {
      "question": "In MS Excel, which tab allows you to sort data?",
      "options": [
        "Home",
        "Insert",
        "Data",
        "View"
      ],
      "answer": "Data"
    },
    {
      "question": "What is the maximum number of rows in an MS Excel worksheet (up to Excel 2016)?",
      "options": [
        "65,536",
        "1,048,576",
        "256",
        "16,384"
      ],
      "answer": "1,048,576"
    },
    {
      "question": "In MS Excel, which function counts the number of cells with numbers?",
      "options": [
        "COUNT",
        "SUM",
        "AVERAGE",
        "MAX"
      ],
      "answer": "COUNT"
    },
    {
      "question": "What does the 'Format Cells' dialog box in MS Excel allow you to do?",
      "options": [
        "Change font size only",
        "Adjust number formats and alignment",
        "Insert charts",
        "Create formulas"
      ],
      "answer": "Adjust number formats and alignment"
    },
    {
      "question": "In MS Excel, what is the shortcut to copy a cell’s content?",
      "options": [
        "Ctrl+X",
        "Ctrl+C",
        "Ctrl+V",
        "Ctrl+Z"
      ],
      "answer": "Ctrl+C"
    },
    {
      "question": "Which MS Excel feature removes borders from cells?",
      "options": [
        "Choose 'None' in Border tab",
        "Clear Formatting",
        "Delete Border tool",
        "Erase Border"
      ],
      "answer": "Choose 'None' in Border tab"
    },
    {
      "question": "In MS Excel, what does the 'Wrap Text' feature do?",
      "options": [
        "Merges cells",
        "Displays text on multiple lines in a cell",
        "Aligns text to the right",
        "Changes font color"
      ],
      "answer": "Displays text on multiple lines in a cell"
    },
    {
      "question": "What is the default file extension for an MS Excel workbook?",
      "options": [
        ".xls",
        ".xlsx",
        ".docx",
        ".txt"
      ],
      "answer": ".xlsx"
    },
    {
      "question": "In MS Excel, which chart type shows proportions of a whole?",
      "options": [
        "Bar Chart",
        "Line Chart",
        "Pie Chart",
        "Column Chart"
      ],
      "answer": "Pie Chart"
    },
    {
      "question": "In MS Excel, what does the 'Print Preview' feature show?",
      "options": [
        "How the worksheet will look when printed",
        "The formula view",
        "Hidden rows and columns",
        "Cell references"
      ],
      "answer": "How the worksheet will look when printed"
    },
    // Tally Questions (20)
    {
      "question": "In Tally, what is the shortcut to create a new ledger?",
      "options": [
        "Alt+C",
        "Ctrl+L",
        "F2",
        "F12"
      ],
      "answer": "Alt+C"
    },
    {
      "question": "What is the primary function of Tally software?",
      "options": [
        "Word processing",
        "Accounting and inventory management",
        "Graphic design",
        "Spreadsheet analysis"
      ],
      "answer": "Accounting and inventory management"
    },
    {
      "question": "In Tally, which voucher is used to record a sales transaction?",
      "options": [
        "Payment Voucher",
        "Sales Voucher",
        "Receipt Voucher",
        "Journal Voucher"
      ],
      "answer": "Sales Voucher"
    },
    {
      "question": "What does the 'Gateway of Tally' refer to?",
      "options": [
        "The main menu of Tally",
        "A report generator",
        "A backup tool",
        "The login screen"
      ],
      "answer": "The main menu of Tally"
    },
    {
      "question": "In Tally, which key is used to save a voucher entry?",
      "options": [
        "F10",
        "Enter",
        "Ctrl+S",
        "F5"
      ],
      "answer": "Enter"
    },
    {
      "question": "What is a 'Ledger' in Tally?",
      "options": [
        "A report of transactions",
        "A financial account like cash or sales",
        "A type of voucher",
        "A backup file"
      ],
      "answer": "A financial account like cash or sales"
    },
    {
      "question": "In Tally, which voucher records cash payments?",
      "options": [
        "Payment Voucher",
        "Contra Voucher",
        "Receipt Voucher",
        "Sales Voucher"
      ],
      "answer": "Payment Voucher"
    },
    {
      "question": "What is the shortcut to view the Balance Sheet in Tally?",
      "options": [
        "F1",
        "F2",
        "Alt+F1",
        "F5"
      ],
      "answer": "F5"
    },
    {
      "question": "In Tally, what is the purpose of the 'Company Info' menu?",
      "options": [
        "To create or modify company details",
        "To generate reports",
        "To import data",
        "To manage vouchers"
      ],
      "answer": "To create or modify company details"
    },
    {
      "question": "Which Tally feature tracks stock items?",
      "options": [
        "Inventory Management",
        "Payroll",
        "Taxation",
        "Budgeting"
      ],
      "answer": "Inventory Management"
    },
    {
      "question": "In Tally, which key changes the date of a voucher?",
      "options": [
        "F2",
        "F1",
        "Ctrl+D",
        "Alt+D"
      ],
      "answer": "F2"
    },
    {
      "question": "What is a 'Group' in Tally?",
      "options": [
        "A collection of ledgers with similar nature",
        "A type of voucher",
        "A financial report",
        "A backup file"
      ],
      "answer": "A collection of ledgers with similar nature"
    },
    {
      "question": "In Tally, which voucher is used for bank transactions?",
      "options": [
        "Sales Voucher",
        "Contra Voucher",
        "Journal Voucher",
        "Receipt Voucher"
      ],
      "answer": "Contra Voucher"
    },
    {
      "question": "What does the 'F11' key do in Tally?",
      "options": [
        "Opens company features",
        "Saves a voucher",
        "Generates a report",
        "Changes the date"
      ],
      "answer": "Opens company features"
    },
    {
      "question": "In Tally, which report shows profit and loss?",
      "options": [
        "Trial Balance",
        "Balance Sheet",
        "Profit & Loss A/c",
        "Day Book"
      ],
      "answer": "Profit & Loss A/c"
    },
    {
      "question": "What is the shortcut to exit Tally?",
      "options": [
        "Ctrl+Q",
        "Alt+X",
        "Esc",
        "F12"
      ],
      "answer": "Alt+X"
    },
    {
      "question": "In Tally, which voucher records money received?",
      "options": [
        "Payment Voucher",
        "Receipt Voucher",
        "Sales Voucher",
        "Contra Voucher"
      ],
      "answer": "Receipt Voucher"
    },
    {
      "question": "What is the purpose of the 'Stock Summary' in Tally?",
      "options": [
        "To show financial transactions",
        "To display inventory details",
        "To list vouchers",
        "To manage ledgers"
      ],
      "answer": "To display inventory details"
    },
    {
      "question": "In Tally, which key opens the calculator?",
      "options": [
        "Ctrl+N",
        "F12",
        "Alt+C",
        "Ctrl+C"
      ],
      "answer": "Ctrl+N"
    },
    {
      "question": "What is the default financial year start date in Tally for India?",
      "options": [
        "January 1",
        "April 1",
        "July 1",
        "October 1"
      ],
      "answer": "April 1"
    },
    // Accounting Questions (20)
    {
      "question": "What is the full form of 'GAAP' in accounting?",
      "options": [
        "General Accounting and Auditing Principles",
        "Generally Accepted Accounting Principles",
        "Global Accounting Application Process",
        "Government Approved Accounting Practices"
      ],
      "answer": "Generally Accepted Accounting Principles"
    },
    {
      "question": "In accounting, what is a 'Debit'?",
      "options": [
        "Money received",
        "An entry increasing assets or expenses",
        "Money paid out",
        "A type of credit"
      ],
      "answer": "An entry increasing assets or expenses"
    },
    {
      "question": "What does the term 'Ledger' mean in accounting?",
      "options": [
        "A financial statement",
        "A record of transactions for an account",
        "A tax document",
        "A budget plan"
      ],
      "answer": "A record of transactions for an account"
    },
    {
      "question": "In accounting, what is 'Revenue'?",
      "options": [
        "Money spent on expenses",
        "Income earned from sales or services",
        "A type of liability",
        "Money borrowed"
      ],
      "answer": "Income earned from sales or services"
    },
    {
      "question": "What is the full form of 'VAT' in accounting?",
      "options": [
        "Variable Accounting Tax",
        "Value Added Tax",
        "Vendor Adjustment Tax",
        "Voluntary Accounting Tariff"
      ],
      "answer": "Value Added Tax"
    },
    {
      "question": "In accounting, what is an 'Asset'?",
      "options": [
        "Money owed to others",
        "A resource owned by a business",
        "An expense",
        "A type of revenue"
      ],
      "answer": "A resource owned by a business"
    },
    {
      "question": "What is a 'Balance Sheet' in accounting?",
      "options": [
        "A record of daily transactions",
        "A statement of assets, liabilities, and equity",
        "A tax report",
        "A budget forecast"
      ],
      "answer": "A statement of assets, liabilities, and equity"
    },
    {
      "question": "In accounting, what does 'Credit' mean?",
      "options": [
        "An entry increasing liabilities or revenue",
        "Money spent",
        "A type of asset",
        "A loan repayment"
      ],
      "answer": "An entry increasing liabilities or revenue"
    },
    {
      "question": "What is the full form of 'GST' in accounting?",
      "options": [
        "General Sales Tax",
        "Goods and Services Tax",
        "Global Standard Tax",
        "Government Service Tariff"
      ],
      "answer": "Goods and Services Tax"
    },
    {
      "question": "In accounting, what is an 'Expense'?",
      "options": [
        "Money earned from sales",
        "Cost incurred to run a business",
        "A type of asset",
        "Money invested"
      ],
      "answer": "Cost incurred to run a business"
    },
    {
      "question": "What is a 'Trial Balance' in accounting?",
      "options": [
        "A list of all debits and credits to check accuracy",
        "A profit report",
        "A tax calculation",
        "A budget plan"
      ],
      "answer": "A list of all debits and credits to check accuracy"
    },
    {
      "question": "In accounting, what is 'Depreciation'?",
      "options": [
        "An increase in asset value",
        "A decrease in asset value over time",
        "A type of revenue",
        "A loan repayment"
      ],
      "answer": "A decrease in asset value over time"
    },
    {
      "question": "What does 'P&L' stand for in accounting?",
      "options": [
        "Profit and Loss",
        "Payment and Ledger",
        "Plan and Liability",
        "Purchase and Loan"
      ],
      "answer": "Profit and Loss"
    },
    {
      "question": "In accounting, what is a 'Liability'?",
      "options": [
        "Money owed by a business",
        "A type of revenue",
        "An owned resource",
        "A profit margin"
      ],
      "answer": "Money owed by a business"
    },
    {
      "question": "What is the full form of 'CASH' in accounting principles?",
      "options": [
        "Current Assets and Standard Holdings",
        "Cash Accounting Standard Hierarchy",
        "No specific full form; refers to physical money",
        "Certified Accounting System Handling"
      ],
      "answer": "No specific full form; refers to physical money"
    },
    {
      "question": "In accounting, what is a 'Journal Entry'?",
      "options": [
        "A financial forecast",
        "A record of a transaction",
        "A tax report",
        "A budget summary"
      ],
      "answer": "A record of a transaction"
    },
    {
      "question": "What is 'Accounts Receivable' in accounting?",
      "options": [
        "Money owed to a business by customers",
        "Money paid to suppliers",
        "A type of expense",
        "A profit margin"
      ],
      "answer": "Money owed to a business by customers"
    },
    {
      "question": "In accounting, what does 'Equity' represent?",
      "options": [
        "A type of expense",
        "The owner’s interest in the business",
        "Money borrowed",
        "A tax liability"
      ],
      "answer": "The owner’s interest in the business"
    },
    {
      "question": "What is the full form of 'TDS' in accounting?",
      "options": [
        "Tax Deducted at Source",
        "Temporary Deposit System",
        "Total Debt Service",
        "Taxable Dividend Standard"
      ],
      "answer": "Tax Deducted at Source"
    },
    {
      "question": "In accounting, what is a 'Profit'?",
      "options": [
        "Money spent on expenses",
        "Revenue minus expenses",
        "A type of liability",
        "A loan amount"
      ],
      "answer": "Revenue minus expenses"
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