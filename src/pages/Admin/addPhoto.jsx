import React, { useState, useCallback, useEffect } from 'react';
import api from '../../utils/api';

const StudentPhotoManager = () => {
  const [rollNo, setRollNo] = useState('');
  const [studentName, setStudentName] = useState('');
  const [showNamePopup, setShowNamePopup] = useState(false);
  const [showUploadPopup, setShowUploadPopup] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Handle roll number submission
  const handleRollNoSubmit = useCallback(async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setIsLoading(true);
    
    try {
      const response = await api.get(`/api/students/rollno/${rollNo.trim()}`);
      setStudentName(response.data.student.fullName);
      setShowNamePopup(true);
    } catch (err) {
      setError(err.response?.data?.error || 'Student not found. Please check the roll number.');
      setShowNamePopup(false);
    } finally {
      setIsLoading(false);
    }
  }, [rollNo]);

  // Handle photo file selection
  const handlePhotoChange = useCallback((e) => {
    const file = e.target.files[0];
    setError('');
    
    if (!file) return;

    // File validation
    const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (!validTypes.includes(file.type)) {
      setError('Please upload a JPEG, JPG, or PNG image only.');
      return;
    }

    if (file.size > 50 * 1024) { // 50KB limit
      setError('File size must not exceed 50KB');
      return;
    }

    // Create preview and store file
    if (preview) URL.revokeObjectURL(preview);
    setPhoto(file);
    setPreview(URL.createObjectURL(file));
  }, [preview]);

  // Handle photo upload
  const handlePhotoUpload = useCallback(async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    
    if (!photo) {
      setError('Please select a photo to upload');
      return;
    }

    setIsLoading(true);
    
    try {
      const token = localStorage.getItem('adminToken');
      if (!token) throw new Error('Please login to upload photo');

      const formData = new FormData();
      formData.append('photo', photo);
      formData.append('rollNo', rollNo);

      // Ensure proper headers for file upload
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      };

      await api.post('/api/students/student/photo', formData, config);

      // Success handling
      setMessage('Photo uploaded successfully!');
      setTimeout(() => setMessage(''), 3000);
      setShowUploadPopup(false);
      setPhoto(null);
      if (preview) URL.revokeObjectURL(preview);
      setPreview(null);
      
    } catch (err) {
      console.error('Upload error:', err);
      const errorMessage = err.response?.data?.error || err.message || 'Upload failed. Please try again.';
      setError(errorMessage.includes('upload') ? errorMessage : `Server error: ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  }, [photo, rollNo, preview]);

  // Cleanup preview URLs
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md border border-gray-200">
        {/* Main Form */}
        <form onSubmit={handleRollNoSubmit} className="mb-6">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Student Roll Number
            </label>
            <input
              type="text"
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter roll number"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 px-4 rounded-lg text-white transition-colors ${
              isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {isLoading ? 'Searching...' : 'Find Student'}
          </button>
        </form>

        {/* Status Messages */}
        {error && <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg border-l-4 border-red-500">{error}</div>}
        {message && <div className="mb-4 p-3 bg-green-50 text-green-700 rounded-lg border-l-4 border-green-500">{message}</div>}

        {/* Name Confirmation Popup */}
        {showNamePopup && (
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-sm animate-pop-in">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Confirm Student</h3>
              <div className="mb-5 bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-700"><span className="font-medium">Roll No:</span> {rollNo}</p>
                <p className="text-gray-700"><span className="font-medium">Name:</span> {studentName}</p>
              </div>
              <div className="flex gap-3 justify-end">
                <button
                  onClick={() => setShowNamePopup(false)}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg border"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowUploadPopup(true)}
                  className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Photo Upload Popup */}
        {showUploadPopup && (
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-md animate-pop-in">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Upload Student Photo</h3>
              <form onSubmit={handlePhotoUpload} encType="multipart/form-data">
                {/* File Upload Area */}
                <div className="mb-5">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Photo (JPEG/PNG, max 50KB)
                  </label>
                  <label className="flex flex-col items-center justify-center h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors">
                    <div className="flex flex-col items-center pt-5 pb-6">
                      <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                      <p className="mt-2 text-sm text-gray-500">
                        {photo ? photo.name : 'Click to upload or drag and drop'}
                      </p>
                    </div>
                    <input
                      type="file"
                      name="photo"
                      accept="image/jpeg,image/png,image/jpg"
                      onChange={handlePhotoChange}
                      className="hidden"
                    />
                  </label>
                </div>

                {/* Preview Section */}
                {preview && (
                  <div className="mb-5 flex flex-col items-center">
                    <p className="text-sm text-gray-600 mb-2">Preview:</p>
                    <img
                      src={preview}
                      alt="Preview"
                      className="max-w-full max-h-48 object-contain rounded-lg border border-gray-200"
                    />
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3 justify-end">
                  <button
                    type="button"
                    onClick={() => setShowUploadPopup(false)}
                    className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg border"
                    disabled={isLoading}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className={`px-4 py-2 rounded-lg text-white ${
                      isLoading || !photo ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                    }`}
                    disabled={isLoading || !photo}
                  >
                    {isLoading ? 'Uploading...' : 'Upload Photo'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentPhotoManager;