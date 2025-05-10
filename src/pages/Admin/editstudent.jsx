import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import api from '../../utils/api.js';
import { toast } from 'react-hot-toast';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  FormControlLabel,
  Checkbox,
  CircularProgress,
  Stepper,
  Step,
  StepLabel,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

// Subject code mappings
const CERTIFICATION_IN_COMPUTER_APPLICATION = {
  "CS-01": "Basic Computer",
  "CS-02": "Windows Application: MS Office",
  "CS-03": "Operating System",
  "CS-04": "Web Publisher: Internet Browsing"
};

const DIPLOMA_IN_COMPUTER_APPLICATION = {
  "CS-01": "Basic Computer",
  "CS-02": "Windows Application: MS Office",
  "CS-03": "Operating System",
  "CS-04": "Web Publisher: Internet Browsing",
  "CS-05": "Computer Accountancy: Tally"
};

const ADVANCE_DIPLOMA_IN_COMPUTER_APPLICATION = {
  "CS-01": "Basic Computer",
  "CS-02": "Windows Application: MS Office",
  "CS-03": "Operating System",
  "CS-05": "Computer Accountancy: Tally",
  "CS-06": "Desktop Publishing: Photoshop"
};

const CERTIFICATION_IN_COMPUTER_ACCOUNTANCY = {
  "CS-01": "Basic Computer",
  "CS-02": "Windows Application: MS Office",
  "CS-07": "Computerized Accounting With Tally",
  "CS-08": "Manual Accounting"
};

const DIPLOMA_IN_COMPUTER_ACCOUNTANCY = {
  "CS-01": "Basic Computer",
  "CS-02": "Windows Application: MS Office",
  "CS-07": "Computerized Accounting With Tally",
  "CS-08": "Manual Accounting",
  "CS-09": "Tally ERP 9 & Tally Prime"
};

const certificationSubjectMap = {
  'CERTIFICATION IN COMPUTER APPLICATION': CERTIFICATION_IN_COMPUTER_APPLICATION,
  'DIPLOMA IN COMPUTER APPLICATION': DIPLOMA_IN_COMPUTER_APPLICATION,
  'ADVANCE DIPLOMA IN COMPUTER APPLICATION': ADVANCE_DIPLOMA_IN_COMPUTER_APPLICATION,
  'CERTIFICATION IN COMPUTER ACCOUNTANCY': CERTIFICATION_IN_COMPUTER_ACCOUNTANCY,
  'DIPLOMA IN COMPUTER ACCOUNTANCY': DIPLOMA_IN_COMPUTER_ACCOUNTANCY,
};

const EditStudentForm = () => {
  const [loading, setLoading] = useState(false);
  const [student, setStudent] = useState(null);
  const [searchMode, setSearchMode] = useState('phone');
  const [activeStep, setActiveStep] = useState(0);
  const [certificateIssued, setCertificateIssued] = useState(false);
  const [installments, setInstallments] = useState([]);
  const [newInstallment, setNewInstallment] = useState({
    amount: '',
    date: new Date(),
  });
  const [newExamResult, setNewExamResult] = useState({
    subjectCode: '',
    theoryMarks: '',
    practicalMarks: '',
    examDate: new Date(),
  });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phoneNumber: '',
      rollNo: '',
      fullName: '',
      gender: '',
      fatherName: '',
      motherName: '',
      parentsPhoneNumber: '',
      emailAddress: '',
      dateOfBirth: null,
      aadharNumber: '',
      selectedCourse: '',
      courseDuration: '',
      address: '',
      qualification: '',
      password: '',
      joiningDate: null,
      fees: {
        total: 0,
        paid: 0,
        unpaid: 0,
      },
      examResults: [],
      finalGrade: 'Pending',
      certificationTitle: '',
    },
  });

  const steps = ['Search Student', 'Personal Information', 'Academic Details', 'Fees Management', 'Exam Results'];
  const courses = ['HTML, CSS, JS', 'React', 'MERN FullStack', 'Autocad', 'CorelDRAW', 'Tally', 'Premier Pro', 'WordPress', 'Computer Course', 'MS Office', 'PTE'];
  const durations = ['3 months', '6 months', '1 year'];
  const qualifications = ['10th', '12th', 'Graduated'];
  const genders = ['Male', 'Female', 'Other'];
  const grades = ['A', 'B', 'C', 'D', 'F', 'Pending'];

  const handleSearch = async (data) => {
    try {
      setLoading(true);
      const searchParam = searchMode === 'phone' ? { phoneNumber: data.phoneNumber } : { rollNo: data.rollNo };

      const response = await api.get('/api/students/search', { params: searchParam });

      if (response.data.success) {
        const studentData = response.data.data;
        setStudent(studentData);

        Object.keys(studentData).forEach((key) => {
          if (key === 'dateOfBirth' || key === 'joiningDate') {
            setValue(key, studentData[key] ? new Date(studentData[key]) : null);
          } else if (key === 'fees' && studentData.fees?.length > 0) {
            setValue('fees.total', studentData.fees[0].total);
            setValue('fees.paid', studentData.fees[0].paid);
            setValue('fees.unpaid', studentData.fees[0].unpaid);
            setInstallments(studentData.fees[0].installments || []);
          } else if (key === 'examResults') {
            setValue('examResults', studentData.examResults || []);
          } else if (key !== 'password') {
            setValue(key, studentData[key]);
          }
        });

        setCertificateIssued(studentData.certificate || false);
        setActiveStep(1);
        toast.success('Student record loaded successfully');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error finding student');
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = async (data) => {
    try {
      setLoading(true);

      const payload = {
        phoneNumber: searchMode === 'phone' ? data.phoneNumber : student.phoneNumber,
        rollNo: searchMode === 'roll' ? data.rollNo : student.rollNo,
        fullName: data.fullName,
        gender: data.gender,
        fatherName: data.fatherName,
        motherName: data.motherName,
        parentsPhoneNumber: data.parentsPhoneNumber,
        emailAddress: data.emailAddress,
        dateOfBirth: data.dateOfBirth?.toISOString(),
        aadharNumber: data.aadharNumber,
        selectedCourse: data.selectedCourse,
        courseDuration: data.courseDuration,
        address: data.address,
        qualification: data.qualification,
        password: data.password || undefined,
        certificate: certificateIssued,
        joiningDate: data.joiningDate?.toISOString(),
        fees: {
          total: parseFloat(data.fees.total) || 0,
          paid: installments.reduce((sum, inst) => sum + parseFloat(inst.amount), 0),
          unpaid: (parseFloat(data.fees.total) || 0) - installments.reduce((sum, inst) => sum + parseFloat(inst.amount), 0),
          installments: installments.map((inst) => ({
            amount: parseFloat(inst.amount),
            date: inst.date.toISOString(),
          })),
        },
        examResults: data.examResults.map((result) => ({
          subjectCode: result.subjectCode,
          subjectName: validSubjects[result.subjectCode] || result.subjectName,
          theoryMarks: parseFloat(result.theoryMarks) || null,
          practicalMarks: parseFloat(result.practicalMarks) || null,
          examDate: result.examDate?.toISOString() || new Date().toISOString(),
          totalMarks: (parseFloat(result.theoryMarks) || 0) + (parseFloat(result.practicalMarks) || 0),
        })),
        finalGrade: data.finalGrade,
      };

      const response = await api.put('/api/students/edit', payload);

      if (response.data.success) {
        setStudent(response.data.data);
        toast.success('Student updated successfully!');
      } else {
        toast.error('Failed to update student');
      }
    } catch (error) {
      console.error('Error updating student:', error);
      toast.error(error.response?.data?.message || 'Error updating student');
    } finally {
      setLoading(false);
    }
  };

  const handleAddInstallment = () => {
    if (!newInstallment.amount || isNaN(newInstallment.amount)) {
      toast.error('Please enter a valid amount');
      return;
    }

    const amount = parseFloat(newInstallment.amount);
    const totalFees = parseFloat(watch('fees.total')) || 0;
    const paidAmount = installments.reduce((sum, inst) => sum + parseFloat(inst.amount), 0);

    if (amount > totalFees - paidAmount) {
      toast.error(`Amount exceeds remaining balance of ₹${(totalFees - paidAmount).toFixed(2)}`);
      return;
    }

    setInstallments([...installments, {
      amount: amount,
      date: newInstallment.date,
    }]);

    setNewInstallment({
      amount: '',
      date: new Date(),
    });

    setValue('fees.paid', paidAmount + amount);
    setValue('fees.unpaid', totalFees - (paidAmount + amount));

    toast.success('Installment recorded');
  };

  const handleAddExamResult = async () => {
    if (!newExamResult.subjectCode || !newExamResult.theoryMarks || !newExamResult.practicalMarks) {
      toast.error('Please fill all exam result fields');
      return;
    }

    try {
      setLoading(true);

      const payload = {
        phoneNumber: searchMode === 'phone' ? watch('phoneNumber') : undefined,
        rollNo: searchMode === 'roll' ? watch('rollNo') : undefined,
        subjectCode: newExamResult.subjectCode,
        subjectName: validSubjects[newExamResult.subjectCode] || 'Unknown Subject',
        theoryMarks: parseFloat(newExamResult.theoryMarks),
        practicalMarks: parseFloat(newExamResult.practicalMarks),
        examDate: newExamResult.examDate.toISOString(),
        totalMarks: parseFloat(newExamResult.theoryMarks) + parseFloat(newExamResult.practicalMarks),
      };

      const response = await api.post('/api/students/exam-result', payload);

      if (response.data.success) {
        setValue('examResults', response.data.data.examResults);
        setNewExamResult({
          subjectCode: '',
          theoryMarks: '',
          practicalMarks: '',
          examDate: new Date(),
        });
        toast.success('Exam result added successfully');
      } else {
        toast.error('Failed to add exam result');
      }
    } catch (error) {
      console.error('Error adding exam result:', error);
      toast.error(error.response?.data?.message || 'Error adding exam result');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setStudent(null);
    setActiveStep(0);
    setInstallments([]);
    setCertificateIssued(false);
    setNewInstallment({ amount: '', date: new Date() });
    setNewExamResult({ subjectCode: '', theoryMarks: '', practicalMarks: '', examDate: new Date() });
    reset();
  };

  const handleNextStep = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setActiveStep((prev) => prev - 1);
  };

  const validSubjects = student?.certificationTitle ? certificationSubjectMap[student.certificationTitle] || {} : {};

  return (
    <div className="pt-25">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Container maxWidth="md" sx={{ py: 4 }}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ mb: 3 }}>
              Edit Student Information
            </Typography>

            <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            {activeStep === 0 && (
              <div>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel>Search By</InputLabel>
                      <Select
                        value={searchMode}
                        onChange={(e) => setSearchMode(e.target.value)}
                        label="Search By"
                      >
                        <MenuItem value="phone">Phone Number</MenuItem>
                        <MenuItem value="roll">Roll Number</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  {searchMode === 'phone' ? (
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        variant="outlined"
                        {...register('phoneNumber', {
                          required: 'Required field',
                          pattern: {
                            value: /^\d{10}$/,
                            message: 'Must be 10 digits',
                          },
                        })}
                        error={!!errors.phoneNumber}
                        helperText={errors.phoneNumber?.message}
                      />
                    </Grid>
                  ) : (
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Roll Number"
                        variant="outlined"
                        {...register('rollNo', {
                          required: 'Required field',
                          pattern: {
                            value: /^[A-Za-z0-9]+$/,
                            message: 'Alphanumeric only',
                          },
                        })}
                        error={!!errors.rollNo}
                        helperText={errors.rollNo?.message}
                      />
                    </Grid>
                  )}

                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      size="large"
                      disabled={loading}
                      onClick={handleSubmit(handleSearch)}
                    >
                      {loading ? <CircularProgress size={24} /> : 'Find Student'}
                    </Button>
                  </Grid>
                </Grid>
              </div>
            )}

            {activeStep > 0 && student && (
              <div>
                {activeStep === 1 && (
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Full Name"
                        variant="outlined"
                        {...register('fullName', { required: 'Required field' })}
                        error={!!errors.fullName}
                        helperText={errors.fullName?.message}
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <FormControl fullWidth>
                        <InputLabel>Gender</InputLabel>
                        <Select
                          label="Gender"
                          {...register('gender', { required: 'Required field' })}
                          error={!!errors.gender}
                        >
                          {genders.map((gender) => (
                            <MenuItem key={gender} value={gender.toLowerCase()}>
                              {gender}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Father's Name"
                        variant="outlined"
                        {...register('fatherName', { required: 'Required field' })}
                        error={!!errors.fatherName}
                        helperText={errors.fatherName?.message}
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Mother's Name"
                        variant="outlined"
                        {...register('motherName', { required: 'Required field' })}
                        error={!!errors.motherName}
                        helperText={errors.motherName?.message}
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Parent's Phone"
                        variant="outlined"
                        {...register('parentsPhoneNumber', {
                          required: 'Required field',
                          pattern: {
                            value: /^\d{10}$/,
                            message: 'Must be 10 digits',
                          },
                        })}
                        error={!!errors.parentsPhoneNumber}
                        helperText={errors.parentsPhoneNumber?.message}
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        variant="outlined"
                        {...register('emailAddress', {
                          required: 'Required field',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email',
                          },
                        })}
                        error={!!errors.emailAddress}
                        helperText={errors.emailAddress?.message}
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <DatePicker
                        label="Date of Birth"
                        value={watch('dateOfBirth')}
                        onChange={(date) => setValue('dateOfBirth', date)}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            fullWidth
                            variant="outlined"
                            error={!!errors.dateOfBirth}
                            helperText={errors.dateOfBirth?.message}
                          />
                        )}
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Aadhar Number"
                        variant="outlined"
                        {...register('aadharNumber', {
                          required: 'Required field',
                          pattern: {
                            value: /^\d{12}$/,
                            message: 'Must be 12 digits',
                          },
                        })}
                        error={!!errors.aadharNumber}
                        helperText={errors.aadharNumber?.message}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Address"
                        variant="outlined"
                        multiline
                        rows={3}
                        {...register('address', { required: 'Required field' })}
                        error={!!errors.address}
                        helperText={errors.address?.message}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={certificateIssued}
                            onChange={(e) => setCertificateIssued(e.target.checked)}
                            color="primary"
                          />
                        }
                        label="Certificate Issued"
                      />
                    </Grid>
                  </Grid>
                )}

                {activeStep === 2 && (
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <FormControl fullWidth>
                        <InputLabel>Course</InputLabel>
                        <Select
                          label="Course"
                          {...register('selectedCourse', { required: 'Required field' })}
                          error={!!errors.selectedCourse}
                        >
                          {courses.map((course) => (
                            <MenuItem key={course} value={course}>
                              {course}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <FormControl fullWidth>
                        <InputLabel>Duration</InputLabel>
                        <Select
                          label="Duration"
                          {...register('courseDuration', { required: 'Required field' })}
                          error={!!errors.courseDuration}
                        >
                          {durations.map((duration) => (
                            <MenuItem key={duration} value={duration}>
                              {duration}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <FormControl fullWidth>
                        <InputLabel>Qualification</InputLabel>
                        <Select
                          label="Qualification"
                          {...register('qualification', { required: 'Required field' })}
                          error={!!errors.qualification}
                        >
                          {qualifications.map((qual) => (
                            <MenuItem key={qual} value={qual}>
                              {qual}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <DatePicker
                        label="Joining Date"
                        value={watch('joiningDate')}
                        onChange={(date) => setValue('joiningDate', date)}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            fullWidth
                            variant="outlined"
                            error={!!errors.joiningDate}
                            helperText={errors.joiningDate?.message}
                          />
                        )}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="New Password (leave blank to keep current)"
                        type="password"
                        variant="outlined"
                        {...register('password', {
                          minLength: {
                            value: 6,
                            message: 'Minimum 6 characters',
                          },
                        })}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                      />
                    </Grid>
                  </Grid>
                )}

                {activeStep === 3 && (
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Total Course Fees (₹)"
                        type="number"
                        variant="outlined"
                        {...register('fees.total', {
                          required: 'Required field',
                          min: {
                            value: 0,
                            message: 'Total fees cannot be negative',
                          },
                        })}
                        error={!!errors.fees?.total}
                        helperText={errors.fees?.total?.message}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Typography variant="h6" gutterBottom>
                        Payment History
                      </Typography>
                      {installments.length > 0 ? (
                        <Paper elevation={2} sx={{ p: 2, mb: 3 }}>
                          {installments.map((inst, index) => (
                            <Box
                              key={index}
                              sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                mb: 1,
                                p: 1,
                                backgroundColor: '#f5f5f5',
                                borderRadius: 1,
                              }}
                            >
                              <Typography>
                                ₹{inst.amount.toFixed(2)} on {new Date(inst.date).toLocaleDateString()}
                              </Typography>
                            </Box>
                          ))}
                          <Box sx={{ mt: 2, pt: 2, borderTop: '1px solid #eee' }}>
                            <Typography variant="subtitle1">
                              Total Paid: ₹{installments.reduce((sum, inst) => sum + parseFloat(inst.amount), 0).toFixed(2)}
                            </Typography>
                            <Typography variant="subtitle1">
                              Remaining: ₹{(parseFloat(watch('fees.total') || 0) - installments.reduce((sum, inst) => sum + parseFloat(inst.amount), 0)).toFixed(2)}
                            </Typography>
                          </Box>
                        </Paper>
                      ) : (
                        <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
                          No payments recorded yet
                        </Typography>
                      )}

                      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                        Add New Payment
                      </Typography>
                      <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} md={5}>
                          <TextField
                            fullWidth
                            label="Amount (₹)"
                            type="number"
                            variant="outlined"
                            value={newInstallment.amount}
                            onChange={(e) => setNewInstallment({
                              ...newInstallment,
                              amount: e.target.value,
                            })}
                          />
                        </Grid>
                        <Grid item xs={12} md={5}>
                          <DatePicker
                            label="Payment Date"
                            value={newInstallment.date}
                            onChange={(date) => setNewInstallment({
                              ...newInstallment,
                              date: date,
                            })}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                fullWidth
                                variant="outlined"
                              />
                            )}
                          />
                        </Grid>
                        <Grid item xs={12} md={2}>
                          <Button
                            variant="contained"
                            onClick={handleAddInstallment}
                            fullWidth
                            disabled={!newInstallment.amount}
                          >
                            Add
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                )}

{activeStep === 4 && (
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
                        Exam Results Management
                      </Typography>
                      
                      {/* Current Exam Results Table */}
                      <Paper elevation={2} sx={{ mb: 4 }}>
                        <TableContainer>
                          <Table>
                            <TableHead>
                              <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                                <TableCell>Subject</TableCell>
                                <TableCell align="center">Theory</TableCell>
                                <TableCell align="center">Practical</TableCell>
                                <TableCell align="center">Total</TableCell>
                                <TableCell align="center">Exam Date</TableCell>
                                <TableCell align="center">Actions</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {(watch('examResults') || [])
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((result, index) => (
                                  <TableRow key={index}>
                                    <TableCell>
                                      {result.subjectName} ({result.subjectCode})
                                    </TableCell>
                                    <TableCell align="center">
                                      {editingResultId === index ? (
                                        <TextField
                                          type="number"
                                          size="small"
                                          value={newExamResult.theoryMarks}
                                          onChange={(e) => setNewExamResult({
                                            ...newExamResult,
                                            theoryMarks: e.target.value,
                                          })}
                                          sx={{ width: 80 }}
                                        />
                                      ) : (
                                        result.theoryMarks
                                      )}
                                    </TableCell>
                                    <TableCell align="center">
                                      {editingResultId === index ? (
                                        <TextField
                                          type="number"
                                          size="small"
                                          value={newExamResult.practicalMarks}
                                          onChange={(e) => setNewExamResult({
                                            ...newExamResult,
                                            practicalMarks: e.target.value,
                                          })}
                                          sx={{ width: 80 }}
                                        />
                                      ) : (
                                        result.practicalMarks
                                      )}
                                    </TableCell>
                                    <TableCell align="center">
                                      {result.totalMarks}
                                    </TableCell>
                                    <TableCell align="center">
                                      {editingResultId === index ? (
                                        <DatePicker
                                          value={newExamResult.examDate}
                                          onChange={(date) => setNewExamResult({
                                            ...newExamResult,
                                            examDate: date,
                                          })}
                                          renderInput={(params) => (
                                            <TextField
                                              {...params}
                                              size="small"
                                              sx={{ width: 150 }}
                                            />
                                          )}
                                        />
                                      ) : (
                                        result.examDate ? new Date(result.examDate).toLocaleDateString() : 'N/A'
                                      )}
                                    </TableCell>
                                    <TableCell align="center">
                                      {editingResultId === index ? (
                                        <>
                                          <Tooltip title="Save">
                                            <IconButton onClick={handleUpdateExamResult} color="primary">
                                              <SaveIcon />
                                            </IconButton>
                                          </Tooltip>
                                          <Tooltip title="Cancel">
                                            <IconButton onClick={handleCancelEdit} color="error">
                                              <CancelIcon />
                                            </IconButton>
                                          </Tooltip>
                                        </>
                                      ) : (
                                        <>
                                          <Tooltip title="Edit">
                                            <IconButton onClick={() => handleEditExamResult(index)} color="primary">
                                              <EditIcon />
                                            </IconButton>
                                          </Tooltip>
                                          <Tooltip title="Delete">
                                            <IconButton onClick={() => handleDeleteExamResult(index)} color="error">
                                              <DeleteIcon />
                                            </IconButton>
                                          </Tooltip>
                                        </>
                                      )}
                                    </TableCell>
                                  </TableRow>
                                ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                        <TablePagination
                          rowsPerPageOptions={[5, 10, 25]}
                          component="div"
                          count={(watch('examResults') || []).length}
                          rowsPerPage={rowsPerPage}
                          page={page}
                          onPageChange={handleChangePage}
                          onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                      </Paper>

                      {/* Add New Exam Result Section */}
                      <Typography variant="h6" gutterBottom sx={{ mt: 3, mb: 2 }}>
                        {editingResultId !== null ? 'Edit Exam Result' : 'Add New Exam Result'}
                      </Typography>
                      <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
                        <Grid container spacing={2} alignItems="center">
                          <Grid item xs={12} md={3}>
                            <FormControl fullWidth size="small">
                              <InputLabel>Subject</InputLabel>
                              <Select
                                value={newExamResult.subjectCode}
                                onChange={(e) => setNewExamResult({
                                  ...newExamResult,
                                  subjectCode: e.target.value,
                                })}
                                label="Subject"
                              >
                                {Object.entries(validSubjects).map(([code, name]) => (
                                  <MenuItem key={code} value={code}>
                                    {name} ({code})
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} md={2}>
                            <TextField
                              fullWidth
                              label="Theory Marks"
                              type="number"
                              variant="outlined"
                              size="small"
                              value={newExamResult.theoryMarks}
                              onChange={(e) => setNewExamResult({
                                ...newExamResult,
                                theoryMarks: e.target.value,
                              })}
                              inputProps={{ min: 0, max: 100 }}
                            />
                          </Grid>
                          <Grid item xs={12} md={2}>
                            <TextField
                              fullWidth
                              label="Practical Marks"
                              type="number"
                              variant="outlined"
                              size="small"
                              value={newExamResult.practicalMarks}
                              onChange={(e) => setNewExamResult({
                                ...newExamResult,
                                practicalMarks: e.target.value,
                              })}
                              inputProps={{ min: 0, max: 100 }}
                            />
                          </Grid>
                          <Grid item xs={12} md={3}>
                            <DatePicker
                              label="Exam Date"
                              value={newExamResult.examDate}
                              onChange={(date) => setNewExamResult({
                                ...newExamResult,
                                examDate: date,
                              })}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  fullWidth
                                  size="small"
                                  variant="outlined"
                                />
                              )}
                            />
                          </Grid>
                          <Grid item xs={12} md={2}>
                            <Button
                              variant="contained"
                              onClick={editingResultId !== null ? handleUpdateExamResult : handleAddExamResult}
                              fullWidth
                              disabled={!newExamResult.subjectCode || !newExamResult.theoryMarks || !newExamResult.practicalMarks}
                              startIcon={editingResultId !== null ? <SaveIcon /> : <AddIcon />}
                            >
                              {editingResultId !== null ? 'Update' : 'Add'}
                            </Button>
                            {editingResultId !== null && (
                              <Button
                                variant="outlined"
                                onClick={handleCancelEdit}
                                fullWidth
                                sx={{ mt: 1 }}
                                startIcon={<CancelIcon />}
                              >
                                Cancel
                              </Button>
                            )}
                          </Grid>
                        </Grid>
                      </Paper>

                      {/* Final Grade Selection */}
                      <Grid item xs={12} md={4} sx={{ mt: 2 }}>
                        <FormControl fullWidth>
                          <InputLabel>Final Grade</InputLabel>
                          <Select
                            label="Final Grade"
                            {...register('finalGrade')}
                            defaultValue="Pending"
                          >
                            {grades.map((grade) => (
                              <MenuItem key={grade} value={grade}>
                                {grade}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                    </Grid>
                  </Grid>
                )}

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                  <Button
                    variant="outlined"
                    onClick={handlePrevStep}
                    disabled={activeStep === 0}
                  >
                    Back
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={handleReset}
                    sx={{ mr: 2 }}
                  >
                    Reset
                  </Button>
                  {activeStep < steps.length - 1 ? (
                    <Button
                      variant="contained"
                      onClick={handleNextStep}
                    >
                      Next
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      color="primary"
                      disabled={loading}
                      onClick={handleSubmit(handleFormSubmit)}
                      startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SaveIcon />}
                    >
                      {loading ? 'Saving...' : 'Save Changes'}
                    </Button>
                  )}
                </Box>
              </div>
            )}
          </Paper>
        </Container>
      </LocalizationProvider>
    </div>
  );
};

export default EditStudentForm;