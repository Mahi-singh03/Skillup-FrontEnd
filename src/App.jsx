import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./utils/components/ScrollToTop.jsx";
import Loader from "./utils/loader.jsx";
import MainLayout from "./Layouts/MainLayout.jsx";
import { UserProvider} from "./utils/components/UserContext.jsx";
import Profile from "./components/Profile.jsx";
import Login from "./components/Login.jsx"
import "./App.css";

// Lazy Load Components
const LandingPage = lazy(() => import("./components/LandingPage.jsx"));
const Home = lazy(() => import("./components/Home.jsx"));
const StudentRegistrationForm = lazy(() => import("./components/Register.jsx"));
const WeeklyExams = lazy(() => import("./components/Exams/WeeklyExams.jsx"));
const CardGrid = lazy(() => import("./components/Courses.jsx"));
const Gallery = lazy(()=> import("./components/Gallery.jsx"))

function App() {
  return (
   <UserProvider>
     <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Landing Page (No Navbar) */}
          <Route path="/" element={<LandingPage />} key="landing-page" />

          {/* Routes with Navbar inside MainLayout */}
          <Route element={<MainLayout />} key="main-layout">
            <Route path="/Home" element={<Home />} key="home" />
            <Route path="/Courses" element={<CardGrid />} key="courses" />
            <Route path="/Register" element={<StudentRegistrationForm />} key="register" />
            <Route path="/About" element={<h1>About</h1>} key="about" />
            <Route path="/Gallery" element={<Gallery/>} key="gallery" />
            <Route path="/Profile" element={<Profile />} key="profile" />
            <Route path="/Logout" element={<h1>Logout</h1>} key="logout" />

            {/* Login sections */}
            <Route path="/StudentLogin" element={<Login />} key="Login" />

            {/* Exams Section */}
            <Route path="/Exams/Exam-Instruction" element={<h1>Exam Instruction</h1>} key="exam-instruction" />
            <Route path="/Exams/Exam-Result" element={<h1>Exam Result</h1>} key="exam-result" />
            <Route path="/Exams/Weekly-Exam" element={<WeeklyExams />} key="weekly-exam" />
            <Route path="/Exams/Final-Exam" element={<h1>Final Exam</h1>} key="final-exam" />

            {/* Verification Section */}
            <Route path="/Verification/Verify-Student" element={<h1>Verify Student</h1>} key="verify-student" />
            <Route path="/Verification/Verify-Staff" element={<h1>Verify Staff</h1>} key="verify-staff" />

            {/* Resources Section */}
            <Route path="/Resources/Syllabus" element={<h1>Syllabus</h1>} key="syllabus" />
            <Route path="/Resources/Study-Material" element={<h1>Study Material</h1>} key="study-material" />

            {/* Job Section */}
            <Route path="/Job/Career-Guidance" element={<h1>Career Guidance</h1>} key="career-guidance" />
            <Route path="/Job/Job-Apply" element={<h1>Job Apply</h1>} key="job-apply" />

            {/* Admin Section */}
            <Route path="/Admin/Dashboard" element={<h1>Dashboard</h1>} key="dashboard" />
            <Route path="/Admin/Manage-Users" element={<h1>Manage Users</h1>} key="manage-users" />
            <Route path="/Admin/Manage-Courses" element={<h1>Manage Courses</h1>} key="manage-courses" />
            <Route path="/Admin/Manage-Exams" element={<h1>Manage Exams</h1>} key="manage-exams" />
            <Route path="/Admin/Manage-Resources" element={<h1>Manage Resources</h1>} key="manage-resources" />
            <Route path="/Admin/Student-Attendence" element={<h1>Student Attendance</h1>} key="student-attendance" />
            <Route path="/Admin/Staff-Attendence" element={<h1>Staff Attendance</h1>} key="staff-attendance" />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
    </UserProvider>
  );
}

export default App;