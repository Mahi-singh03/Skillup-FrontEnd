import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const initializeAuth = () => {
      const storedUser = localStorage.getItem("user");
      const adminToken = localStorage.getItem("adminToken");


      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      }
      if (adminToken) {
        setIsAdmin(true);
        setIsAuthenticated(true);
        if (!storedUser) {
          setUser({ isAdmin: true }); // Minimal user data for admin
        }
      }
      setLoading(false); // Mark initialization complete
    };

    initializeAuth();
  }, []); // Empty dependency array ensures this runs only once on mount

  const login = (userData, isAdminLogin = false, token = null) => {
    if (isAdminLogin && token) {
      localStorage.setItem("adminToken", token);
      setIsAdmin(true);
      setUser(userData || { isAdmin: true, email: userData?.email || "admin" });
      setIsAuthenticated(true);
    } else {
      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
      setIsAuthenticated(true);
    }
  };

  const logout = () => {
    console.log("Logout");
    localStorage.removeItem("user");
    localStorage.removeItem("adminToken");
    setUser(null);
    setIsAuthenticated(false);
    setIsAdmin(false);
  };

  return (
    <UserContext.Provider value={{ user, isAuthenticated, isAdmin, login, logout, loading }}>
      {children}
    </UserContext.Provider>
  );
}