import React from "react";
import { PolicyTrendsChart, PaymentStatsChart } from "../../components/Charts";

const PredictiveTrends = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Predictive Trends</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PolicyTrendsChart predictive />
        <PaymentStatsChart predictive />
      </div>
    </div>
  );
};

export default PredictiveTrends;
