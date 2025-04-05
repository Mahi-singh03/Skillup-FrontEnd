import React from "react";
import { Link } from "react-router-dom"; // Assuming you are using React Router for navigation
import "./Styles/WeeklyExanList.css";
const exams = [
  { id: "Weekly Exam 7 ( 05-03-2025 )", title: "Weekly Exam 7 ( 05-03-2025 )", path: "/Exams/Weekly-Exam/WE_7" },
  { id: "Weekly Exam 6 ( 29-03-2025 )", title: "Weekly Exam 6 ( 23-03-2025 )", path: "/Exams/Weekly-Exam/WE_6" },
  { id: "Weekly Exam 5 ( 22-03-2025 )", title: "Weekly Exam 5 ( 22-03-2025 )", path: "/Exams/Weekly-Exam/WE_5" },
  { id: "Weekly Exam 4 ( 15-03-2025 )", title: "Weekly Exam 4 ( 15-03-2025 )", path: "/Exams/Weekly-Exam/WE_4" },
  { id: "Weekly Exam 3 ( 08-03-2025 )", title: "Weekly Exam 3 ( 08-03-2025 )", path: "/Exams/Weekly-Exam/WE_3" },
  { id: "Weekly Exam 2 ( 01-03-2025 )", title: "Weekly Exam 2 ( 01-03-2025 )", path: "/Exams/Weekly-Exam/WE_2" },
  { id: "Weekly Exam 1 ( 22-02-2025 )", title: "Weekly Exam 1 ( 22-02-2025 ) ",path: "/Exams/Weekly-Exam/WE_1" },

];

const ExamList = () => {
  return (
    <div className="exam-list-container">
      <h1 className="main-heading">Available Exams</h1>
      <ul className="exam-list pt-12">
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