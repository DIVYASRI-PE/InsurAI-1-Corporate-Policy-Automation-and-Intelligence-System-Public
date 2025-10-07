import React, { useEffect, useState, useContext } from "react";
import axios from "../../api/api";
import { AuthContext } from "../../context/AuthContext";

const ViewPolicies = () => {
  const { user } = useContext(AuthContext);
  const [policies, setPolicies] = useState([]);

  useEffect(() => {
    const fetchPolicies = async () => {
      try {
        const res = await axios.get("/policies");
        setPolicies(res.data);
      } catch (err) {
        console.error("Failed to fetch policies", err);
      }
    };
    fetchPolicies();
  }, []);

  return (
    <div className="p-8 max-w-6xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Available Policies</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {policies.map((policy) => (
          <div key={policy.id} className="p-4 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg">{policy.name}</h3>
            <p className="text-gray-600 mt-1">{policy.description}</p>
            <p className="mt-2 font-medium">${policy.premium} / month</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewPolicies;
