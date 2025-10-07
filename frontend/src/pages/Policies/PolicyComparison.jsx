import React, { useEffect, useState } from "react";
import axios from "../../api/api";

const PolicyComparison = () => {
  const [policies, setPolicies] = useState([]);

  useEffect(() => {
    const fetchPolicies = async () => {
      const res = await axios.get("/policies");
      setPolicies(res.data);
    };
    fetchPolicies();
  }, []);

  return (
    <div className="p-8 max-w-6xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Compare Policies</h2>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Policy Name</th>
            <th className="border p-2">Type</th>
            <th className="border p-2">Premium</th>
            <th className="border p-2">Coverage</th>
          </tr>
        </thead>
        <tbody>
          {policies.map((p) => (
            <tr key={p.id} className="hover:bg-gray-50">
              <td className="border p-2">{p.name}</td>
              <td className="border p-2">{p.type}</td>
              <td className="border p-2">${p.premium}</td>
              <td className="border p-2">{p.coverage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PolicyComparison;
