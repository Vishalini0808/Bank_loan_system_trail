import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function LoanView() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loan, setLoan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [actionLoading, setActionLoading] = useState(false);

  useEffect(() => {
    const fetchLoan = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/loans/${id}`);

        if (!res.ok) {
          throw new Error("Failed to fetch loan details");
        }

        const data = await res.json();
        setLoan(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLoan();
  }, [id]);

  // ✅ APPROVE / REJECT HANDLER
  const updateStatus = async (status) => {
    try {
      setActionLoading(true);

      const res = await fetch(
        `http://localhost:3000/api/loans/${id}/status`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status }),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to update status");
      }

      const updatedLoan = await res.json();
      setLoan(updatedLoan);

      alert(`Loan ${status}`);
      navigate("/dashboard"); // back to dashboard
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

          <Input label="Name" value={loan.name} />
          <Input label="Phone" value={loan.phone} />
          <Input label="Email" value={loan.email} />
          <Input label="Account Number" value={loan.account_number} />
          <Input label="Loan Type" value={loan.loan_type} />
          <Input label="Branch" value={loan.branch} />
          <Input label="Requested Amount" value={loan.requested_amount} />
          <Input label="Status" value={loan.status} />

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
        </form>

        {/* ✅ ACTION BUTTONS */}
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
