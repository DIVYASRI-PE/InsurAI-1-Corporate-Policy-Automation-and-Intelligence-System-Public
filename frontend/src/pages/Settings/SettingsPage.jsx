import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "../../api/api";
import { NotificationContext } from "../../context/NotificationContext";

const SettingsPage = () => {
  const { user, setUser } = useContext(AuthContext);
  const { showNotification } = useContext(NotificationContext);

  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const res = await axios.put(`/users/${user.id}`, formData);
      setUser(res.data);
      showNotification("Settings updated ✅", "success");
    } catch (err) {
      showNotification("Failed to update settings ❌", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-3xl mx-auto mt-10 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-6">Settings</h2>
      <div className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
          placeholder="Email"
        />
        <button
          onClick={handleUpdate}
          disabled={loading}
          className={`w-full py-2 rounded-md text-white font-semibold transition ${
            loading ? "bg-blue-300" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Updating..." : "Update Settings"}
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
