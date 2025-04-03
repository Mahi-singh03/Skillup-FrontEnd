import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [studentUser, setStudentUser] = useState(null); // Student-specific user
  const [isStudentAuthenticated, setIsStudentAuthenticated] = useState(false); // Student auth state
  const [adminUser, setAdminUser] = useState(null); // Admin-specific user
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false); // Admin auth state

  // Load student and admin data from localStorage on mount
  useEffect(() => {
    const storedStudentUser = localStorage.getItem("studentUser");
    const storedAdminUser = localStorage.getItem("adminUser");

    if (storedStudentUser) {
      setStudentUser(JSON.parse(storedStudentUser));
      setIsStudentAuthenticated(true);
    }

    if (storedAdminUser) {
      setAdminUser(JSON.parse(storedAdminUser));
      setIsAdminAuthenticated(true);
    }
  }, []);

  // Student login/logout
  const studentLogin = (userData) => {
    localStorage.setItem("studentUser", JSON.stringify(userData));
    setStudentUser(userData);
    setIsStudentAuthenticated(true);
  };

  const studentLogout = () => {
    localStorage.removeItem("studentUser");
    setStudentUser(null);
    setIsStudentAuthenticated(false);
  };

  // Admin login/logout
  const adminLogin = (userData) => {
    localStorage.setItem("adminUser", JSON.stringify(userData));
    setAdminUser(userData);
    setIsAdminAuthenticated(true);
  };

  const adminLogout = () => {
    localStorage.removeItem("adminUser");
    setAdminUser(null);
    setIsAdminAuthenticated(false);
  };

  return (
    <UserContext.Provider
      value={{
        studentUser,
        isStudentAuthenticated,
        studentLogin,
        studentLogout,
        adminUser,
        isAdminAuthenticated,
        adminLogin,
        adminLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}