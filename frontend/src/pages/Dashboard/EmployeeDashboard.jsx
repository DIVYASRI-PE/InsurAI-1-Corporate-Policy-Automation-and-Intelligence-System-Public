import React, { useContext } from "react";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import Tile from "../../components/Tile";
import { PolicyTrendsChart, PaymentStatsChart } from "../../components/Charts";
import { AuthContext } from "../../context/AuthContext";

const EmployeeDashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="dashboard-container">
      <NavBar />
      <Sidebar />
      <main className="dashboard-content">
        <h1 className="dashboard-header">Welcome, {user?.name}</h1>

        <div className="tile-grid">
          <Tile title="Enrolled Policies" value="3" />
          <Tile title="Claims Submitted" value="1" color="bg-blue-100" />
          <Tile title="Pending Payments" value="$250" color="bg-yellow-100" />
        </div>

        <div className="chart-grid">
          <PolicyTrendsChart />
          <PaymentStatsChart />
        </div>
      </main>
    </div>
  );
};

export default EmployeeDashboard;
