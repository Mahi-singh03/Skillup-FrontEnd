import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaUserPlus, FaChalkboardTeacher, FaUserTie, FaUsers, 
  FaDesktop, FaMoneyBillWave, FaBook, FaSignOutAlt, 
  FaClipboardCheck, FaCamera, FaCertificate 
} from 'react-icons/fa';
import api from "../../utils/api";

const AdminDashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        if (!token) throw new Error('Please login first');

        const response = await api.get('/api/admin/dashboard');
        setDashboardData(response.data);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  const dashboardButtons = [
    { icon: <FaUserPlus />, text: 'Add Student', path: '/admin/add-student', color: 'bg-gradient-to-r from-blue-500 to-blue-600' },
    { icon: <FaChalkboardTeacher />, text: 'Add Staff', path: '/Admin/Add-Staff', color: 'bg-gradient-to-r from-green-500 to-green-600' },
    { icon: <FaUserTie />, text: 'Add Admin', path: '/Admin/Add-Admine', color: 'bg-gradient-to-r from-purple-500 to-purple-600' },
    { icon: <FaUsers />, text: 'View PTE Students', path: '/admin/pte-students', color: 'bg-gradient-to-r from-indigo-500 to-indigo-600' },
    { icon: <FaDesktop />, text: 'View Computer Students', path: '/admin/computer-students', color: 'bg-gradient-to-r from-teal-500 to-teal-600' },
    { icon: <FaUsers />, text: 'View Staff', path: '/admin/staff', color: 'bg-gradient-to-r from-orange-500 to-orange-600' },
    { icon: <FaMoneyBillWave />, text: 'Manage Fees', path: '/admin/fees', color: 'bg-gradient-to-r from-yellow-500 to-yellow-600' },
    { icon: <FaClipboardCheck />, text: 'Final Exam', path: '/Admin/Final-Exam', color: 'bg-gradient-to-r from-red-500 to-red-600' },
    { icon: <FaCamera />, text: 'Add Student Photo', path: '/Admin/Add-Photo', color: 'bg-gradient-to-r from-pink-500 to-pink-600' },
    { icon: <FaCertificate />, text: 'Get Certificate', path: '/admin/get-certificate', color: 'bg-gradient-to-r from-amber-500 to-amber-600' },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl text-gray-600 animate-pulse">Loading dashboard...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-red-100 text-red-700 p-4 rounded-lg max-w-md text-center animate-fade-in">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-8 px-4 sm:px-6 lg:px-8 pt-40">
      <div className="max-w-7xl mx-auto">
        {/* Professional Header Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-10 animate-fade-in">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-semibold text-gray-600">Admin Dashboard</h1>
              <h2 className="text-3xl font-extrabold text-gray-800 mt-2">
                Welcome, <span className="text-blue-600">{dashboardData?.adminName || 'Admin'}</span>!
              </h2>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-5 py-2.5 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 hover:scale-105 shadow-md"
            >
              <FaSignOutAlt className="text-lg" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 animate-slide-up">
          {[
            { title: 'Total Admins', value: dashboardData?.totalAdmins, color: 'bg-blue-50' },
            { title: 'PTE Students', value: 25, color: 'bg-green-50' },
            { title: 'Computer Students', value: 30, color: 'bg-purple-50' },
            { title: 'Courses', value: 12, color: 'bg-indigo-50' },
          ].map((stat, index) => (
            <div
              key={index}
              className={`${stat.color} rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
            >
              <h3 className="text-lg font-medium text-gray-700 mb-2">{stat.title}</h3>
              <p className="text-3xl font-bold text-gray-800 animate-pulse-slow">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Buttons Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up">
          {dashboardButtons.map((button, index) => (
            <button
              key={index}
              onClick={() => navigate(button.path)}
              className={`${button.color} text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center justify-center space-y-4`}
            >
              <span className="text-4xl animate-bounce">{button.icon}</span>
              <span className="text-lg font-semibold">{button.text}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;