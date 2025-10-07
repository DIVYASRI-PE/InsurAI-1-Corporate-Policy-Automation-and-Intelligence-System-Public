import React, { useContext } from "react";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import Tile from "../../components/Tile";
import { PolicyTrendsChart, PaymentStatsChart, FraudPatternChart } from "../../components/Charts";
import { AuthContext } from "../../context/AuthContext";

const ManagerDashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="dashboard-container">
      <NavBar />
      <Sidebar />
      <main className="dashboard-content">
        <h1 className="dashboard-header">Manager Dashboard - {user?.name}</h1>

        <div className="tile-grid">
          <Tile title="Team Policies" value="25" />
          <Tile title="Claims Pending Approval" value="5" color="bg-red-100" />
          <Tile title="Monthly Revenue" value="$12,000" color="bg-green-100" />
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

export default ManagerDashboard;
