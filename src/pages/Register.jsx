// Frontend (StudentRegistrationForm.jsx)
import React, { useState, useEffect, useContext, useRef } from 'react';
import { Button, Form, Input, Select, Radio, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import { UserContext } from "../utils/components/UserContext";
import './Styles/StudentRegistrationForm.css';

const { Option } = Select;

const StudentRegistrationForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { login } = useContext(UserContext);
  const formRef = useRef(null);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      navigate('/profile', { replace: true });
    }
  }, [navigate]);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const formattedValues = {
        ...values,
        dateOfBirth: values.dateOfBirth ? dayjs(values.dateOfBirth).format('YYYY-MM-DD') : null,
      };

      const response = await fetch(
        'https://skillup-backend-production.up.railway.app/api/students/register',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formattedValues),
        }
      );

      const data = await response.json();

      if (response.ok) {
        login(data);
        message.success('Registration successful!');
        navigate('/profile', { replace: true });
      } else {
        message.error(data.message || 'Registration failed.');
      }
    } catch (error) {
      console.error('Error:', error);
      message.error('An error occurred. Try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const form = formRef.current;
      const inputs = form.getElementsByTagName('input');
      const selects = form.getElementsByTagName('select');
      const textareas = form.getElementsByTagName('textarea');
      const allFields = [...inputs, ...selects, ...textareas];
      const currentIndex = Array.from(allFields).indexOf(e.target);
      
      if (currentIndex === allFields.length - 1) {
        form.submit();
      } else {
        const nextField = allFields[currentIndex + 1];
        if (nextField) {
          nextField.focus();
        }
      }
    }
  };

  return (
    <div className="form-container">
      <h1 className="main-heading">Register Yourself</h1>
      <Form
        layout="vertical"
        form={form}
        onFinish={onFinish}
        className="custom-form"
        ref={formRef}
        onKeyPress={handleKeyPress}
      >
        <Form.Item label="Full Name" name="fullName" rules={[{ required: true, message: 'Enter full name' }]}>
          <Input spellCheck={false} autoCorrect="off" autoCapitalize="none" placeholder="John Doe" />
        </Form.Item>

        <Form.Item label="Father's Name" name="fatherName" rules={[{ required: true, message: 'Enter father name' }]}>
          <Input spellCheck={false} autoCorrect="off" autoCapitalize="none" placeholder="Father's Name" />
        </Form.Item>

        <Form.Item label="Mother's Name" name="motherName" rules={[{ required: true, message: 'Enter mother name' }]}>
          <Input spellCheck={false} autoCorrect="off" autoCapitalize="none" placeholder="Mother's Name" />
        </Form.Item>

        <Form.Item label="Gender" name="gender" rules={[{ required: true, message: 'Select gender' }]}>
          <Radio.Group>
            <Radio value="Male">Male</Radio>
            <Radio value="Female">Female</Radio>
            <Radio value="Other">Other</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Email" name="emailAddress" rules={[{ required: true, type: 'email', message: 'Enter valid email' }]}>
          <Input placeholder="example@email.com" />
        </Form.Item>

        <Form.Item label="Phone Number" name="phoneNumber" rules={[{ required: true, message: 'Enter phone number' }]}>
          <Input placeholder="1234567890" />
        </Form.Item>

        <Form.Item label="Date of Birth" name="dateOfBirth" rules={[{ required: true, message: 'Select or enter date of birth' }]}>
          <Input
            type="date"
            className="w-full px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="YYYY-MM-DD"
            disabled={loading}
          />
        </Form.Item>

        <Form.Item label="Aadhar Number" name="aadharNumber" rules={[{ required: true, pattern: /^[0-9]{12}$/, message: 'Enter 12-digit Aadhar number' }]}>
          <Input placeholder="000000000000" />
        </Form.Item>



        <Form.Item label="Course" name="selectedCourse" rules={[{ required: true, message: 'Select course' }]}>
          <Select placeholder="Select a course">
            {['HTML, CSS, JS', 'React','Computer Course', , 'Tally', 'MERN FullStack', 'Autocad', 'CorelDRAW', 'Premier Pro', 'WordPress', 'MS Office', 'PTE'].map((course) => (
              <Option key={course} value={course}>{course}</Option>
            ))}
          </Select>
        </Form.Item>


        <Form.Item label="Course Duration" name="courseDuration" rules={[{ required: true, message: 'Select course duration' }]}>
          <Select placeholder="Select duration">
            {['3 months', '6 months', '1 year'].map((duration) => (
              <Option key={duration} value={duration}>{duration}</Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Address" name="address" rules={[{ required: true, message: 'Enter address' }]}>
          <Input.TextArea spellCheck={false} rows={2} placeholder="Enter full address" />
        </Form.Item>

        <Form.Item label="Qualification" name="qualification" rules={[{ required: true, message: 'Select qualification' }]}>
          <Select placeholder="Select qualification">
            {['10th', '12th', 'Graduated'].map((qual) => (
              <Option key={qual} value={qual}>{qual}</Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Password" name="password" rules={[{ required: true, min: 6, message: 'Min 6 characters' }]}>
          <Input.Password placeholder="Enter a secure password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} className="submit-button">
            {loading ? 'Registering...' : 'Register'}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default StudentRegistrationForm;