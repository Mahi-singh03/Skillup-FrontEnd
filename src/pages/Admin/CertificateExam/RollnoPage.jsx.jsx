import React, { useState, useEffect } from 'react';
import api from '../../../utils/api';

const RollnoPage = () => {
  const [rollNo, setRollNo] = useState('');
  const [studentData, setStudentData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleNext = async (e) => {
    e.preventDefault();
    if (!rollNo.trim()) {
      setError('Please enter a roll number');
      return;
    }
    
    setError('');
    setLoading(true);

    try {
      const response = await api.get(`/api/students/rollno/${rollNo}`);
      setStudentData(response.data.student);
    } catch (err) {
      setError(err.response?.data?.error || 'Student not found. Please check the roll number and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleFinalExam = () => {
    console.log('Navigating to final exam...');
  };

  const handleBack = () => {
    setStudentData(null);
    setRollNo('');
    setError('');
  };

  return (
    <div className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-4 transition-opacity duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
      <div className="w-full max-w-md lg:max-w-2xl">
        {!studentData ? (
          <div className="bg-white p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Enter Your Roll Number
              </h2>
              <p className="text-gray-600">Please provide your roll number to access your details</p>
            </div>
            
            <form onSubmit={handleNext} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="rollNo" className="block text-sm font-medium text-gray-700">
                  Roll Number
                </label>
                <div className="relative">
                  <input
                    id="rollNo"
                    type="text"
                    value={rollNo}
                    onChange={(e) => {
                      setRollNo(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder="e.g. 2023CS101"
                    disabled={loading}
                    autoFocus
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 disabled:bg-gray-100 text-lg placeholder-gray-400"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {error && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-red-700">{error}</p>
                    </div>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={loading || !rollNo.trim()}
                className={`w-full flex items-center justify-center py-3 px-4 rounded-lg text-white font-medium transition-all duration-300 ${
                  loading || !rollNo.trim() 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700 transform hover:scale-[1.02] shadow-md'
                }`}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Verifying...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
                    </svg>
                    Continue
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Student Details
              </h2>
              <button
                onClick={handleBack}
                className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                Back
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {Object.entries(studentData).map(([key, value]) => (
                <div
                  key={key}
                  className={`bg-gray-50 p-4 rounded-lg border border-gray-100 transition-all duration-200 hover:shadow-sm ${
                    key.toLowerCase() === 'certificationtitle' ? 'bg-yellow-50 border-yellow-200 col-span-full' : ''
                  }`}
                >
                  <dt className={`text-sm font-medium ${
                    key.toLowerCase() === 'certificationtitle' ? 'text-yellow-800' : 'text-gray-500'
                  }`}>
                    {key.split(/(?=[A-Z])/).join(' ')}
                  </dt>
                  <dd className={`mt-1 text-lg font-semibold ${
                    key.toLowerCase() === 'certificationtitle' ? 'text-yellow-900' : 'text-gray-900'
                  }`}>
                    {value.toString()}
                  </dd>
                </div>
              ))}
            </div>

            <div className="flex flex-col space-y-4">
              <button
                onClick={handleFinalExam}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4 rounded-lg hover:from-green-600 hover:to-green-700 transform transition-all duration-300 hover:scale-[1.02] shadow-md flex items-center justify-center font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Proceed to Final Exam
              </button>
              
              <div className="text-center text-sm text-gray-500 mt-2">
                Verify your details before proceeding
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RollnoPage;