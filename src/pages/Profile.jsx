import React, { useState, useEffect } from 'react';
import { Container, Grid, Paper, Typography, Avatar, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Styles/Profile.css';

const Profile = () => {
    const [studentData, setStudentData] = useState({});
    const [profilePic, setProfilePic] = useState(localStorage.getItem('profilePic') || '/placeholder-profile.png');
    const navigate = useNavigate();

    useEffect(() => {
        try {
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                const parsedUser = JSON.parse(storedUser);
                if (parsedUser.student) {
                    setStudentData(parsedUser.student);
                }
            }
        } catch (error) {
            console.error('Error loading student data:', error);
        }
    }, []);

    return (
        <Container maxWidth="md">
            <Paper elevation={3} className="profile-container">
                <div className="profile-header">
                    <Avatar src={profilePic} alt="Profile" className="profile-avatar" />
                </div>

                {/* Roll Number & Full Name */}
                <Grid container spacing={3} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <TextField 
                            fullWidth 
                            label="Full Name" 
                            variant="outlined" 
                            value={studentData.fullName || 'N/A'} 
                            InputProps={{ readOnly: true }} 
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField 
                            fullWidth 
                            label="Roll Number" 
                            variant="outlined" 
                            value={studentData.rollNo|| 'N/A'} 
                            className="highlighted-field"
                            InputProps={{ readOnly: true }} 
                        />
                    </Grid>
                </Grid>

                {/* Personal Details Section */}
                <Typography variant="h5" className="section-title">Personal Details</Typography>
                <Grid container spacing={3}>
                    {['fatherName', 'motherName', 'gender', 'emailAddress', 'phoneNumber', 'dateOfBirth', 'aadharNumber', 'address', 'qualification'].map((key) => (
                        <Grid item xs={12} md={6} key={key}>
                            <TextField 
                                fullWidth 
                                label={key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} 
                                variant="outlined" 
                                value={studentData[key] || 'N/A'} 
                                InputProps={{ readOnly: true }} 
                            />
                        </Grid>
                    ))}
                </Grid>

                {/* Course Details Section */}
                <Typography variant="h5" className="section-title">Course Details</Typography>
                <Grid container spacing={3}>
                    {['selectedCourse', 'courseDuration'].map((key) => (
                        <Grid item xs={12} md={6} key={key}>
                            <TextField 
                                fullWidth 
                                label={key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} 
                                variant="outlined" 
                                value={studentData[key] || 'N/A'} 
                                InputProps={{ readOnly: true }} 
                            />
                        </Grid>
                    ))}
                </Grid>
                
                {/* Navigate to Weekly Exam Button */}
                <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth 
                    style={{ marginTop: '20px' }}
                    onClick={() => navigate('/Exams/Weekly-Exam')}
                >
                    Go to Weekly Exam
                </Button>
            </Paper>
        </Container>
    );
};

export default Profile;
