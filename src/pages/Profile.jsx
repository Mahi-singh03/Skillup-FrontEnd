import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Profile = () => {
    const [studentData, setStudentData] = useState({});
    const [profilePic, setProfilePic] = useState('/placeholder-profile.png');
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('personal');
    const navigate = useNavigate();

    useEffect(() => {
        const loadData = async () => {
            try {
                const storedUser = localStorage.getItem('user');
                if (storedUser) {
                    const parsedUser = JSON.parse(storedUser);
                    if (parsedUser.student) {
                        // Format dates and process data
                        const formattedData = {
                            ...parsedUser.student,
                            dateOfBirth: formatDate(parsedUser.student.dateOfBirth),
                            createdAt: formatDate(parsedUser.student.createdAt),
                            updatedAt: formatDate(parsedUser.student.updatedAt)
                        };
                        
                        setStudentData(formattedData);
                        
                        // Load profile picture if available
                        if (parsedUser.student.photo && parsedUser.student.photo.url) {
                            setProfilePic(parsedUser.student.photo.url);
                        }
                    }
                }
            } catch (error) {
                console.error('Error loading student data:', error);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        
        try {
            const date = new Date(dateString);
            return date.toLocaleDateString('en-IN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        } catch {
            return dateString; // Return original if parsing fails
        }
    };

    const renderPersonalDetails = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
                { key: 'fullName', label: 'Full Name' },
                { key: 'gender', label: 'Gender' },
                { key: 'fatherName', label: "Father's Name" },
                { key: 'motherName', label: "Mother's Name" },
                { key: 'dateOfBirth', label: 'Date of Birth' },
                { key: 'emailAddress', label: 'Email Address' },
                { key: 'phoneNumber', label: 'Phone Number' },
                { key: 'aadharNumber', label: 'Aadhar Number' },
                { key: 'address', label: 'Address' },
                { key: 'qualification', label: 'Qualification' },
            ].map((item) => (
                <div key={item.key} className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-gray-500">{item.label}</p>
                    <p className="mt-1 text-lg font-semibold">
                        {studentData[item.key] || 'N/A'}
                    </p>
                </div>
            ))}
        </div>
    );

    const renderCourseDetails = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
                { key: 'rollNo', label: 'Roll Number' },
                { key: 'selectedCourse', label: 'Course' },
                { key: 'courseDuration', label: 'Duration' },
                { key: 'certificationTitle', label: 'Certification' },
                { key: 'createdAt', label: 'Enrollment Date' },
                { key: 'finalGrade', label: 'Final Grade' },
            ].map((item) => (
                <div key={item.key} className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-gray-500">{item.label}</p>
                    <p className="mt-1 text-lg font-semibold">
                        {studentData[item.key] || 'N/A'}
                    </p>
                </div>
            ))}
        </div>
    );

    const renderExamResults = () => {
        if (!studentData.examResults || studentData.examResults.length === 0) {
            return (
                <div className="text-center py-8">
                    <p className="text-gray-500">No exam results available yet</p>
                    <button 
                        onClick={() => navigate('/Exams/Weekly-Exam')}
                        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Take Weekly Exam
                    </button>
                </div>
            );
        }

        return (
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Code</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Theory Marks</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Practical Marks</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {studentData.examResults.map((exam, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{exam.subjectName || 'N/A'}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{exam.subjectCode || 'N/A'}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{exam.theoryMarks ?? 'N/A'}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{exam.practicalMarks ?? 'N/A'}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                    {(exam.theoryMarks || 0) + (exam.practicalMarks || 0)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-blue-250 py-8 px-4 sm:px-6 lg:px-8 pt-36"
        >
            <div className="max-w-4xl mx-auto">
                <motion.div 
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    className="bg-white shadow-xl rounded-lg overflow-hidden"
                >
                    {/* Profile Header */}
                    <div className="bg-gradient-to-r from-blue-400 p-6 to-yellow-100 text-white">
                        <div className="flex flex-col md:flex-row items-center">
                            <motion.div 
                                whileHover={{ scale: 1.05 }}
                                className="relative mb-4 md:mb-0 md:mr-6"
                            >
                                <img 
                                    src={profilePic} 
                                    alt="Profile" 
                                    className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
                                />
                                <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </motion.div>
                            <div>
                                <h1 className="text-2xl md:text-3xl font-bold">{studentData.fullName || 'Student Profile'}</h1>
                                <p className="text-blue-900 mt-1">{studentData.selectedCourse || 'Course not specified'}</p>
                                <div className="flex items-center mt-2">
                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                        Roll No: {studentData.rollNo || 'N/A'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Tabs */}
                    <div className="border-b border-gray-200">
                        <nav className="flex -mb-px">
                            <button
                                onClick={() => setActiveTab('personal')}
                                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${activeTab === 'personal' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                            >
                                Personal Details
                            </button>
                            <button
                                onClick={() => setActiveTab('course')}
                                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${activeTab === 'course' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                            >
                                Course Details
                            </button>
                            <button
                                onClick={() => setActiveTab('exams')}
                                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${activeTab === 'exams' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                            >
                                Exam Results
                            </button>
                        </nav>
                    </div>

                    {/* Tab Content */}
                    <div className="p-6">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {activeTab === 'personal' && renderPersonalDetails()}
                            {activeTab === 'course' && renderCourseDetails()}
                            {activeTab === 'exams' && renderExamResults()}
                        </motion.div>
                    </div>

                    {/* Action Buttons */}
                    <div className="bg-gray-50 px-6 py-4 flex flex-col sm:flex-row justify-between items-center border-t border-gray-200">
                        <button 
                            onClick={() => navigate('/Exams/Weekly-Exam')}
                            className="mb-2 sm:mb-0 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                            </svg>
                            Weekly Exam
                        </button>
                        <div className="text-sm text-gray-500">
                            Last updated: {studentData.updatedAt || 'N/A'}
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Profile;