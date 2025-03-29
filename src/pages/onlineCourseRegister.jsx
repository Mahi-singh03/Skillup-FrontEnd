import React, { useState } from 'react';
import { motion } from 'framer-motion'; // For animations
import api from "../utils/api";

const OnlineCourseRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    emailAddress: '',
    course: '',
    fatherName: '',
    
  });
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.name ||
      !formData.phoneNumber ||
      !formData.emailAddress ||
      !formData.course ||
      !formData.fatherName 

    ) {
      setMessage('Please fill in all fields.');
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      const response = await api.post('/api/online-course/register', formData);
      
      setMessage('Registration successful!');
      setShowPopup(true);
      setFormData({
        name: '',
        phoneNumber: '',
        emailAddress: '',
        course: '',
        fatherName: '',
        
      });
    } catch (error) {
      setMessage(error.response?.data?.message || 'Failed to register for the course.');
    } finally {
      setIsLoading(false);
    }
  };

  // Function to open WhatsApp with a pre-written message
  const openWhatsApp = () => {
    const phoneNumber = '+91 94639 2637'; // WhatsApp phone number
    const courseName = formData.course; // Selected course name
    const message = `Hello, I have registered for the course "${courseName}". Please provide my UserID and Password.`; // Pre-written message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`; // WhatsApp URL
    window.open(whatsappUrl, '_blank'); // Open WhatsApp in a new tab
  };

  return (
    <div className="pt-40">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Online Course Registration</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
              Phone Number:
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              required
            />
          </div>

          {/* Email Address */}
          <div>
            <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700">
              Email Address:
            </label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              required
            />
          </div>

          {/* Father's Name */}
          <div>
            <label htmlFor="fatherName" className="block text-sm font-medium text-gray-700">
              Father's Name:
            </label>
            <input
              type="text"
              id="fatherName"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              required
            />
          </div>

          {/* Course Selection */}
          <div>
            <label htmlFor="course" className="block text-sm font-medium text-gray-700">
              Course:
            </label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              required
            >
              <option value="">Select a course</option>
              <option value="VN Video editing">VN Video Editing</option>
              {/* Add more courses here if needed */}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all transform hover:scale-105 active:scale-95"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Registering...
              </div>
            ) : (
              'Register'
            )}
          </button>
        </form>


        {message && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`mt-4 text-center ${
              message.includes('success') ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {message}
          </motion.p>
        )}

        {/* Popup Modal */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-90">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-xl max-w-md text-center border border-gray-200"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Registration Successful!</h3>
              <p className="mb-6 text-gray-700">
                To get your UserID and Password, message us on WhatsApp with the phone number +91 94639-26371:
              </p>
              <button
                onClick={openWhatsApp}
                className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 focus:outline-none m-5 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all transform hover:scale-105 active:scale-95"
              >
                Message on WhatsApp
              </button>
              <button
                onClick={() => setShowPopup(false)}
                className="mt-4 text-sm text-gray-600 hover:text-gray-800 underline"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default OnlineCourseRegistration;