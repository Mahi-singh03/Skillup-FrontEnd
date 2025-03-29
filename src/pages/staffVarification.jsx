import React, { useState } from 'react';
import { motion } from 'framer-motion';
import api from "../utils/api";

const StaffVerification = () => {
  const [staffID, setStaffID] = useState('');
  const [DOB, setDOB] = useState('');
  const [message, setMessage] = useState('');
  const [staffDetails, setStaffDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage('');
    setStaffDetails(null);

    if (!staffID || !DOB) {
      setMessage('Please fill in both Staff ID and Date of Birth');
      return;
    }

    setIsLoading(true);

    try {
      const response = await api.get(`/api/staff/verify?staffId=${staffID}&dob=${DOB}`);

      if (!response.data) {
        throw new Error('No staff member found with these credentials');
      }

      setStaffDetails(response.data);
      setMessage('Staff verified successfully!');
    } catch (err) {
      setError(err.response?.data?.message || err.message);
      console.error('Verification error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString) => {
    try {
      if (!dateString) return 'N/A';
      const date = new Date(dateString);
      return isNaN(date) ? 'Invalid Date' : date.toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return 'Invalid Date';
    }
  };


  const renderDetail = (label, value, icon = null) => (
    <div className="flex items-start gap-3 py-2">
      {icon && <span className="text-blue-500 mt-1">{icon}</span>}
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-500">{label}</p>
        <p className="mt-1 text-gray-700">{value || 'N/A'}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-40 pb-14">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-4 max-w-2xl sm:mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
      >
        <div className="px-8 py-6 bg-gradient-to-r from-blue-600 to-blue-500">
          <h2 className="text-2xl font-bold text-center text-white">
            Staff Verification Portal
          </h2>
        </div>

        <div className="px-8 py-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Staff ID
                </label>
                <input
                  type="number"
                  value={staffID}
                  onChange={(e) => setStaffID(e.target.value.replace(/\D/, ''))}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Enter Staff ID"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Birth
                </label>
                <input
                  type="date"
                  value={DOB}
                  onChange={(e) => setDOB(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                  max={new Date().toISOString().split('T')[0]}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Verifying...
                </span>
              ) : (
                'Verify Staff'
              )}
            </button>
          </form>

          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3"
            >
              <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <p className="text-red-600">{error}</p>
            </motion.div>
          )}

          {message && !error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3"
            >
              <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-green-600">{message}</p>
            </motion.div>
          )}

          {staffDetails && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8 bg-white rounded-xl shadow-inner border border-gray-100"
            >
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Staff Profile
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Personal Information</h4>
                  {renderDetail('Full Name', staffDetails.Name)}
                  {renderDetail('Date of Birth', formatDate(staffDetails.DOB))}
                  {renderDetail('Father\'s Name', staffDetails.FatherName)}
                  {renderDetail('Mother\'s Name', staffDetails.MotherName)}
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Employment Details</h4>
                  {renderDetail('Staff ID', staffDetails.StaffID)}
                  {renderDetail('Designation', staffDetails.Designation)}
                  {renderDetail('Joining Date', formatDate(staffDetails.JoinningData))}
                  {renderDetail('Leaving Date', formatDate(staffDetails.LeavingDate))}
                </div>

                <div className="md:col-span-2">
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Contact Information</h4>
                    {renderDetail('Address', staffDetails.Address)}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default StaffVerification;