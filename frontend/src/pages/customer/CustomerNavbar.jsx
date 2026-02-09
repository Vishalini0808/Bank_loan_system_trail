import { Link, useNavigate } from "react-router-dom";

const CustomerNavbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
   <nav className="bg-linear-to-r from-deepblue to-navy text-white px-8 py-4 flex justify-between items-center shadow-lg">
  <h1 className="font-bold text-xl tracking-wide">
    🏦 SecureBank
  </h1>

      <div className="flex gap-6 items-center text-sm text-amber-950">
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
          className="bg-white text-deepblue px-4 py-1.5 rounded-full font-semibold"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default CustomerNavbar;
