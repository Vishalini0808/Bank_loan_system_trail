import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
 
function LoanView() {
  const { id } = useParams();
  const navigate = useNavigate();
 
  const [loan, setLoan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [actionLoading, setActionLoading] = useState(false);
  const [loanData, setLoanData] = useState({
  SanctionedAmount: "",
  InterestRate: "",
  duration: "",
});

 
  useEffect(() => {
    const fetchLoan = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/loanapp/${id}`);
 
        if (!res.ok) {
          throw new Error("Failed to fetch loan details");
        }
 
        const data = await res.json();
        setLoan(data);
        console.log(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
 
    fetchLoan();
  }, [id]);
 
 
  const updateStatus = async (status) => {
    try {
      setActionLoading(true);
 
      const res = await fetch(
        `http://localhost:3000/api/loanapp/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status , ...loanData,}),
        }
      );
 console.log(res.json)
      if (!res.ok) {
        throw new Error("Failed to update status");
      }
 
      const updatedLoan = await res.json();
      setLoan(updatedLoan);
 
      alert(`Loan ${status}`);
      navigate("/employee/dashboard"); // back to dashboard
    } catch (err) {
      alert(err.message);
    } finally {
      setActionLoading(false);
    }
  };
 
  if (loading) return <p className="p-6">Loading loan details...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;
 
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex justify-center">
      <div className="bg-white w-full max-w-2xl p-8 rounded-[20px] shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-navy">
          Loan Details (Employee View)
        </h2>
 
        {/* FORM (READ ONLY) */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
 
          <input label="Name" value={loan.name} readOnly  />
          <input label="Phone" value={loan.phone} readOnly  />
          <input label="Email" value={loan.email} readOnly />
          <input label="Account Number" value={loan.account_number} readOnly />
          <input label="Loan Type" value={loan.loan_type} readOnly />
          <input label="Branch" value={loan.branch} readOnly  />
          <input label="Requested Amount" value={loan.requested_amount} readOnly  />
          <input label="Status" value={loan.status} readOnly  />
 
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-600">
              Address
            </label>
            <textarea
              value={loan.address}
              readOnly
              className="w-full mt-1 p-2 border rounded-lg bg-gray-100"
            />
          </div>
          {loan.status === "PENDING" && (
  <div className="mt-4 space-y-3">
    <input
      type="number"
      placeholder="Sanctioned Amount"
      className="w-full border p-2 rounded"
      value={loanData.SanctionedAmount}
      onChange={(e) =>
        setLoanData({ ...loanData, SanctionedAmount: e.target.value })
      }
    />

    <input
      type="number"
      placeholder="Interest Rate (%)"
      className="w-full border p-2 rounded"
      value={loanData.InterestRate}
      onChange={(e) =>
        setLoanData({ ...loanData, InterestRate: e.target.value })
      }
    />

    <input
      type="number"
      placeholder="Duration (months)"
      className="w-full border p-2 rounded"
      value={loanData.duration}
      onChange={(e) =>
        setLoanData({ ...loanData, duration: e.target.value })
      }
    />
  </div>
)}

        </form>
 
        
        {loan.status === "PENDING" && (
          <div className="flex gap-4 mt-6">
            <button
              disabled={actionLoading}
              onClick={() => updateStatus("APPROVED")}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg"
            >
               Approve
            </button>
 
            <button
              disabled={actionLoading}
              onClick={() => updateStatus("REJECTED")}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg"
            >
              Reject
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
 
export default LoanView;
 
 