import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./components/UserContext";

const ProtectedRoute = ({ children, isAdminRoute = false }) => {
  const { isAuthenticated, isAdmin, loading } = useContext(UserContext);

  if (loading) {
    return <div>Loading...</div>; // Wait until context is initialized
  }

  if (isAdminRoute) {
    return isAdmin ? children : <Navigate to="/Admin/login" replace />;
  }

  return isAuthenticated ? children : <Navigate to="/StudentLogin" replace />;
};

export default ProtectedRoute;