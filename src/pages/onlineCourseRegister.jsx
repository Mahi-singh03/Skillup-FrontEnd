import React, { useState } from 'react';
import { motion } from 'framer-motion'; // For animations

const OnlineCourseRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    emailAddress: '',
    course: '',
    fatherName: '',
    userID: '',
    password: '',
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
      !formData.fatherName ||
      !formData.userID ||
      !formData.password
    ) {
      setMessage('Please fill in all fields.');
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      // Simulate backend registration (replace with actual API call)
      const response = await fetch('https://your-backend-url/api/online-course/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to register for the course.');
      }

      setMessage('Registration successful!');
      setShowPopup(true); // Show popup on successful registration
      setFormData({
        name: '',
        phoneNumber: '',
        emailAddress: '',
        course: '',
        fatherName: '',
        userID: '',
        password: '',
      });
    } catch (error) {
      setMessage(error.message || 'Failed to register for the course.');
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
          {/* Form fields remain the same as before */}
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
                To get your UserID and Password, message us on WhatsApp with the phone number:
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