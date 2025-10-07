import React, { useState, useContext } from "react";
import axios from "../../api/api";
import { AuthContext } from "../../context/AuthContext";
import { NotificationContext } from "../../context/NotificationContext";

const SubmitClaim = () => {
  const { user } = useContext(AuthContext);
  const { showNotification } = useContext(NotificationContext);

  const [formData, setFormData] = useState({
    policyId: "",
    claimAmount: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`/users/${user.id}/claims`, formData);
      showNotification("Claim submitted successfully ✅", "success");
      setFormData({ policyId: "", claimAmount: "", description: "" });
    } catch (err) {
      showNotification("Failed to submit claim ❌", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-3xl mx-auto mt-10 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-6">Submit a Claim</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-1 font-medium text-gray-700">Policy ID</label>
          <input
            type="text"
            name="policyId"
            value={formData.policyId}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Claim Amount</label>
          <input
            type="number"
            name="claimAmount"
            value={formData.claimAmount}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
            rows={4}
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded-md text-white font-semibold transition ${
            loading ? "bg-blue-300" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Submitting..." : "Submit Claim"}
        </button>
      </form>
    </div>
  );
};

export default SubmitClaim;
