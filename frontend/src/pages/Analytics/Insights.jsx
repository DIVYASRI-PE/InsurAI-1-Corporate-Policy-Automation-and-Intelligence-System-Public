import React from "react";
import { PolicyTrendsChart, PaymentStatsChart } from "../../components/Charts";

const Insights = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Analytics Insights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PolicyTrendsChart />
        <PaymentStatsChart />
      </div>
    </div>
  );
};

export default Insights;
