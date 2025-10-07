import React, { useEffect, useState, useContext } from "react";
import axios from "../../api/api";
import { AuthContext } from "../../context/AuthContext";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const res = await axios.get(`/users/${user.id}/payments`);
        setPayments(res.data);
      } catch (err) {
        console.error("Failed to fetch payments", err);
      }
    };
    fetchPayments();
  }, [user]);

  return (
    <div className="p-8 max-w-6xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Payment History</h2>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Payment ID</th>
            <th className="border p-2">Policy ID</th>
            <th className="border p-2">Amount</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((p) => (
            <tr key={p.id} className="hover:bg-gray-50">
              <td className="border p-2">{p.id}</td>
              <td className="border p-2">{p.policyId}</td>
              <td className="border p-2">${p.amount}</td>
              <td className="border p-2">{new Date(p.createdAt).toLocaleDateString()}</td>
              <td className="border p-2">{p.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
