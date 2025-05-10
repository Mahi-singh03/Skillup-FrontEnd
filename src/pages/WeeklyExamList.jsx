import React from "react";
import { Link } from "react-router-dom"; 
import "./Styles/WeeklyExanList.css";
const exams = [

  { id: "Weekly Exam 11 ( 10-05-2025 )", title: "Weekly Exam 11 ( 10-05-2025 )", path: "/Exams/Weekly-Exam/WE_11"},
  { id: "Weekly Exam 10 ( 02-05-2025 )", title: "Weekly Exam 10 ( 03-05-2025 )", path: "/Exams/Weekly-Exam/WE_10"},
  { id: "Weekly Exam 09 ( 02-05-2025 )", title: "Weekly Exam 09 ( 03-05-2025 )", path: "/Exams/Weekly-Exam/WE_9" },
  { id: "Weekly Exam 08 ( 19-04-2025 )", title: "Weekly Exam 08 ( 19-04-2025 )", path: "/Exams/Weekly-Exam/WE_8" },
  { id: "Weekly Exam 07 ( 05-03-2025 )", title: "Weekly Exam 07 ( 05-04-2025 )", path: "/Exams/Weekly-Exam/WE_7" },
  { id: "Weekly Exam 06 ( 29-03-2025 )", title: "Weekly Exam 06 ( 29-03-2025 )", path: "/Exams/Weekly-Exam/WE_6" },
  { id: "Weekly Exam 05 ( 22-03-2025 )", title: "Weekly Exam 05 ( 22-03-2025 )", path: "/Exams/Weekly-Exam/WE_5" },
  { id: "Weekly Exam 04 ( 15-03-2025 )", title: "Weekly Exam 04 ( 15-03-2025 )", path: "/Exams/Weekly-Exam/WE_4" },
  { id: "Weekly Exam 03 ( 08-03-2025 )", title: "Weekly Exam 03 ( 08-03-2025 )", path: "/Exams/Weekly-Exam/WE_3" },
  { id: "Weekly Exam 02 ( 01-03-2025 )", title: "Weekly Exam 02 ( 01-03-2025 )", path: "/Exams/Weekly-Exam/WE_2" },
  { id: "Weekly Exam 01 ( 22-02-2025 )", title: "Weekly Exam 01 ( 22-02-2025 )", path: "/Exams/Weekly-Exam/WE_1" },

];

const ExamList = () => { 
  return (
    <div className="exam-list-container">
      <h1 className="main-heading">Available Exams</h1>
      <ul className="exam-list ">
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