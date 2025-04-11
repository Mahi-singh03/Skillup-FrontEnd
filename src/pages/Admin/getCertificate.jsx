import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import api from '../../utils/api';
import { motion } from 'framer-motion';
import { FaDownload, FaSpinner, FaFileAlt } from 'react-icons/fa';

const Certificate = () => {
  const [rollNo, setRollNo] = useState('');
  const [message, setMessage] = useState('');
  const [marksPdfUrl, setMarksPdfUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerateCertificates = async () => {
    if (!rollNo.trim()) {
      setMessage('Please enter a valid roll number.');
      return;
    }

    setLoading(true);
    setMessage('');
    setMarksPdfUrl(null);

    try {
      // Call the generate certificate endpoint
      const response = await api.get(`/api/certificates/generate-certificate/${rollNo}`);
      const { marksUrl } = response.data;

      // Fetch PDF as blob for preview
      const marksResponse = await api.get(marksUrl.substring(marksUrl.indexOf('/api')), {
        responseType: 'blob',
      });

      const marksBlob = new Blob([marksResponse.data], { type: 'application/pdf' });
      setMarksPdfUrl(URL.createObjectURL(marksBlob));
      setMessage('Statement of Marks generated successfully! Preview below.');
    } catch (error) {
      const errorMsg =
        error.response?.data?.message || 'Error generating certificate. Please try again.';
      setMessage(errorMsg);
      console.error('Certificate generation error:', error);
      if (error.response?.status === 401) {
        setMessage('Session expired. Redirecting to login...');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = (pdfUrl, fileName) => {
    if (pdfUrl) {
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
  };

  const cardVariants = {
    hover: { y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' },
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto p-6 py-20 pt-67"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-100"
        variants={itemVariants}
      >
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-6 text-center"
          variants={itemVariants}
        >
          <FaFileAlt className="inline-block mr-2 text-blue-500" />
          Statement of Marks Generator
        </motion.h2>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-center mb-6 gap-4"
          variants={itemVariants}
        >
          <input
            type="text"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            placeholder="Enter Roll Number"
            className="p-3 w-full md:w-2/3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm disabled:bg-gray-50"
            disabled={loading}
          />
          <motion.button
            onClick={handleGenerateCertificates}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-70 flex items-center justify-center min-w-48"
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {loading ? (
              <>
                <FaSpinner className="animate-spin mr-2" />
                Generating...
              </>
            ) : (
              'Generate Statement'
            )}
          </motion.button>
        </motion.div>

        {message && (
          <motion.p
            className={`mt-4 text-center text-lg font-medium p-3 rounded-lg ${
              message.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {message}
          </motion.p>
        )}
      </motion.div>

      {marksPdfUrl && (
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div
            className="bg-white rounded-xl shadow-md border border-gray-100 w-full max-w-xl"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="bg-blue-50 p-4 border-b border-gray-200 flex items-center">
              <FaFileAlt className="text-blue-500 mr-2" />
              <h4 className="text-lg font-semibold text-gray-700">Statement of Marks</h4>
            </div>
            <div className="p-4 flex justify-center">
              <Document file={marksPdfUrl}>
                <Page pageNumber={1} width={400} />
              </Document>
            </div>
            <div className="p-4 bg-gray-50 border-t border-gray-200">
              <motion.button
                onClick={() => handleDownload(marksPdfUrl, `statement_of_marks_${rollNo}.pdf`)}
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaDownload className="mr-2" />
                Download
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Certificate;