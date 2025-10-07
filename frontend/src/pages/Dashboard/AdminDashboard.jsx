import React, { useContext } from "react";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import Tile from "../../components/Tile";
import { PolicyTrendsChart, PaymentStatsChart, FraudPatternChart } from "../../components/Charts";
import { AuthContext } from "../../context/AuthContext";

const AdminDashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="dashboard-container">
      <NavBar />
      <Sidebar />
      <main className="dashboard-content">
        <h1 className="dashboard-header">Admin Dashboard - {user?.name}</h1>

        <div className="tile-grid">
          <Tile title="Total Employees" value="120" />
          <Tile title="Total Policies" value="350" color="bg-blue-100" />
          <Tile title="Total Claims" value="80" color="bg-red-100" />
          <Tile title="Total Revenue" value="$250,000" color="bg-green-100" />
        </div>

        <div className="chart-grid">
          <PolicyTrendsChart />
          <PaymentStatsChart />
          <FraudPatternChart />
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
