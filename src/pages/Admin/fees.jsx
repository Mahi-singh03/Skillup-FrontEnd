import React, { useState, useEffect, useCallback } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { FaSpinner, FaUserGraduate, FaRupeeSign, FaSearch, FaFilter, FaCheckCircle, FaCalendarAlt } from 'react-icons/fa';
import api from '../../utils/api';

// Custom debounce function
const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

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
  const [searchErrors, setSearchErrors] = useState({ phoneNumber: '', rollNo: '' });
  const [student, setStudent] = useState(null);
  const [feesForm, setFeesForm] = useState({ totalFees: "", paidAmount: '', installmentIndex: '' });
  const [feesErrors, setFeesErrors] = useState({ totalFees: '', paidAmount: '', installmentIndex: '' });
  const [joiningDate, setJoiningDate] = useState('');
  const [allStudents, setAllStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showIncompleteOnly, setShowIncompleteOnly] = useState(false);
  const [loading, setLoading] = useState({ search: false, update: false, all: false });
  const [error, setError] = useState(null);

  // Format date for display
  const formatDate = (date) => {
    if (!date) return 'N/A';
    return new Date(date).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  // Validate search inputs
  const validateSearch = () => {
    const errors = { phoneNumber: '', rollNo: '' };
    let isValid = true;

    if (search.phoneNumber && !/^\d{10}$/.test(search.phoneNumber)) {
      errors.phoneNumber = 'Phone number must be 10 digits';
      isValid = false;
    }

    if (!search.phoneNumber && !search.rollNo) {
      errors.phoneNumber = 'Provide either phone number or roll number';
      errors.rollNo = 'Provide either phone number or roll number';
      isValid = false;
    }

    setSearchErrors(errors);
    return isValid;
  };

  // Validate fees form
  const validateFeesForm = () => {
    const errors = { totalFees: '', paidAmount: '', installmentIndex: '' };
    let isValid = true;

    if (feesForm.totalFees < 0) {
      errors.totalFees = 'Total fees cannot be negative';
      isValid = false;
    }

    if (feesForm.paidAmount && feesForm.paidAmount < 0) {
      errors.paidAmount = 'Paid amount cannot be negative';
      isValid = false;
    }

    if (feesForm.paidAmount && !feesForm.installmentIndex) {
      errors.installmentIndex = 'Select an installment';
      isValid = false;
    }

    setFeesErrors(errors);
    return isValid;
  };

  // Fetch student details
  const fetchStudent = async () => {
    if (!validateSearch()) {
      toast.error('Please fix the input errors');
      return;
    }

    setLoading((prev) => ({ ...prev, search: true }));
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
          totalFees: studentData.feeDetails?.totalFees || 0,
          paidAmount: '',
          installmentIndex: '',
        });
        setJoiningDate(studentData.joiningDate ? new Date(studentData.joiningDate).toISOString().split('T')[0] : '');
        toast.success('Student found!');
      } else {
        throw new Error('No student data found');
      }
    } catch (err) {
      console.error('Fetch student error:', err);
      toast.error(err.response?.data?.message || 'Student not found');
      setStudent(null);
      setError(err.response?.data?.message || 'Failed to fetch student details');
    } finally {
      setLoading((prev) => ({ ...prev, search: false }));
    }
  };

  // Update fees
  const updateFees = async () => {
    if (!student) {
      toast.error('No student selected');
      return;
    }

    if (!validateFeesForm()) {
      toast.error('Please fix the input errors');
      return;
    }

    const payload = {
      rollNo: student.rollNo,
      phoneNumber: student.phoneNumber,
    };

    if (feesForm.totalFees >= 0) {
      payload.totalFees = parseFloat(feesForm.totalFees);
    }

    if (feesForm.paidAmount && feesForm.installmentIndex !== '') {
      payload.paidAmount = parseFloat(feesForm.paidAmount);
      payload.installmentIndex = parseInt(feesForm.installmentIndex);
    }

    if (!payload.totalFees && !payload.paidAmount) {
      toast.error('Please provide total fees or paid amount with installment index');
      return;
    }

    setLoading((prev) => ({ ...prev, update: true }));
    setError(null);
    try {
      await api.put('/api/fees/update', payload);

      const response = await api.get('/api/fees/student', {
        params: { rollNo: student.rollNo },
      });

      const updatedStudent = response.data?.data;
      if (updatedStudent) {
        setStudent(updatedStudent);
        setFeesForm({
          totalFees: updatedStudent.feeDetails?.totalFees || 0,
          paidAmount: '',
          installmentIndex: '',
        });
        setJoiningDate(updatedStudent.joiningDate ? new Date(updatedStudent.joiningDate).toISOString().split('T')[0] : '');
        toast.success('Fees updated successfully!');
      } else {
        throw new Error('Invalid response after update');
      }
    } catch (err) {
      console.error('Update fees error:', err);
      toast.error(err.response?.data?.message || 'Failed to update fees');
      setError(err.response?.data?.message || 'Failed to update fees');
    } finally {
      setLoading((prev) => ({ ...prev, update: false }));
    }
  };

  // Fetch all students
  const fetchAllStudents = async () => {
    setLoading((prev) => ({ ...prev, all: true }));
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
      toast.error(err.response?.data?.message || 'Failed to fetch students');
      setError(err.response?.data?.message || 'Failed to fetch students list');
      setAllStudents([]);
      setFilteredStudents([]);
    } finally {
      setLoading((prev) => ({ ...prev, all: false }));
    }
  };

  // Search handler for all students
  const handleSearch = useCallback(
    (term) => {
      const filtered = allStudents.filter(
        (s) =>
          s.fullName?.toLowerCase().includes(term.toLowerCase()) ||
          s.rollNo?.toLowerCase().includes(term.toLowerCase()) ||
          s.phoneNumber?.includes(term)
      );
      setFilteredStudents(filtered);
    },
    [allStudents]
  );

  // Debounced search
  const debouncedSearch = useCallback(debounce(handleSearch, 300), [handleSearch]);

  useEffect(() => {
    debouncedSearch(searchTerm);
  }, [searchTerm, debouncedSearch]);

  // Fetch all students when tab or filter changes
  useEffect(() => {
    if (activeTab === 'all') {
      fetchAllStudents();
    }
  }, [activeTab, showIncompleteOnly]);

  // Payment status color helper
  const getPaymentStatusColor = (remainingFees, totalFees) => {
    if (remainingFees === 0) return 'bg-green-100 text-green-800';
    if (remainingFees === totalFees) return 'bg-red-100 text-red-800';
    return 'bg-yellow-100 text-yellow-800';
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8">
        <Toaster position="top-right" />
        <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          {/* Header */}
          <div className="bg-indigo-600 text-white p-6">
            <h1 className="text-2xl md:text-3xl font-bold">Student Fees Management</h1>
            <p className="mt-2 opacity-90">Efficiently track and manage student fee payments</p>
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
              className={`px-6 py-3 font-medium text-sm md:text-base ${
                activeTab === 'lookup'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('lookup')}
            >
              Student Lookup
            </button>
            <button
              className={`px-6 py-3 font-medium text-sm md:text-base ${
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
                        onChange={(e) => {
                          setSearch({ ...search, phoneNumber: e.target.value });
                          setSearchErrors({ ...searchErrors, phoneNumber: '' });
                        }}
                        placeholder="Enter 10-digit phone number"
                        className={`w-full px-4 py-2 border ${
                          searchErrors.phoneNumber ? 'border-red-500' : 'border-gray-300'
                        } rounded-lg focus:ring-2 focus:ring-indigo-500`}
                      />
                      {searchErrors.phoneNumber && (
                        <p className="mt-1 text-xs text-red-500">{searchErrors.phoneNumber}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Roll Number
                      </label>
                      <input
                        type="text"
                        value={search.rollNo}
                        onChange={(e) => {
                          setSearch({ ...search, rollNo: e.target.value });
                          setSearchErrors({ ...searchErrors, rollNo: '' });
                        }}
                        placeholder="Enter roll number"
                        className={`w-full px-4 py-2 border ${
                          searchErrors.rollNo ? 'border-red-500' : 'border-gray-300'
                        } rounded-lg focus:ring-2 focus:ring-indigo-500`}
                      />
                      {searchErrors.rollNo && (
                        <p className="mt-1 text-xs text-red-500">{searchErrors.rollNo}</p>
                      )}
                    </div>
                    <div className="flex items-end">
                      <button
                        onClick={fetchStudent}
                        disabled={loading.search}
                        className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 flex items-center justify-center"
                      >
                        {loading.search ? (
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
                {loading.search ? (
                  <div className="flex justify-center items-center py-12">
                    <FaSpinner className="animate-spin text-4xl text-indigo-600" />
                  </div>
                ) : student ? (
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-semibold mb-4">Student Details</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
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
                      <div>
                        <p className="text-sm text-gray-500">Joining Date</p>
                        <p className="font-medium">{formatDate(student.joiningDate)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Farewell Date</p>
                        <p className="font-medium">{formatDate(student.farewellDate)}</p>
                      </div>
                    </div>

                    {/* Fees Update Form */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <FaRupeeSign className="mr-2" /> Update Fees
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Total Fees (₹)
                          </label>
                          <input
                            type="number"
                            value={feesForm.totalFees}
                            onChange={(e) => {
                              setFeesForm({
                                ...feesForm,
                                totalFees: e.target.value,
                              });
                              setFeesErrors({ ...feesErrors, totalFees: '' });
                            }}
                            className={`w-full px-4 py-2 border ${
                              feesErrors.totalFees ? 'border-red-500' : 'border-gray-300'
                            } rounded-lg focus:ring-2 focus:ring-indigo-500`}
                            min="0"
                          />
                          {feesErrors.totalFees && (
                            <p className="mt-1 text-xs text-red-500">{feesErrors.totalFees}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Paid Amount (₹)
                          </label>
                          <input
                            type="number"
                            value={feesForm.paidAmount}
                            onChange={(e) => {
                              setFeesForm({
                                ...feesForm,
                                paidAmount: e.target.value,
                              });
                              setFeesErrors({ ...feesErrors, paidAmount: '' });
                            }}
                            placeholder="Enter paid amount"
                            className={`w-full px-4 py-2 border ${
                              feesErrors.paidAmount ? 'border-red-500' : 'border-gray-300'
                            } rounded-lg focus:ring-2 focus:ring-indigo-500`}
                            min="0"
                          />
                          {feesErrors.paidAmount && (
                            <p className="mt-1 text-xs text-red-500">{feesErrors.paidAmount}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Installment
                          </label>
                          <select
                            value={feesForm.installmentIndex}
                            onChange={(e) => {
                              setFeesForm({
                                ...feesForm,
                                installmentIndex: e.target.value,
                              });
                              setFeesErrors({ ...feesErrors, installmentIndex: '' });
                            }}
                            className={`w-full px-4 py-2 border ${
                              feesErrors.installmentIndex ? 'border-red-500' : 'border-gray-300'
                            } rounded-lg focus:ring-2 focus:ring-indigo-500`}
                          >
                            <option value="">Select Installment</option>
                            {student.feeDetails?.installmentDetails?.map((_, index) => (
                              <option key={index} value={index}>
                                Installment {index + 1} (₹{student.feeDetails.installmentDetails[index].amount})
                              </option>
                            ))}
                          </select>
                          {feesErrors.installmentIndex && (
                            <p className="mt-1 text-xs text-red-500">{feesErrors.installmentIndex}</p>
                          )}
                        </div>
                      </div>

                      {/* Current Fees Status */}
                      <div className="bg-blue-50 p-4 rounded-lg mb-6">
                        <h4 className="font-medium text-blue-800 mb-2">Current Fees Status</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                          <div className="bg-white p-3 rounded-lg shadow-sm">
                            <p className="text-sm text-gray-500">Total</p>
                            <p className="font-bold">₹{student.feeDetails?.totalFees || 0}</p>
                          </div>
                          <div className="bg-white p-3 rounded-lg shadow-sm">
                            <p className="text-sm text-gray-500">Paid</p>
                            <p className="font-bold text-green-600">
                              ₹{student.feeDetails?.totalFees - student.feeDetails?.remainingFees || 0}
                            </p>
                          </div>
                          <div className="bg-white p-3 rounded-lg shadow-sm">
                            <p className="text-sm text-gray-500">Balance</p>
                            <p
                              className={`font-bold ${
                                (student.feeDetails?.remainingFees || 0) > 0 ? 'text-red-600' : 'text-green-600'
                              }`}
                            >
                              ₹{student.feeDetails?.remainingFees || 0}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Installments History */}
                      {student.feeDetails?.installmentDetails?.length > 0 && (
                        <div className="mb-6">
                          <h4 className="font-medium text-gray-800 mb-2">Installment History</h4>
                          <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                              <thead className="bg-gray-50">
                                <tr>
                                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Installment
                                  </th>
                                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Amount (₹)
                                  </th>
                                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Due Date
                                  </th>
                                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="bg-white divide-y divide-gray-200">
                                {student.feeDetails.installmentDetails.map((inst, index) => (
                                  <tr key={index}>
                                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                                      {index + 1}
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                                      ₹{inst.amount}
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                                      {formatDate(inst.submissionDate)}
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap text-sm">
                                      <span
                                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                          inst.paid
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-red-100 text-red-800'
                                        }`}
                                      >
                                        {inst.paid ? 'Paid' : 'Unpaid'}
                                      </span>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}

                      <button
                        onClick={updateFees}
                        disabled={loading.update}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 flex items-center"
                      >
                        {loading.update ? (
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
                        placeholder="Search by name, roll no, or phone..."
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

                {loading.all ? (
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
                            Dates
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
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <div>Join: {formatDate(s.joiningDate)}</div>
                              <div>Farewell: {formatDate(s.farewellDate)}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span
                                className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPaymentStatusColor(
                                  s.feeDetails?.remainingFees || 0,
                                  s.feeDetails?.totalFees || 0
                                )}`}
                              >
                                ₹{(s.feeDetails?.totalFees - s.feeDetails?.remainingFees) || 0} / ₹{s.feeDetails?.totalFees || 0}
                              </span>
                              {(s.feeDetails?.remainingFees || 0) > 0 && (
                                <div className="mt-1 text-xs text-red-600">
                                  ₹{s.feeDetails.remainingFees} unpaid
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