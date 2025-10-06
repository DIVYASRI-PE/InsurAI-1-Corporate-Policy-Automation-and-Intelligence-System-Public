import React from "react";
import { FraudPatternChart } from "../../components/Charts";

const FraudDetection = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Fraud Detection Analytics</h2>
      <div className="bg-white p-6 rounded-2xl shadow">
        <FraudPatternChart />
      </div>
    </div>
  );
};

export default FraudDetection;
