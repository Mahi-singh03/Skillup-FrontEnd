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
const RollnoPage = lazy (()=>import("./pages/Admin/CertificateExam/RollnoPage.jsx.jsx"))
const AddPhoto = lazy (() => import("./pages/Admin/addPhoto.jsx"))
const Certificate = lazy (() =>import("./pages/Admin/getCertificate.jsx"))
const FeeManagement = lazy (() =>import('./pages/Admin/fees.jsx'))
const Editstudent = lazy (()=>import("./pages/Admin/editstudent.jsx"))

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
                element={<ProtectedRoute isAdminRoute><AdminDashboard /></ProtectedRoute>}
              />
              <Route
                path="/Admin/Add-Admine"
                element={<ProtectedRoute isAdminRoute><AddAdmin /></ProtectedRoute>}
              />
              <Route
                path="/Admin/Add-Staff"
                element={<ProtectedRoute isAdminRoute><AddStaff /></ProtectedRoute>}
              />
              <Route
                path="/Admin/Add-Onine-course-student-ID&Password"
                element={<ProtectedRoute isAdminRoute><h1>Add_Onine_course_student_ID&Password</h1></ProtectedRoute>}
              />
              
              <Route
                path="/Admin/Add-Photo"
                element={<ProtectedRoute isAdminRoute><AddPhoto/></ProtectedRoute>}
              />

              <Route
                path="/Admin/editstudent"
                element={<ProtectedRoute isAdminRoute><Editstudent/></ProtectedRoute>}
              />

              <Route
                path="/Admin/Get-Certificate"
                element={<ProtectedRoute isAdminRoute><Certificate/></ProtectedRoute>}
              />

              <Route
                path="/Admin/Final-Exam"
                element={<ProtectedRoute isAdminRoute><RollnoPage/></ProtectedRoute>}
              />

              <Route
                path="/Admin/FeeManager"
                element={<ProtectedRoute isAdminRoute><FeeManagement/></ProtectedRoute>}
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