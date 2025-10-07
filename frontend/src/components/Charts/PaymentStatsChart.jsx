import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const PaymentStatsChart = () => {
  const data = [
    { month: "Jan", Premiums: 30000, Claims: 10000 },
    { month: "Feb", Premiums: 35000, Claims: 12000 },
    { month: "Mar", Premiums: 40000, Claims: 15000 },
    { month: "Apr", Premiums: 42000, Claims: 18000 },
    { month: "May", Premiums: 48000, Claims: 16000 },
    { month: "Jun", Premiums: 52000, Claims: 20000 },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        💳 Payment vs Claims Overview
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Premiums" fill="#4f46e5" barSize={40} radius={[6, 6, 0, 0]} />
          <Bar dataKey="Claims" fill="#16a34a" barSize={40} radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PaymentStatsChart;
