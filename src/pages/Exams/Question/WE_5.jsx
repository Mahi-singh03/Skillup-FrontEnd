const questions = [
    {
      question: "What is the main purpose of a computer's power button?",
      options: ["Turn on/off the computer", "Control volume", "Connect to internet", "Print documents"],
      answer: "Turn on/off the computer"
    },
    {
      question: "Which icon usually represents volume control?",
      options: ["Trash can", "Speaker symbol", "Folder icon", "Clock"],
      answer: "Speaker symbol"
    },
    {
      question: "What does 'Save' do in a document?",
      options: ["Delete the file", "Keep changes for later", "Print the document", "Change font color"],
      answer: "Keep changes for later"
    },
    {
      question: "What do you use to move the cursor on a laptop?",
      options: ["Keyboard", "Mouse", "Touchpad", "Monitor"],
      answer: "Touchpad"
    },
    {
      question: "What does a battery icon show?",
      options: ["Internet speed", "Remaining charge", "Storage space", "Screen brightness"],
      answer: "Remaining charge"
    },
    {
      question: "How do you make the screen brighter?",
      options: ["Volume up button", "Brightness settings", "Power button", "Keyboard lights"],
      answer: "Brightness settings"
    },
    {
      question: "What is a homepage?",
      options: ["First page of a website", "Computer background", "Email inbox", "File storage"],
      answer: "First page of a website"
    },
    {
      question: "Why would you bookmark a website?",
      options: ["To delete it", "To find it again easily", "To print it", "To share it"],
      answer: "To find it again easily"
    },
    {
      question: "What does downloading mean?",
      options: ["Sending files", "Receiving files", "Deleting files", "Editing files"],
      answer: "Receiving files"
    },
    {
      question: "Which symbol represents WiFi?",
      options: ["Star", "Trash can", "Curved radio waves", "Lightning bolt"],
      answer: "Curved radio waves"
    },
    {
      question: "What does a charging cable do?",
      options: ["Connect to internet", "Power the device", "Improve sound quality", "Increase storage"],
      answer: "Power the device"
    },
    {
      question: "What is an app icon?",
      options: ["Photo album", "Program shortcut", "Battery status", "Volume control"],
      answer: "Program shortcut"
    },
    {
      question: "What is the desktop background?",
      options: ["Computer case", "Screen image", "Keyboard layout", "Power cord"],
      answer: "Screen image"
    },
    {
      question: "How to properly turn off a computer?",
      options: ["Shut down option", "Unplug it", "Close the lid", "Press power button quickly"],
      answer: "Shut down option"
    },
    {
      question: "Where is the search bar usually found?",
      options: ["Top of browser", "Keyboard middle", "Monitor back", "Mouse settings"],
      answer: "Top of browser"
    },
    {
      question: "What is an email attachment?",
      options: ["Background theme", "Extra file included", "Password protection", "Email address"],
      answer: "Extra file included"
    },
    {
      question: "What does a webcam do?",
      options: ["Play sound", "Show typed text", "Capture video", "Store files"],
      answer: "Capture video"
    },
    {
      question: "What is a microphone used for?",
      options: ["Watching videos", "Recording sound", "Viewing photos", "Typing text"],
      answer: "Recording sound"
    },
    {
      question: "Why use headphones?",
      options: ["Increase internet speed", "Private listening", "Charge phone", "Improve typing"],
      answer: "Private listening"
    },
    {
      question: "First thing to try if computer freezes?",
      options: ["Shake it", "Restart it", "Unplug monitor", "Delete files"],
      answer: "Restart it"
    },
    {
      question: "What to check if keyboard isn't working?",
      options: ["Cable connection", "Monitor brightness", "Internet speed", "Mouse pad"],
      answer: "Cable connection"
    },
    {
      question: "What does the mouse scroll wheel do?",
      options: ["Click links", "Move up/down pages", "Change volume", "Open menus"],
      answer: "Move up/down pages"
    },
    {
      question: "What does a paperclip icon mean in email?",
      options: ["Important message", "Attachment", "Spam", "Reply option"],
      answer: "Attachment"
    },
    {
      question: "Where do deleted files go first?",
      options: ["Downloads folder", "Recycle Bin", "Desktop", "USB drive"],
      answer: "Recycle Bin"
    },
    {
      question: "What does Ctrl+Z usually do?",
      options: ["Undo last action", "Save document", "Print file", "New window"],
      answer: "Undo last action"
    },
    {
      question: "Where is the taskbar usually located?",
      options: ["Top of screen", "Right side", "Bottom of screen", "Middle of desktop"],
      answer: "Bottom of screen"
    },
    {
      question: "What does a speaker icon with X mean?",
      options: ["Muted sound", "Headphones connected", "Low battery", "WiFi off"],
      answer: "Muted sound"
    },
    {
      question: "What is the front camera called on phones?",
      options: ["Webcam", "Selfie camera", "Micro camera", "Video recorder"],
      answer: "Selfie camera"
    },
    {
      question: "What does the Spacebar do?",
      options: ["Create spaces between words", "Start new paragraph", "Delete text", "Capitalize letters"],
      answer: "Create spaces between words"
    },
    {
      question: "What is right-click used for?",
      options: ["Main selection", "Special options menu", "Drag items", "Zoom in"],
      answer: "Special options menu"
    }
];
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
  

export default questions;
