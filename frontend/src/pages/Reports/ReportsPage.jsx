import React, { useEffect, useState } from "react";
import axios from "../../api/api";

const ReportsPage = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const res = await axios.get("/reports");
        setReports(res.data);
      } catch (err) {
        console.error("Failed to fetch reports", err);
      }
    };
    fetchReports();
  }, []);

  return (
    <div className="p-8 max-w-6xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Reports</h2>
      <div className="space-y-3">
        {reports.length === 0 ? (
          <p>No reports available.</p>
        ) : (
          reports.map((report) => (
            <div key={report.id} className="p-4 border rounded-lg shadow-sm hover:shadow-md transition">
              <p className="font-medium">{report.title}</p>
              <p className="text-gray-600">{report.summary}</p>
              <p className="text-xs text-gray-400">{new Date(report.date).toLocaleString()}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ReportsPage;
