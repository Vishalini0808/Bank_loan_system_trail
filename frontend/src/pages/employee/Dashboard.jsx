import React from 'react'
import react, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoanView from "./LoanView";

function Dashboard() {
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/loans");//api

        if (!res.ok) {
          throw new Error("Failed to fetch loans");
        }

        const data = await res.json();
        setLoans(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLoans();
  }, []);

  return (
    <div className="min-h-screen bg-mint p-8">
      <h1 className="text-2xl font-bold text-navy mb-2">
        Loan Dashboard
      </h1>
      <p className="text-gray-600 mb-6">
        View your loan applications
      </p>

      {loading && <p className="text-gray-500">Loading loans...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && loans.length === 0 && !error && (
        <p className="text-gray-500">No loans found</p>
      )}

      {/* Loan Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {loans.map((loan) => (
          <div
            key={loan._id}
            className="bg-white h-[200px] rounded-[20px] shadow-md p-6 flex flex-col justify-between"
          >
            <div>
              <p className="text-lg font-semibold text-navy">
                Name:
                <span className="font-normal ml-2">
                  {loan.name}
                </span>
              </p>

              <p className="text-gray-600 mt-3">
                Loan Type:
                <span className="font-medium ml-2">
                  {loan.loanType}
                </span>
              </p>
            </div>

            <Link
              to={<LoanView/>}
              className="bg-green-600 hover:bg-green-700 text-white text-center py-2 rounded-lg"
            >
              View
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
