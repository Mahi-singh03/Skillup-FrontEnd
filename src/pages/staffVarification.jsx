import React, { useState } from 'react';
import { motion } from 'framer-motion'; // For animations

const StaffVerification = () => {
  const [staffID, setStaffID] = useState('');
  const [dob, setDob] = useState('');
  const [message, setMessage] = useState('');
  const [staffDetails, setStaffDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!staffID || !dob) {
      setMessage('Please fill in both Staff ID and DOB.');
      return;
    }

    setIsLoading(true);
    setMessage('');
    setStaffDetails(null);

    try {
      // Send request to the backend to verify the staff
      const response = await fetch('https://skillup-backend-production.up.railway.app/api/staff/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ staffID, dob }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to verify staff.');
      }

      if (data) {
        setStaffDetails(data);
        setMessage('Staff verified successfully!');
      }
    } catch (error) {
      setMessage(error.message || 'Failed to verify staff.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='pt-40'>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Staff Verification</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="staffID" className="block text-sm font-medium text-gray-700">
              Staff ID:
            </label>
            <input
              type="text"
              id="staffID"
              value={staffID}
              onChange={(e) => setStaffID(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              required
            />
          </div>
          <div>
            <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
              Date of Birth:
            </label>
            <input
              type="date"
              id="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              required
            />
          </div>
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
                Verifying...
              </div>
            ) : (
              'Verify'
            )}
          </button>
        </form>

        {message && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`mt-4 text-center ${
              staffDetails ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {message}
          </motion.p>
        )}

        {staffDetails && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200"
          >
            <h3 className="text-lg font-semibold mb-2 text-blue-600">Staff Details</h3>
            <p><strong>Name:</strong> {staffDetails.Name}</p>
            <p><strong>Staff ID:</strong> {staffDetails.StaffID}</p>
            <p><strong>Joining Date:</strong> {staffDetails.JoinningData}</p>
            <p><strong>Designation:</strong> {staffDetails.Designation}</p>
            <p><strong>Date of Birth:</strong> {staffDetails.DOB}</p>
            <p><strong>Father's Name:</strong> {staffDetails.FatherName}</p>
            <p><strong>Mother's Name:</strong> {staffDetails.MotherName}</p>
            <p><strong>Address:</strong> {staffDetails.Address}</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default StaffVerification;