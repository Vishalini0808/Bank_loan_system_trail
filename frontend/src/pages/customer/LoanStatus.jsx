import React, { useEffect, useState } from "react";
import axios from "axios";
import api from "../../api";

export default function LoanStatus() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const token = localStorage.getItem("token");

    const res = await api.get("/loanapp/me", {
        headers: { authorization: `Bearer ${token}` },
      });

        setApplications(res.data);
      } catch (err) {
        setError("Failed to load loan applications"+ err);
      } finally {
        setLoading(false);
      }
    };

    fetchLoans();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-40">
        <div className="w-6 h-6 border-2 border-gray-300 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 font-medium">{error}</div>
    );
  }

  if (!applications.length) {
    return (
      <div className="text-center text-gray-500">No loan applications found.</div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">My Loan Applications</h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {applications.map((app) => (
          <div
            key={app._id}
            className="bg-white rounded-2xl shadow-md p-5 border border-gray-100 hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {app.loan_type} Loan
            </h2>

            <p className="text-sm text-gray-600">
              <span className="font-medium">Amount:</span> ₹{app.requested_amount}
            </p>

            <p className="text-sm text-gray-600">
              <span className="font-medium">Branch:</span> {app.branch}
            </p>

            <p className="text-sm text-gray-600">
              <span className="font-medium">Status:</span>{" "}
              <span
                className={`font-semibold ${
                  app.status === "APPROVED"
                    ? "text-green-600"
                    : app.status === "REJECTED"
                    ? "text-red-600"
                    : "text-yellow-600"
                }`}
              >
                {app.status}
              </span>
            </p>

            {app.documents?.proof && (
              <a
                href={`/${app.documents.proof}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-sm text-blue-600 underline"
              >
                View Proof Document
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}