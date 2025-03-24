import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import "./styles/addStaff.css";

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
    LeavingDate: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [generatedStaffId, setGeneratedStaffId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Remove empty LeavingDate before sending
      const payload = { ...formData };
      if (!payload.LeavingDate) delete payload.LeavingDate;

      const response = await fetch(
        "https://skillup-backend-production.up.railway.app/api/staff/verify",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Failed to add staff");
      }

      const responseData = await response.json();
      setGeneratedStaffId(responseData.StaffID);
      setShowPopup(true);
      setFormData({
        Name: "",
        JoinningData: "",
        Designation: "",
        DOB: "",
        FatherName: "",
        MotherName: "",
        Address: "",
        LeavingDate: ""
      });
    } catch (error) {
      setError(error.message);
      console.error("Error adding staff:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoToHome = () => navigate("/");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 px-4 sm:px-1 py-6 main">
      <div className="w-800 max-w-md bg-white p-6 sm:p-8 rounded-xl shadow-lg content">
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-600 text-center mb-6">
          Add New Staff Member
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {/* Required Fields */}
          {[
            { label: "Name", name: "Name", type: "text", required: true },
            { label: "Joining Date", name: "JoinningData", type: "date", required: true },
            { label: "Designation", name: "Designation", type: "text", required: true },
            { label: "Date of Birth", name: "DOB", type: "date", required: true },
            { label: "Father's Name", name: "FatherName", type: "text", required: true },
            { label: "Mother's Name", name: "MotherName", type: "text", required: true },
            { label: "Address", name: "Address", type: "text", required: true },
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-gray-600 text-sm font-semibold mb-1">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                required={field.required}
                className="w-full px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={`Enter ${field.label.toLowerCase()}`}
                value={formData[field.name]}
                onChange={handleChange}
                disabled={loading}
              />
            </div>
          ))}

          {/* Optional Leaving Date */}
          <div>
            <label className="block text-gray-600 text-sm font-semibold mb-1">
              Leaving Date (Optional)
            </label>
            <input
              type="date"
              name="LeavingDate"
              className="w-full px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.LeavingDate}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          {error && <div className="text-red-500 text-sm">⚠️ {error}</div>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 sm:py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-sm sm:text-base"
          >
            {loading ? <BeatLoader color="#ffffff" size={10} /> : "Add Staff"}
          </button>
        </form>

        {/* Success Popup */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-blue-200 bg-opacity-50 z-50">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg max-w-md w-full">
              <h2 className="text-2xl font-bold text-green-600 mb-4">Success!</h2>
              <p className="text-gray-700 mb-6">
                New staff member <strong>{formData.Name}</strong> has been added
                successfully. {generatedStaffId && `Staff ID: ${generatedStaffId}`}
              </p>
              <button
                onClick={handleGoToHome}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
              >
                Go to Dashboard
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddStaff;