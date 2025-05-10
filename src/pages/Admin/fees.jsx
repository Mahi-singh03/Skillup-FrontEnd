import React, { useState, useEffect } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { FaSpinner, FaUserGraduate, FaRupeeSign, FaSearch, FaFilter, FaCheckCircle } from 'react-icons/fa';
import api from '../../utils/api'; 

// Error Boundary Component
class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught in ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-50 text-red-700 rounded-lg m-4">
          <h2 className="font-semibold">Something went wrong</h2>
          <p>{this.state.error?.message || 'An unexpected error occurred'}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

const FeeManagement = () => {
  // State management
  const [activeTab, setActiveTab] = useState('lookup');
  const [search, setSearch] = useState({ phoneNumber: '', rollNo: '' });
  const [student, setStudent] = useState(null);
  const [feesForm, setFeesForm] = useState({ total: 0, paid: 0 });
  const [allStudents, setAllStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showIncompleteOnly, setShowIncompleteOnly] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch student details
  const fetchStudent = async () => {
    if (!search.phoneNumber.trim() && !search.rollNo.trim()) {
      toast.error('Please provide either phone number or roll number');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await api.get('/api/fees/student', {
        params: {
          rollNo: search.rollNo.trim(),
          phoneNumber: search.phoneNumber.trim(),
        },
      });

      const studentData = response.data?.data;
      if (studentData) {
        setStudent(studentData);
        setFeesForm({
          total: studentData.fees?.total || 0,
          paid: studentData.fees?.paid || 0,
        });
        toast.success('Student found!');
      } else {
        throw new Error('No student data found');
      }
    } catch (err) {
      console.error('Fetch student error:', err);
      toast.error(err.response?.data?.message || 'Student not found');
      setStudent(null);
      setError('Failed to fetch student details');
    } finally {
      setLoading(false);
    }
  };

  // Update fees
  const updateFees = async () => {
    if (!student) {
      toast.error('No student selected');
      return;
    }

    if (feesForm.paid > feesForm.total) {
      toast.error('Paid amount cannot exceed total amount');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      await api.put('/api/fees/update', {
        rollNo: student.rollNo,
        phoneNumber: student.phoneNumber,
        total: feesForm.total,
        paid: feesForm.paid,
      });

      // Refresh student data
      const response = await api.get('/api/fees/student', {
        params: { rollNo: student.rollNo },
      });

      const updatedStudent = response.data?.data;
      if (updatedStudent) {
        setStudent(updatedStudent);
        setFeesForm({
          total: updatedStudent.fees?.total || 0,
          paid: updatedStudent.fees?.paid || 0,
        });
        toast.success('Fees updated successfully!');
      } else {
        throw new Error('Invalid response after update');
      }
    } catch (err) {
      console.error('Update fees error:', err);
      toast.error(err.response?.data?.message || 'Failed to update fees');
      setError('Failed to update fees');
    } finally {
      setLoading(false);
    }
  };

  // Fetch all students
  const fetchAllStudents = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get('/api/fees/getAll', {
        params: { incompleteOnly: showIncompleteOnly },
      });

      const studentsData = response.data?.data;
      if (Array.isArray(studentsData)) {
        setAllStudents(studentsData);
        setFilteredStudents(studentsData);
      } else {
        throw new Error('Invalid students data format');
      }
    } catch (err) {
      console.error('Fetch all students error:', err);
      toast.error('Failed to fetch students');
      setError('Failed to fetch students list');
      setAllStudents([]);
      setFilteredStudents([]);
    } finally {
      setLoading(false);
    }
  };

  // Filter students based on search term
  useEffect(() => {
    const term = searchTerm.toLowerCase();
    const filtered = allStudents.filter(
      (s) =>
        s.fullName?.toLowerCase().includes(term) ||
        s.rollNo?.toLowerCase().includes(term) ||
        s.phoneNumber?.includes(term)
    );
    setFilteredStudents(filtered);
  }, [searchTerm, allStudents]);

  // Fetch all students when tab or filter changes
  useEffect(() => {
    if (activeTab === 'all') {
      fetchAllStudents();
    }
  }, [activeTab, showIncompleteOnly]);

  // Payment status color helper
  const getPaymentStatusColor = (unpaid, total) => {
    if (unpaid === 0) return 'bg-green-100 text-green-800';
    if (unpaid === total) return 'bg-red-100 text-red-800';
    return 'bg-yellow-100 text-yellow-800';
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8">
        <Toaster position="top-right" />
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          {/* Header */}
          <div className="bg-indigo-600 text-white p-6">
            <h1 className="text-2xl md:text-3xl font-bold">Student Fees Management</h1>
            <p className="mt-2 opacity-90">Track and manage student fee payments</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 m-4 rounded-lg">
              <div className="flex items-center">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="ml-3 text-sm text-red-700">{error}</p>
              </div>
            </div>
          )}

          {/* Tabs */}
          <div className="flex border-b">
            <button
              className={`px-6 py-3 font-medium ${
                activeTab === 'lookup'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('lookup')}
            >
              Student Lookup
            </button>
            <button
              className={`px-6 py-3 font-medium ${
                activeTab === 'all'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('all')}
            >
              All Students
            </button>
          </div>

          {/* Main Content */}
          <div className="p-6">
            {activeTab === 'lookup' ? (
              <div className="space-y-6">
                {/* Search Form */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <FaUserGraduate className="mr-2" /> Search Student
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        value={search.phoneNumber}
                        onChange={(e) => setSearch({ ...search, phoneNumber: e.target.value })}
                        placeholder="Enter phone number"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Roll Number
                      </label>
                      <input
                        type="text"
                        value={search.rollNo}
                        onChange={(e) => setSearch({ ...search, rollNo: e.target.value })}
                        placeholder="Enter roll number"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="flex items-end">
                      <button
                        onClick={fetchStudent}
                        disabled={loading}
                        className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 flex items-center justify-center"
                      >
                        {loading ? (
                          <FaSpinner className="animate-spin mr-2" />
                        ) : (
                          <FaSearch className="mr-2" />
                        )}
                        Search
                      </button>
                    </div>
                  </div>
                </div>

                {/* Student Details */}
                {loading ? (
                  <div className="flex justify-center items-center py-12">
                    <FaSpinner className="animate-spin text-4xl text-indigo-600" />
                  </div>
                ) : student ? (
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-semibold mb-4">Student Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <p className="text-sm text-gray-500">Full Name</p>
                        <p className="font-medium">{student.fullName || 'N/A'}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Father's Name</p>
                        <p className="font-medium">{student.fatherName || 'N/A'}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Course</p>
                        <p className="font-medium">
                          {student.selectedCourse
                            ? `${student.selectedCourse} (${student.courseDuration || 'N/A'})`
                            : 'N/A'}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Contact</p>
                        <p className="font-medium">{student.phoneNumber || 'N/A'}</p>
                      </div>
                    </div>

                    {/* Fees Update Form */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <FaRupeeSign className="mr-2" /> Update Fees
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Total Fees (₹)
                          </label>
                          <input
                            type="number"
                            value={feesForm.total}
                            onChange={(e) =>
                              setFeesForm({
                                ...feesForm,
                                total: parseFloat(e.target.value) || 0,
                              })
                            }
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                            min="0"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Amount Paid (₹)
                          </label>
                          <input
                            type="number"
                            value={feesForm.paid}
                            onChange={(e) =>
                              setFeesForm({
                                ...feesForm,
                                paid: parseFloat(e.target.value) || 0,
                              })
                            }
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                            min="0"
                          />
                        </div>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg mb-6">
                        <h4 className="font-medium text-blue-800 mb-2">Current Status</h4>
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div className="bg-white p-3 rounded-lg shadow-sm">
                            <p className="text-sm text-gray-500">Total</p>
                            <p className="font-bold">₹{feesForm.total}</p>
                          </div>
                          <div className="bg-white p-3 rounded-lg shadow-sm">
                            <p className="text-sm text-gray-500">Paid</p>
                            <p className="font-bold text-green-600">₹{feesForm.paid}</p>
                          </div>
                          <div className="bg-white p-3 rounded-lg shadow-sm">
                            <p className="text-sm text-gray-500">Balance</p>
                            <p
                              className={`font-bold ${
                                feesForm.total - feesForm.paid > 0
                                  ? 'text-red-600'
                                  : 'text-green-600'
                              }`}
                            >
                              ₹{feesForm.total - feesForm.paid}
                            </p>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={updateFees}
                        disabled={loading}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 flex items-center"
                      >
                        {loading ? (
                          <FaSpinner className="animate-spin mr-2" />
                        ) : (
                          <FaCheckCircle className="mr-2" />
                        )}
                        Update Fees
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    No student data available. Please search for a student.
                  </div>
                )}
              </div>
            ) : (
              <div>
                {/* All Students View */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-800 flex items-center">
                    <FaUserGraduate className="mr-2" /> All Students
                  </h2>
                  <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-3">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaSearch className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        placeholder="Search students..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 w-full"
                      />
                    </div>
                    <label className="inline-flex items-center bg-gray-100 rounded-lg px-3 py-2">
                      <input
                        type="checkbox"
                        checked={showIncompleteOnly}
                        onChange={() => setShowIncompleteOnly(!showIncompleteOnly)}
                        className="form-checkbox h-4 w-4 text-indigo-600"
                      />
                      <span className="ml-2 text-sm flex items-center">
                        <FaFilter className="mr-1" /> Incomplete Fees
                      </span>
                    </label>
                  </div>
                </div>

                {loading ? (
                  <div className="flex justify-center items-center py-12">
                    <FaSpinner className="animate-spin text-4xl text-indigo-600" />
                  </div>
                ) : filteredStudents.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No students found</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Name
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Roll No
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Course
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Contact
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Fees Status
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {filteredStudents.map((s) => (
                          <tr key={s.rollNo} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="font-medium text-gray-900">{s.fullName || 'N/A'}</div>
                              <div className="text-sm text-gray-500">{s.fatherName || 'N/A'}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {s.rollNo || 'N/A'}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">
                                {s.selectedCourse || 'N/A'}
                              </div>
                              <div className="text-sm text-gray-500">
                                {s.courseDuration || 'N/A'}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {s.phoneNumber || 'N/A'}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span
                                className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPaymentStatusColor(
                                  s.fees?.unpaid || 0,
                                  s.fees?.total || 0
                                )}`}
                              >
                                ₹{s.fees?.paid || 0} / ₹{s.fees?.total || 0}
                              </span>
                              {(s.fees?.unpaid || 0) > 0 && (
                                <div className="mt-1 text-xs text-red-600">
                                  ₹{s.fees.unpaid} unpaid
                                </div>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default FeeManagement;