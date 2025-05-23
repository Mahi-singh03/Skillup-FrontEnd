import { useState, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, User, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { UserContext } from "../utils/components/UserContext.jsx";
import lgLogo from "../assets/FINAL lg LOGO.svg";
import smLogo from "../assets/fINAL sm logo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { isAuthenticated, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/Home");
    setIsOpen(false);
  };

  const dropdowns = [
    {
      name: "Online Courses",
      options: [
        { name: "Register", path: "/OnlineCourse/Register" },
        { name: "Course Videos", path: "/OnlineCourse/Course-Videos" }
      ]
    },
    {
      name: "Exams",
      options: [
        { name: "Exam Result", path: "/Exams/Exam-Result" },
        { name: "Weekly Exam", path: "/Exams/Weekly-Exam" },
      ]
    },
    {
      name: "Verification",
      options: [
        { name: "Verify Student", path: "/Verification/Verify-Student" },
        { name: "Verify Staff", path: "/Verification/Verify-Staff" }
      ]
    },
    {
      name: "Resources",
      options: [
        { name: "Syllabus", path: "/Resources/Syllabus" },
        { name: "Study Material", path: "/Resources/Study-Material" }
      ]
    },
    {
      name: "Job",
      options: [
        { name: "Career Guidance", path: "/Job/Career-Guidance" },
        { name: "Job Apply", path: "/Job/Job-Apply" }
      ]
    }
  ];

  const secondaryMenuItems = [
    { name: "Home", path: "/Home" },
    { name: "Courses", path: "/Courses" },
    ...(isAuthenticated ? [] : [
      { name: "Register", path: "/Register" },
      { name: "Login", path: "/StudentLogin" }
    ]),
    { name: "About", path: "/About" },
    { name: "Gallery", path: "/Gallery" },
    { name: "Achievements", path: "/Achievements" },
    ...(isAuthenticated ? [{ name: "Logout", path: "#" }] : []),
  ];

  const handleDropdownClick = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/">
          <img src={lgLogo} alt="Large Logo" className="hidden lg:block object-cover w-auto h-12" />
          <img src={smLogo} alt="Small Logo" className="block lg:hidden object-cover w-auto h-12" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-6 items-center">
          {dropdowns.map((dropdown) => (
            <div
              key={dropdown.name}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(dropdown.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center text-gray-700 hover:text-blue-400 transition">
                {dropdown.name} <ChevronDown size={16} className="ml-1 transition-transform" />
              </button>
              <AnimatePresence>
                {activeDropdown === dropdown.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-lg overflow-hidden"
                  >
                    {dropdown.options.map((option) => (
                      <NavLink
                        key={option.name}
                        to={option.path}
                        className="block px-4 py-2 hover:bg-gray-100 transition"
                      >
                        {option.name}
                      </NavLink>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <NavLink to="/Profile" className="text-gray-700 hover:text-blue-400 transition">
            <User size={28} />
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-4">
          <NavLink to="/Profile" className="text-gray-700 hover:text-blue-400 transition">
            <User size={28} />
          </NavLink>
          <button className="text-gray-700 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Secondary Navbar */}
      <div className="hidden lg:flex bg-gray-100 p-2 justify-center shadow-md">
        {secondaryMenuItems.map((item) =>
          item.name === "Logout" ? (
            <button
              key={item.name}
              onClick={handleLogout}
              className="mx-4 text-gray-700 hover:text-red-400 transition"
            >
              Logout
            </button>
          ) : (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "mx-4 text-blue-500 font-bold transition"
                  : "mx-4 text-gray-700 hover:text-blue-400 transition"
              }
            >
              {item.name}
            </NavLink>
          )
        )}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="lg:hidden fixed top-0 left-0 w-3/4 h-full bg-white shadow-lg flex flex-col items-start pt-20 overflow-y-auto"
          >
            <button className="absolute top-5 right-5 text-gray-700" onClick={() => setIsOpen(false)}>
              <X size={28} />
            </button>


            {secondaryMenuItems.map((item) =>
              item.name === "Logout" ? (
                <button
                  key={item.name}
                  onClick={handleLogout}
                  className="w-full px-6 py-4 text-left border-b text-gray-700 hover:bg-gray-50 text-lg"
                >
                  {item.name}
                </button>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="w-full px-6 py-4 text-left border-b text-gray-700 hover:bg-gray-50 text-lg"
                >
                  {item.name}
                </NavLink>
              )
            )}

            {dropdowns.map((dropdown) => (
              <div key={dropdown.name} className="w-full border-b">
                <button
                  onClick={() => handleDropdownClick(dropdown.name)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                >
                  <span className="text-gray-700 text-lg">{dropdown.name}</span>
                  <ChevronRight
                    size={20}
                    className={`transform transition-transform ${activeDropdown === dropdown.name ? "rotate-90" : ""
                      }`}
                  />
                </button>
                <AnimatePresence>
                  {activeDropdown === dropdown.name && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-8 bg-gray-50 w-full"
                    >
                      {dropdown.options.map((option) => (
                        <NavLink
                          key={option.name}
                          to={option.path}
                          onClick={() => {
                            setIsOpen(false);
                            setActiveDropdown(null);
                          }}
                          className="block px-4 py-3 text-gray-600 hover:bg-gray-100 border-t"
                        >
                          {option.name}
                        </NavLink>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}