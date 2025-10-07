import React, { useEffect, useState, useContext } from "react";
import axios from "../../api/api";
import { AuthContext } from "../../context/AuthContext";

const ViewDocuments = () => {
  const { user } = useContext(AuthContext);
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const res = await axios.get(`/users/${user.id}/documents`);
        setDocuments(res.data);
      } catch (err) {
        console.error("Failed to fetch documents", err);
      }
    };
    fetchDocuments();
  }, [user]);

  const handleDownload = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="p-8 max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Your Documents</h2>
      <div className="space-y-3">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="p-4 border rounded-lg flex justify-between items-center"
          >
            <span>{doc.filename}</span>
            <button
              onClick={() => handleDownload(doc.url)}
              className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
            >
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewDocuments;
