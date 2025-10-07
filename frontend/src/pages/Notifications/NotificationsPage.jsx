import React, { useEffect, useState, useContext } from "react";
import axios from "../../api/api";
import { AuthContext } from "../../context/AuthContext";

const NotificationsPage = () => {
  const { user } = useContext(AuthContext);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await axios.get(`/users/${user.id}/notifications`);
        setNotifications(res.data);
      } catch (err) {
        console.error("Failed to fetch notifications", err);
      }
    };
    fetchNotifications();
  }, [user]);

  return (
    <div className="p-8 max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Notifications</h2>
      <div className="space-y-3">
        {notifications.length === 0 ? (
          <p>No notifications available.</p>
        ) : (
          notifications.map((note) => (
            <div
              key={note.id}
              className="p-4 border rounded-lg shadow-sm hover:shadow-md transition"
            >
              <p className="font-medium">{note.title}</p>
              <p className="text-gray-600">{note.message}</p>
              <p className="text-xs text-gray-400">{new Date(note.date).toLocaleString()}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NotificationsPage;
