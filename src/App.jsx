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
import StudentVerification from "./pages/StudentVarification.jsx";
import StaffVerification from "./pages/staffVarification.jsx";
import OnlineCourseRegistration from "./pages/onlineCourseRegister.jsx";
import ComingSoon from "./pages/CommingSoon.jsx";

// Lazy Load Components
const LandingPage = lazy(() => import("./pages/LandingPage.jsx"));
const Home = lazy(() => import("./pages/Home.jsx"));
const Register = lazy(() => import("./pages/Register.jsx"));
const Courses = lazy(() => import("./pages/Courses.jsx"));
const Gallery = lazy(() => import("./pages/Gallery.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const ExamList = lazy(() => import("./pages/WeeklyExamList.jsx"));
const WeeklyExam = lazy(() => import("./pages/Exams/WeeklyExams.jsx"));
const AddStaff = lazy(() => import("./pages/Admin/addStaff.jsx"));
const AddAdmin = lazy(() => import("./pages/Admin/addAdmin.jsx"));
const AdminLogin = lazy(() => import("./pages/Admin/adminLogin.jsx"));
const AdminDashboard = lazy(() => import("./pages/Admin/Dashboard.jsx"));

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
              <Route path="/Profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
              <Route path="/Logout" element={<h1>Logout</h1>} />
              <Route path="/StudentLogin" element={<Login />} />
              <Route path="/Achievements" element={<ComingSoon />} />







              {/* Online Exams */}
              <Route path="/OnlineCourse/Register" element={<OnlineCourseRegistration />} />
              <Route path="/OnlineCourse/Course-Videos" element={<ComingSoon />} />






              {/* Exams Section */}
              <Route path="/Exams/Weekly-Exam" element={<ProtectedRoute><ExamList /></ProtectedRoute>} />
              <Route
                path="/Exams/Weekly-Exam/:examId"
                element={<ProtectedRoute><WeeklyExam /></ProtectedRoute>}
              />
              <Route path="/Exams/Final-Exam" element={<ProtectedRoute><ComingSoon /></ProtectedRoute>} />
              <Route path="/Exams/Exam-Result" element={<ProtectedRoute><ComingSoon /></ProtectedRoute>} />
              <Route path="/Exams/Exam-Instruction" element={<ProtectedRoute><ComingSoon /></ProtectedRoute>} />



              {/* Verification */}
              <Route path="/Verification/Verify-Student" element={<StudentVerification />} />
              <Route path="/Verification/Verify-Staff" element={<StaffVerification />} />



              {/* Resources */}
              <Route path="/Resources/Syllabus" element={<ComingSoon />} />
              <Route path="/Resources/Study-Material" element={<ComingSoon />} />




              {/* Job Section */}
              <Route path="/Job/Career-Guidance" element={<ComingSoon />} />
              <Route path="/Job/Job-Apply" element={<ComingSoon />} />







              {/* Admin Section */}
              <Route path="/Admin/login" element={<AdminLogin />} />
              <Route
                path="/skillup"
                element={<ProtectedRoute requireAdmin={true}><AdminDashboard /></ProtectedRoute>}
              />
              <Route
                path="/Admin/Add-Admine"
                element={<ProtectedRoute requireAdmin={true}><AddAdmin /></ProtectedRoute>}
              />
              <Route
                path="/Admin/Add-Staff"
                element={<ProtectedRoute requireAdmin={true}><AddStaff /></ProtectedRoute>}
              />
              <Route
                path="/Admin/Add-Onine-course-student-ID&Password"
                element={<ProtectedRoute requireAdmin={true}><h1>Add_Onine_course_student_ID&Password</h1></ProtectedRoute>}
              />
              <Route
                path="/upload-student-photo"
                element={<ProtectedRoute requireAdmin={true}><h1>Upload the student Photo</h1></ProtectedRoute>}
              />


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