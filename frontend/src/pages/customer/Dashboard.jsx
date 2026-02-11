import { Link } from "react-router-dom";
import CustomerNavbar from "./CustomerNavbar";
import { useEffect, useState } from "react";

const CustomerDashboard = () => {
  const [account, setAccount] = useState(null);
  

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          return alert("token Invalid");
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
        console.error(err);        
      } 
    };

    fetchAccount();
  }, []);

  // Horizontal banking image URL
  const bannerImageUrl = "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";

  return (
    <>
      <CustomerNavbar />

      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Horizontal Banner */}
        <div className="relative h-48 bg-gradient-to-r from-teal-600 to-blue-600 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${bannerImageUrl}')` }}
          >
            <div className="absolute inset-0 bg-linear-to-r from-teal-600/80 to-blue-600/80"></div>
          </div>
          
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-3xl font-bold mb-2">CapitalTrust Bank</h1>
              <p className="text-lg text-teal-100">Your Financial Journey Starts Here</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 py-8 grow">
        
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Add Account card */}
            <Link 
              to="/customer/add-account" 
              className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg hover:border-teal-300 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-linear-to-br from-teal-50 to-blue-50 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 text-lg mb-2">Add Account</h3>
                <p className="text-gray-600 text-sm">Link your bank account</p>
              </div>
            </Link>

            {/*  Apply Loan */}
            <Link 
              to="/customer/loan-form" 
              className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg hover:border-teal-300 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-linear-to-br from-teal-50 to-blue-50 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 text-lg mb-2">Apply Loan</h3>
                <p className="text-gray-600 text-sm">Submit loan application</p>
              </div>
            </Link>

            {/*  Loan Status */}
            <Link 
              to="/customer/loans" 
              className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg hover:border-teal-300 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-linear-to-br from-teal-50 to-blue-50 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 text-lg mb-2">Loan Status</h3>
                <p className="text-gray-600 text-sm">Track applications</p>
              </div>
            </Link>
          </div>

          {/* Account Info Section */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">Account Information</h2>
              <div className="w-10 h-10 bg-linear-to-br from-teal-50 to-blue-50 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
            </div>

       

            {!account && (
              <div className="text-center py-8">
                <p className="text-gray-600 mb-4">No account linked yet</p>

                <Link
                  to="/customer/add-account"
                  className="inline-flex items-center px-5 py-2.5 bg-linear-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white font-medium rounded-lg"
                >
                  Add Account
                </Link>
              </div>
            )}



            {account && (
              <div className="space-y-6">
                {/* Balance Card */}
                <div className="bg-linear-to-r from-teal-50 to-blue-50 rounded-lg p-5 border border-teal-100">
                  <p className="text-sm text-gray-600 mb-2">Account Balance</p>
                  <p className="text-3xl font-bold text-gray-800">₹{account.balance}</p>
                  <div className="flex items-center mt-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full mr-3">
                      Active
                    </span>
                    <span className="text-sm text-gray-600">{account.accountType} Account</span>
                  </div>
                </div>

                {/* Account Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600">Account Number</p>
                    <p className="font-semibold text-gray-800">{account.accountNumber}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600">Account Holder</p>
                    <p className="font-semibold text-gray-800">{account.accountHolderName}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Simple Footer */}
        <footer className="bg-gray-800 text-white py-6 mt-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="w-8 h-8 bg-linear-to-br from-teal-500 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">CapitalTrust Bank</h3>
              </div>
              
              <p className="text-gray-400 text-sm mb-4">
                Secure banking and loan management platform
              </p>
              
             
              
              <div className="border-t border-gray-700 pt-4">
                <p className="text-gray-500 text-xs">
                  © {new Date().getFullYear()} CapitalTrust Bank. All rights reserved.
                </p>
                
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default CustomerDashboard;