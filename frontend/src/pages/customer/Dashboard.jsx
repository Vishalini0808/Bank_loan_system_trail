import { Link } from "react-router-dom";
import CustomerNavbar from "./CustomerNavbar";
import { useEffect } from "react";

const CustomerDashboard = () => {

useEffect(() => {
  const fetchAccounts = async () => {
    const res = await fetch("http://localhost:5000/api/accounts/my", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();
    fetchAccounts(data);
  };

  fetchAccounts();
}, []);



  return (
    <>
      
      <CustomerNavbar />

      
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-2xl font-bold mb-6">Customer Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            to="/customer/add-account"
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg"
          >
            <h2 className="text-lg font-semibold">Add Bank Account</h2>
            <p className="text-gray-500">Link your bank account</p>
          </Link>

          <Link
            to="/customer/apply-loan"
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg"
          >
            <h2 className="text-lg font-semibold">Apply for Loan</h2>
            <p className="text-gray-500">Start loan application</p>
          </Link>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold">Loan Status</h2>
            <p className="text-gray-500">View submitted loans</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerDashboard;
