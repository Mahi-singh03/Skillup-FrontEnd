import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import "./styles/addStaff.css"

const AddStaff = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Name: "",
    JoinningData: "",
    Designation: "",
    DOB: "",
    FatherName: "",
    MotherName: "",
    Address: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://skillup-backend-production.up.railway.app/api/staff", // Replace with your API endpoint
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Failed to add staff");
      }

      // Show popup on success
      setShowPopup(true);
    } catch (error) {
      setError(error.message);
      console.error("Error adding staff:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoToHome = () => {
    navigate("/"); // Navigate to the home page
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 px-4 sm:px-1 py-6 main">
      <div className="w-800 max-w-md bg-white p-6 sm:p-8 rounded-xl shadow-lg content">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6">
          Add Staff
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-gray-600 text-sm font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              name="Name"
              required
              className="w-full px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter staff name"
              value={formData.Name}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          {/* Joining Date Field */}
          <div>
            <label className="block text-gray-600 text-sm font-semibold mb-1">
              Joining Date
            </label>
            <input
              type="date"
              name="JoinningData"
              className="w-full px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.JoinningData}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          {/* Designation Field */}
          <div>
            <label className="block text-gray-600 text-sm font-semibold mb-1">
              Designation
            </label>
            <input
              type="text"
              name="Designation"
              className="w-full px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter designation"
              value={formData.Designation}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          {/* Date of Birth Field */}
          <div>
            <label className="block text-gray-600 text-sm font-semibold mb-1">
              Date of Birth
            </label>
            <input
              type="date"
              name="DOB"
              required
              className="w-full px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.DOB}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          {/* Father's Name Field */}
          <div>
            <label className="block text-gray-600 text-sm font-semibold mb-1">
              Father's Name
            </label>
            <input
              type="text"
              name="FatherName"
              className="w-full px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter father's name"
              value={formData.FatherName}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          {/* Mother's Name Field */}
          <div>
            <label className="block text-gray-600 text-sm font-semibold mb-1">
              Mother's Name
            </label>
            <input
              type="text"
              name="MotherName"
              className="w-full px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter mother's name"
              value={formData.MotherName}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          {/* Address Field */}
          <div>
            <label className="block text-gray-600 text-sm font-semibold mb-1">
              Address
            </label>
            <input
              type="text"
              name="Address"
              className="w-full px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter address"
              value={formData.Address}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="text-red-500 text-sm">⚠️ {error}</div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 sm:py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-sm sm:text-base"
          >
            {loading ? <BeatLoader color="#ffffff" size={10} /> : "Add Staff"}
          </button>
        </form>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg max-w-md w-full transform transition-all duration-300 scale-95 hover:scale-100">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Success!</h2>
            <p className="text-gray-700 mb-6">
              New staff member <strong>{formData.Name}</strong> has been added successfully.
            </p>
            <button
              onClick={handleGoToHome}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
            >
              Go to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddStaff;