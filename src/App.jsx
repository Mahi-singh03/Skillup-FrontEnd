import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./utils/components/ScrollToTop.jsx";
import Loader from "./utils/loader.jsx";
import MainLayout from "./Layouts/MainLayout.jsx";
import { UserProvider } from "./utils/components/UserContext.jsx";
import ProtectedRoute from "./utils/ProtectedRoute.jsx";
import Profile from "./pages/Profile.jsx";
import Login from "./pages/Login.jsx";
import "./App.css";

// Lazy Load Components
const LandingPage = lazy(() => import("./pages/LandingPage.jsx"));
const Home = lazy(() => import("./pages/Home.jsx"));
const Register = lazy(() => import("./pages/Register.jsx"));
const Courses = lazy(() => import("./pages/Courses.jsx"));
const Gallery = lazy(() => import("./pages/Gallery.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const ExamList = lazy(() => import("./pages/WeeklyExamList.jsx"));

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<Loader />}>
          <Routes>
            {/* Landing Page (No Navbar) */}
            <Route path="/" element={<LandingPage />} />

            {/* Routes with Navbar inside MainLayout */}
            <Route element={<MainLayout />}>
              <Route path="/Home" element={<Home />} />
              <Route path="/Courses" element={<Courses />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/About" element={<About />} />
              <Route path="/Gallery" element={<Gallery />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Logout" element={<h1>Logout</h1>} />
              <Route path="/StudentLogin" element={<Login />} />

              {/* Online Exams */}
              <Route path="/Online-Exam/Register" element={<h1>Online Exam Register</h1>} />
              <Route path="/Online-Exam/Course-Videos" element={<h1>Course Videos</h1>} />

              {/* Exams Section */}
              <Route path="/Exams/Weekly-Exam" element={<ProtectedRoute><ExamList /></ProtectedRoute>} />
              <Route path="/Exams/Weekly-Exam/:examId" element={<ProtectedRoute><h1>Weekly Exam Detail</h1></ProtectedRoute>} />
              <Route path="/Exams/Final-Exam" element={<ProtectedRoute><h1>Final Exam</h1></ProtectedRoute>} />
              <Route path="/Exams/Exam-Result" element={<ProtectedRoute><h1>Exam Result</h1></ProtectedRoute>} />
              <Route path="/Exams/Exam-Instruction" element={<ProtectedRoute><h1>Exam Instruction</h1></ProtectedRoute>} />

              {/* Verification */}
              <Route path="/Verification/Verify-Student" element={<h1>Verify Student</h1>} />
              <Route path="/Verification/Verify-Staff" element={<h1>Verify Staff</h1>} />

              {/* Resources */}
              <Route path="/Resources/Syllabus" element={<h1>Syllabus</h1>} />
              <Route path="/Resources/Study-Material" element={<h1>Study Material</h1>} />

              {/* Job Section */}
              <Route path="/Job/Career-Guidance" element={<h1>Career Guidance</h1>} />
              <Route path="/Job/Job-Apply" element={<h1>Job Apply</h1>} />

              {/* Admin Section */}
              <Route path="/Admin/Dashboard" element={<h1>Dashboard</h1>} />
              <Route path="/Admin/Manage-Users" element={<h1>Manage Users</h1>} />
              <Route path="/Admin/Manage-Courses" element={<h1>Manage Courses</h1>} />
              <Route path="/Admin/Manage-Exams" element={<h1>Manage Exams</h1>} />
              <Route path="/Admin/Manage-Resources" element={<h1>Manage Resources</h1>} />
              <Route path="/Admin/Student-Attendance" element={<h1>Student Attendance</h1>} />
              <Route path="/Admin/Staff-Attendance" element={<h1>Staff Attendance</h1>} />

              {/* Catch-all route */}
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;