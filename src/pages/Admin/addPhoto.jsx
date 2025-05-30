import React, { useState, useCallback, useEffect } from 'react';
import api from '../../utils/api';

const StudentPhotoManager = () => {
  const [rollNo, setRollNo] = useState('');
  const [studentName, setStudentName] = useState('');
  const [currentPhoto, setCurrentPhoto] = useState(null);
  const [showNamePopup, setShowNamePopup] = useState(false);
  const [showUploadPopup, setShowUploadPopup] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRollNoSubmit = useCallback(async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setIsLoading(true);

    try {
      const response = await api.get(`/api/students/rollno/${rollNo.trim()}`);
      setStudentName(response.data.student.fullName);
      setCurrentPhoto(response.data.student.photo?.url || null);
      setShowNamePopup(true);
    } catch (err) {
      setError(err.response?.data?.error || 'Student not found. Please check the roll number.');
      setShowNamePopup(false);
    } finally {
      setIsLoading(false);
    }
  }, [rollNo]);

  const handlePhotoChange = useCallback((e) => {
    const file = e.target.files[0];
    setError('');
  
    if (!file) return;
  
    const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (!validTypes.includes(file.type)) {
      setError('Please upload a JPEG, JPG, or PNG image only.');
      return;
    }
  
    if (file.size > 2 * 1024 * 1024) {
      setError('File size must not exceed 2MB');
      return;
    }
  
    // Check image dimensions
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      if (img.width < 500 || img.height < 500) {
        setError('Image should be at least 500x500 pixels for best results');
        URL.revokeObjectURL(img.src);
        return;
      }
      
      if (preview) URL.revokeObjectURL(preview);
      setPhoto(file);
      setPreview(URL.createObjectURL(file));
      URL.revokeObjectURL(img.src);
    };
    img.onerror = () => {
      setError('Invalid image file');
      URL.revokeObjectURL(img.src);
    };
  }, [preview]);

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

      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      };

      const response = await api.post('/api/students/student/photo', formData, config);

      setMessage('Photo uploaded successfully!');
      setCurrentPhoto(response.data.photo.url);
      setShowUploadPopup(false);
      setPhoto(null);
      if (preview) URL.revokeObjectURL(preview);
      setPreview(null);
    } catch (err) {
      console.error('Upload error:', err);
      setError(err.response?.data?.error || 'Upload failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [photo, rollNo, preview]);

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Student Photo Manager</h2>
        
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

        {error && <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg border-l-4 border-red-500">{error}</div>}
        {message && <div className="mb-4 p-3 bg-green-50 text-green-700 rounded-lg border-l-4 border-green-500">{message}</div>}

        {currentPhoto && (
          <div className="mb-6 p-4 border border-gray-200 rounded-lg">
            <h3 className="text-lg font-medium text-gray-800 mb-3">Current Photo</h3>
            <div className="flex justify-center">
              <img 
                src={currentPhoto} 
                alt="Current student photo" 
                className="max-w-full h-48 object-contain rounded-lg"
              />
            </div>
          </div>
        )}

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
                  onClick={() => {
                    setShowNamePopup(false);
                    setShowUploadPopup(true);
                  }}
                  className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg"
                >
                  {currentPhoto ? 'Update Photo' : 'Upload Photo'}
                </button>
              </div>
            </div>
          </div>
        )}

        {showUploadPopup && (
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-md animate-pop-in">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Upload Student Photo</h3>
              <form onSubmit={handlePhotoUpload}>
                <div className="mb-5">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Photo (JPEG/PNG, max 2MB)
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

                {error && <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg border-l-4 border-red-500">{error}</div>}

                <div className="flex gap-3 justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      setShowUploadPopup(false);
                      setPhoto(null);
                      if (preview) URL.revokeObjectURL(preview);
                      setPreview(null);
                    }}
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