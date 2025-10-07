import React, { useState, useEffect, useContext } from "react";
import axios from "../../api/api";
import { AuthContext } from "../../context/AuthContext";
import { NotificationContext } from "../../context/NotificationContext";

const EnrollPolicy = () => {
  const { user } = useContext(AuthContext);
  const { showNotification } = useContext(NotificationContext);
  const [policies, setPolicies] = useState([]);
  const [selectedPolicy, setSelectedPolicy] = useState("");

  useEffect(() => {
    const fetchPolicies = async () => {
      const res = await axios.get("/policies");
      setPolicies(res.data);
    };
    fetchPolicies();
  }, []);

  const handleEnroll = async () => {
    if (!selectedPolicy) return;
    try {
      await axios.post(`/users/${user.id}/enroll`, { policyId: selectedPolicy });
      showNotification("Policy enrolled successfully ✅", "success");
    } catch (err) {
      showNotification("Enrollment failed ❌", "error");
    }
  };

  return (
    <div className="p-8 max-w-3xl mx-auto mt-10 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-6">Enroll in a Policy</h2>
      <select
        value={selectedPolicy}
        onChange={(e) => setSelectedPolicy(e.target.value)}
        className="w-full border rounded p-2 mb-4 focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select a policy</option>
        {policies.map((p) => (
          <option key={p.id} value={p.id}>
            {p.name} - ${p.premium}/month
          </option>
        ))}
      </select>
      <button
        onClick={handleEnroll}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Enroll
      </button>
    </div>
  );
};

export default EnrollPolicy;
