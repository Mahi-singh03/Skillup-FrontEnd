import React, { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf';
import api from "../../utils/api";
import { motion } from 'framer-motion';
import { FaDownload, FaSpinner, FaCertificate, FaFileAlt } from 'react-icons/fa';

const Certificate = () => {
  const [rollNo, setRollNo] = useState('');
  const [message, setMessage] = useState('');
  const [completionPdfUrl, setCompletionPdfUrl] = useState(null);
  const [marksPdfUrl, setMarksPdfUrl] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerateCertificates = async () => {
    if (!rollNo) {
      setMessage('Please enter a roll number.');
      return;
    }

    setLoading(true);
    setMessage('');
    setCompletionPdfUrl(null);
    setMarksPdfUrl(null);

    try {
      const response = await api.generateCertificate(rollNo);
      const { completionUrl, marksUrl } = response.data;

      // Fetch PDF blobs for preview
      const completionResponse = await api.downloadFile(`completion_certificate_${rollNo}.pdf`);
      const marksResponse = await api.downloadFile(`statement_of_marks_${rollNo}.pdf`);

      const completionBlob = new Blob([completionResponse.data], { type: 'application/pdf' });
      const marksBlob = new Blob([marksResponse.data], { type: 'application/pdf' });

      setCompletionPdfUrl(URL.createObjectURL(completionBlob));
      setMarksPdfUrl(URL.createObjectURL(marksBlob));
      setMessage('Certificates generated successfully! Preview below.');
    } catch (error) {
      setMessage('Error generating certificates. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadCompletion = () => {
    if (completionPdfUrl) {
      const link = document.createElement('a');
      link.href = completionPdfUrl;
      link.setAttribute('download', `completion_certificate_${rollNo}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    }
  };

  const handleDownloadMarks = () => {
    if (marksPdfUrl) {
      const link = document.createElement('a');
      link.href = marksPdfUrl;
      link.setAttribute('download', `statement_of_marks_${rollNo}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    }
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const cardVariants = {
    hover: {
      y: -5,
      boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
    }
  };

  return (
    <motion.div 
      className="max-w-4xl mx-auto p-6 py-50"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="bg-white rounded-xl shadow-lg overflow-hidden p-8 mb-8 border border-gray-100"
        variants={itemVariants}
      >
        <motion.h2 
          className="text-3xl font-bold text-gray-800 mb-6 text-center"
          variants={itemVariants}
        >
          <FaCertificate className="inline-block mr-2 text-blue-500" />
          Certificate Generator
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
            className="p-3 w-full md:w-2/3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm disabled:bg-gray-50"
            disabled={loading}
          />
          <motion.button
            onClick={handleGenerateCertificates}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70 flex items-center justify-center min-w-48"
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {loading ? (
              <>
                <FaSpinner className="animate-spin mr-2" />
                Generating...
              </>
            ) : 'Generate Certificates'}
          </motion.button>
        </motion.div>

        {message && (
          <motion.p 
            className={`mt-4 text-center text-lg font-medium p-3 rounded-lg ${message.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {message}
          </motion.p>
        )}
      </motion.div>

      {completionPdfUrl && marksPdfUrl && (
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="bg-blue-50 p-4 border-b border-gray-200 flex items-center">
              <FaCertificate className="text-blue-500 mr-2" />
              <h4 className="text-lg font-semibold text-gray-700">Completion Certificate</h4>
            </div>
            <div className="p-4 flex justify-center">
              <Document file={completionPdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={1} width={300} />
              </Document>
            </div>
            <div className="p-4 bg-gray-50 border-t border-gray-200">
              <motion.button
                onClick={handleDownloadCompletion}
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaDownload className="mr-2" />
                Download Completion Certificate
              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="bg-blue-50 p-4 border-b border-gray-200 flex items-center">
              <FaFileAlt className="text-blue-500 mr-2" />
              <h4 className="text-lg font-semibold text-gray-700">Statement of Marks</h4>
            </div>
            <div className="p-4 flex justify-center">
              <Document file={marksPdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={1} width={300} />
              </Document>
            </div>
            <div className="p-4 bg-gray-50 border-t border-gray-200">
              <motion.button
                onClick={handleDownloadMarks}
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaDownload className="mr-2" />
                Download Statement of Marks
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Certificate;