import React from "react";
import { Link } from "react-router-dom"; // Assuming you are using React Router for navigation
import "./Styles/WeeklyExanList.css";

const exams = [
  { id: "WE_1", title: "Weekly Exam 1", path: "/exam/WE_1" },
  { id: "WE_2", title: "Weekly Exam 2", path: "/exam/WE_2" },
  
];

const ExamList = () => {
  return (
    <div className="exam-list-container">
      <h1>Available Exams</h1>
      <ul className="exam-list">
        {exams.map((exam) => (
          <li key={exam.id} className="exam-item">
            <Link to={exam.path} className="exam-link">
              {exam.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExamList;