import React, { useState, useContext } from "react";
import axios from "../../api/api";
import { AuthContext } from "../../context/AuthContext";
import { NotificationContext } from "../../context/NotificationContext";

const UploadDocuments = () => {
  const { user } = useContext(AuthContext);
  const { showNotification } = useContext(NotificationContext);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);
    const formData = new FormData();
    formData.append("document", file);

    try {
      await axios.post(`/users/${user.id}/documents`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      showNotification("Document uploaded successfully ✅", "success");
      setFile(null);
    } catch (err) {
      showNotification("Upload failed ❌", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto mt-10 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-6">Upload Document</h2>
      <input
        type="file"
        onChange={handleFileChange}
        className="w-full mb-4"
      />
      <button
        onClick={handleUpload}
        disabled={loading || !file}
        className={`w-full py-2 rounded-md text-white font-semibold transition ${
          loading ? "bg-blue-300" : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
};

export default UploadDocuments;
