import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./components/UserContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(UserContext);
  return isAuthenticated ? children : <Navigate to="/StudentLogin" replace />;
};

export default ProtectedRoute;