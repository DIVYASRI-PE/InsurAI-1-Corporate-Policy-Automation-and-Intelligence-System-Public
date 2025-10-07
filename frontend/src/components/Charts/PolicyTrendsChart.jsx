import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const PolicyTrendsChart = () => {
  const data = [
    { month: "Jan", Health: 40, Life: 25, Vehicle: 15 },
    { month: "Feb", Health: 60, Life: 35, Vehicle: 20 },
    { month: "Mar", Health: 70, Life: 45, Vehicle: 22 },
    { month: "Apr", Health: 80, Life: 55, Vehicle: 25 },
    { month: "May", Health: 100, Life: 60, Vehicle: 30 },
    { month: "Jun", Health: 120, Life: 70, Vehicle: 40 },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        📈 Policy Enrollment Trends
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Health" stroke="#4f46e5" strokeWidth={2} />
          <Line type="monotone" dataKey="Life" stroke="#16a34a" strokeWidth={2} />
          <Line type="monotone" dataKey="Vehicle" stroke="#f59e0b" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PolicyTrendsChart;
