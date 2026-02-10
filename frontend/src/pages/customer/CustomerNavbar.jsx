import { Link, useNavigate } from "react-router-dom";

const CustomerNavbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md border-b border-gray-200 px-8 py-4 flex justify-between items-center">
      {/* Bank Logo and Name */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-linear-to-br from-teal-600 to-blue-600 rounded-lg flex items-center justify-center shadow-sm">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <div>
          <h1 className="font-bold text-xl text-gray-800 tracking-wide">
            CapitalTrust Bank
          </h1>
          <p className="text-xs text-gray-500">Customer Portal</p>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-6 items-center text-sm">
        <Link 
          to="/customer/dashboard" 
          className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
        >
          Dashboard
        </Link>
        <Link 
          to="/customer/add-account" 
          className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
        >
          Add Account
        </Link>
        <Link 
          to="/customer/apply-loan" 
          className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
        >
          Apply Loan
        </Link>
        <button
          onClick={logout}
          className="bg-linear-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-5 py-2 rounded-md font-medium transition-colors shadow-sm hover:shadow-md"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default CustomerNavbar;