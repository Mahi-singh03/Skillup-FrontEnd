import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./utils/components/ScrollToTop.jsx";
import Loader from "./utils/loader.jsx";
import MainLayout from "./Layouts/MainLayout.jsx";
import { UserProvider } from "./utils/components/UserContext.jsx";
import ProtectedRoute from "./utils/ProtectedRoute.jsx";
import Login from "./pages/Login.jsx";
import "./App.css";
import StudentVerification from "./pages/StudentVarification.jsx";
import StaffVerification from "./pages/staffVarification.jsx";
import OnlineCourseRegistration from "./pages/onlineCourseRegister.jsx";
import ComingSoon from "./pages/CommingSoon.jsx";

// Lazy Load Components
const LandingPage = lazy(() => import("./pages/LandingPage.jsx"));
const Home = lazy(() => import("./pages/Home.jsx"));
const Profile = lazy(() => import("./pages/Profile.jsx"));
const Register = lazy(() => import("./pages/Register.jsx"));
const Courses = lazy(() => import("./pages/Courses.jsx"));
const Gallery = lazy(() => import("./pages/Gallery.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const ExamList = lazy(() => import("./pages/WeeklyExamList.jsx"));
const WeeklyExam = lazy(() => import("./pages/Exams/WeeklyExams.jsx"));

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
              {/* Core Pages */}
              <Route path="/home" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              
              {/* Authentication */}
              <Route path="/register" element={<Register />} />
              <Route path="/student-login" element={<Login />} />
              <Route path="/profile" element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } />

              {/* Online Courses */}
              <Route path="/online-course/register" element={<OnlineCourseRegistration />} />
              <Route path="/online-course/videos" element={<ComingSoon />} />

              {/* Exams Section */}
              <Route path="/exams/weekly-exam" element={
                <ProtectedRoute>
                  <ExamList />
                </ProtectedRoute>
              } />
              <Route path="/exams/weekly-exam/:examId" element={
                <ProtectedRoute>
                  <WeeklyExam />
                </ProtectedRoute>
              } />
              <Route path="/exams/final-exam" element={<ComingSoon />} />
              <Route path="/exams/results" element={<ComingSoon />} />
              <Route path="/exams/instructions" element={<ComingSoon />} />

              {/* Verification */}
              <Route path="/verify/student" element={<StudentVerification />} />
              <Route path="/verify/staff" element={<StaffVerification />} />

              {/* Resources */}
              <Route path="/resources/syllabus" element={<ComingSoon />} />
              <Route path="/resources/materials" element={<ComingSoon />} />

              {/* Career Services */}
              <Route path="/career/guidance" element={<ComingSoon />} />
              <Route path="/career/opportunities" element={<ComingSoon />} />

              {/* Admin Section */}
              <Route path="/admin/dashboard" element={<h1>Dashboard</h1>} />
              <Route path="/admin/users" element={<h1>Manage Users</h1>} />
              <Route path="/admin/courses" element={<h1>Manage Courses</h1>} />
              <Route path="/admin/exams" element={<h1>Manage Exams</h1>} />
              <Route path="/admin/resources" element={<h1>Manage Resources</h1>} />
              <Route path="/admin/attendance/students" element={<h1>Student Attendance</h1>} />
              <Route path="/admin/attendance/staff" element={<h1>Staff Attendance</h1>} />

              {/* Fallback Routes */}
              <Route path="/logout" element={<h1>Logout</h1>} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;