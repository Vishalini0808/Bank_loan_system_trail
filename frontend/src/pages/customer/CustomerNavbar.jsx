import { Link, useNavigate } from "react-router-dom";

const CustomerNavbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="bg-linear-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 flex justify-between items-center shadow">
      <h1 className="font-bold text-xl tracking-wide">
        💳 Bank Loan Portal
      </h1>

      <div className="flex items-center gap-6 text-sm font-medium">
        <Link to="/customer/dashboard" className="hover:opacity-80">
          Dashboard
        </Link>
        <Link to="/customer/add-account" className="hover:opacity-80">
          Add Account
        </Link>
        <Link to="/customer/apply-loan" className="hover:opacity-80">
          Apply Loan
        </Link>
        <button
          onClick={logout}
          className="bg-white text-blue-600 px-4 py-1.5 rounded-full font-semibold hover:bg-gray-100"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default CustomerNavbar;
