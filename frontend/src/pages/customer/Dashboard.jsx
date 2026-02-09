import { Link } from "react-router-dom";
import CustomerNavbar from "./CustomerNavbar";
import { useEffect, useState } from "react";

const CustomerDashboard = () => {
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          setError("Please login again");
          setLoading(false);
          return;
        }

        const res = await fetch("http://localhost:3000/api/accounts/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch account");
        }

        const data = await res.json();
        setAccount(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAccount();
  }, []);

  return (
    <>
      <CustomerNavbar />

      <div className="min-h-screen bg-mint p-8">
        <h1 className="text-2xl font-bold text-navy mb-2">
          Welcome to SecureBank
        </h1>
        <p className="text-gray-600 mb-6">
          Manage your bank account and loans in one place
        </p>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Link to="/customer/add-account" className="card p-6 hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-teal">
              💳 Add Bank Account
            </h2>
            <p className="text-gray-500 mt-1">
              Link your savings or current account
            </p>
          </Link>

          <Link to="/customer/loan-form" className="card p-6 hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-teal">
              📝 Apply for Loan
            </h2>
            <p className="text-gray-500 mt-1">
              Submit a new loan request
            </p>
          </Link>

          <Link to="/customer/loans" className="card p-6 hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-teal">
              📊 Loan Status
            </h2>
            <p className="text-gray-500 mt-1">
              View submitted loans
            </p>
          </Link>
        </div>

        {/* Account Section */}
        <div className="card p-6 max-w-xl">
          <h2 className="text-xl font-semibold text-navy mb-4">
            My Bank Account
          </h2>

          {loading && (
            <p className="text-gray-500">Loading account details...</p>
          )}

          {error && (
            <p className="text-red-500">{error}</p>
          )}

          {!loading && !account && !error && (
            <div>
              <p className="text-gray-500 mb-4">
                You don’t have a bank account yet.
              </p>
              <Link
                to="/customer/add-account"
                className="btn-primary inline-block"
              >
                Add Account
              </Link>
            </div>
          )}

          {account && (
            <div className="space-y-3 text-gray-700">
              <p>
                <span className="font-semibold">Account Number:</span>{" "}
                {account.accountNumber}
              </p>
              <p>
                <span className="font-semibold">Account Type:</span>{" "}
                {account.accountType}
              </p>
              <p>
                <span className="font-semibold">Balance:</span>{" "}
                ₹{account.balance}
              </p>
              <p>
                <span className="font-semibold">Status:</span>{" "}
                <span className="text-green-600 font-semibold">
                  Active
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CustomerDashboard;
