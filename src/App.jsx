import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./utils/components/ScrollToTop.jsx";
import Loader from "./utils/loader.jsx";
import MainLayout from "./Layouts/MainLayout.jsx";

import "./App.css";

// Lazy Load Components
const LandingPage = lazy(() => import("./components/LandingPage.jsx"));
const Home = lazy(() => import("./components/Home.jsx"));
const StudentRegistrationForm = lazy(() => import("./components/Register.jsx"));
const LoginForm = lazy(() => import("./components/Login.jsx"));
const WeeklyExams = lazy(() => import("./components/Exams/WeeklyExams.jsx"));
const Profile = lazy(() => import("./components/Profile.jsx"));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Landing Page (No Navbar) */}
          <Route path="/" element={<LandingPage />} />

          {/* Routes with Navbar inside MainLayout */}
          <Route element={<MainLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/courses" element={<h1>Courses</h1>} />
            <Route path="/register" element={<StudentRegistrationForm />} />
            <Route path="/about" element={<h1>About</h1>} />
            <Route path="/gallery" element={<h1>Gallery</h1>} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/logout" element={<h1>Logout</h1>} />

            {/* Exams Section */}
            <Route path="/exams/exam-instruction" element={<h1>Exam Instruction</h1>} />
            <Route path="/exams/exam-result" element={<h1>Exam Result</h1>} />
            <Route path="/exams/weekly-exam" element={<WeeklyExams />} />
            <Route path="/exams/final-exam" element={<h1>Final Exam</h1>} />

            {/* Verification Section */}
            <Route path="/verification/verify-student" element={<h1>Verify Student</h1>} />
            <Route path="/verification/verify-staff" element={<h1>Verify Staff</h1>} />

            {/* Resources Section */}
            <Route path="/resources/syllabus" element={<h1>Syllabus</h1>} />
            <Route path="/resources/study-material" element={<h1>Study Material</h1>} />

            {/* Job Section */}
            <Route path="/job/career-guidance" element={<h1>Career Guidance</h1>} />
            <Route path="/job/job-apply" element={<h1>Job Apply</h1>} />

            {/* Admin Section */}
            <Route path="/admin/dashboard" element={<h1>Dashboard</h1>} />
            <Route path="/admin/manage-users" element={<h1>Manage Users</h1>} />
            <Route path="/admin/manage-courses" element={<h1>Manage Courses</h1>} />
            <Route path="/admin/manage-exams" element={<h1>Manage Exams</h1>} />
            <Route path="/admin/manage-resources" element={<h1>Manage Resources</h1>} />
            <Route path="/admin/student-attendance" element={<h1>Student Attendance</h1>} />
            <Route path="/admin/staff-attendance" element={<h1>Staff Attendance</h1>} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
