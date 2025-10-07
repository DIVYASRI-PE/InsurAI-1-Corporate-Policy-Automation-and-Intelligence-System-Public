import React, { useState, useContext } from "react";
import axios from "../../api/api";
import { AuthContext } from "../../context/AuthContext";
import { NotificationContext } from "../../context/NotificationContext";

const PaymentPage = () => {
  const { user } = useContext(AuthContext);
  const { showNotification } = useContext(NotificationContext);

  const [amount, setAmount] = useState("");
  const [policyId, setPolicyId] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    if (!policyId || !amount) return;
    setLoading(true);
    try {
      await axios.post(`/users/${user.id}/payments`, { policyId, amount });
      showNotification("Payment successful ✅", "success");
      setAmount("");
      setPolicyId("");
    } catch (err) {
      showNotification("Payment failed ❌", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-3xl mx-auto mt-10 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-6">Make a Payment</h2>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Policy ID"
          value={policyId}
          onChange={(e) => setPolicyId(e.target.value)}
          className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          placeholder="Amount ($)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handlePayment}
          disabled={loading}
          className={`w-full py-2 rounded-md text-white font-semibold transition ${
            loading ? "bg-blue-300" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
