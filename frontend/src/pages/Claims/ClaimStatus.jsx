import React, { useEffect, useState, useContext } from "react";
import axios from "../../api/api";
import { AuthContext } from "../../context/AuthContext";

const ClaimStatus = () => {
  const { user } = useContext(AuthContext);
  const [claims, setClaims] = useState([]);

  useEffect(() => {
    const fetchClaims = async () => {
      try {
        const res = await axios.get(`/users/${user.id}/claims`);
        setClaims(res.data);
      } catch (err) {
        console.error("Failed to fetch claims", err);
      }
    };
    fetchClaims();
  }, [user]);

  return (
    <div className="p-8 max-w-6xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Your Claims</h2>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Claim ID</th>
            <th className="border p-2">Policy ID</th>
            <th className="border p-2">Amount</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Submitted On</th>
          </tr>
        </thead>
        <tbody>
          {claims.map((claim) => (
            <tr key={claim.id} className="hover:bg-gray-50">
              <td className="border p-2">{claim.id}</td>
              <td className="border p-2">{claim.policyId}</td>
              <td className="border p-2">${claim.claimAmount}</td>
              <td className="border p-2">{claim.status}</td>
              <td className="border p-2">{new Date(claim.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClaimStatus;
