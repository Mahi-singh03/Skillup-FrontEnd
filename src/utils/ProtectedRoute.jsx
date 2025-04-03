import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./components/UserContext"; // Adjust the import path as needed

const ProtectedRoute = ({ children, requireAdmin = false }) => {
  const {
    isStudentAuthenticated,
    studentUser,
    isAdminAuthenticated,
    adminUser,
  } = useContext(UserContext);

  if (requireAdmin) {
    // Admin-specific route logic
    if (!isAdminAuthenticated) {
      return <Navigate to="/Admin/login" replace />;
    }
    if (adminUser?.role !== "admin") {
      return <Navigate to="/Admin/login" replace />;
    }
    return children; // Render if admin is authenticated and has "admin" role
  } else {
    // Student-specific route logic (original behavior)
    if (!isStudentAuthenticated) {
      return <Navigate to="/StudentLogin" replace />;
    }
    return children; // Render if student is authenticated
  }
};

export default ProtectedRoute;