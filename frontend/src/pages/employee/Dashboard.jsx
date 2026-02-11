import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
 
const EmployeeDashboardd = () => {
  const navigate = useNavigate();
  const [applications, setApplications] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
 
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/loanapp", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
 
        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message || "Failed to fetch")
        }

        setApplications(data.applications);
      } catch (err) {
        console.error(err);
        
        // setError(err.message);
      } 

    // finally {
    //     setLoading(false);
    //   }

    };
    fetchApplications();
  }, []);
 
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
 
  const stats = {
    total: applications.length,
    approved: applications.filter(a => a.status === "APPROVED").length,
    rejected: applications.filter(a => a.status === "REJECTED").length,
  };
 
  const StatusBadge = ({ status }) => {
    const styles = {
      APPROVED: "bg-green-100 text-green-700",
      REJECTED: "bg-red-100 text-red-700",
      PENDING: "bg-yellow-100 text-yellow-700",
    };
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${styles[status]}`}>
        {status}
      </span>
    );
  };
 
  const StatCard = ({ title, value, color }) => (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
      <p className="text-sm text-gray-500">{title}</p>
      <p className={`text-3xl font-bold mt-2 ${color}`}>{value}</p>
    </div>
  );
 
//   if (loading)
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="w-12 h-12 border-4 border-teal-600 border-t-transparent rounded-full animate-spin"></div>
//       </div>
//     );
 
//   if (error)
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="bg-white p-6 rounded-lg shadow border text-red-500">
//           {error}
//         </div>
//       </div>
//     );
 
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md border-b px-8 py-4 flex justify-between items-center">
        <div>
          <h1 className="font-bold text-xl text-gray-800">CapitalTrust Bank</h1>
          <p className="text-xs text-gray-500">Employee Portal</p>
        </div>
        <button
          onClick={handleLogout}
          className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-5 py-2 rounded-md shadow"
        >
          Logout
        </button>
      </nav>
 
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Loan Applications Dashboard
        </h1>
 
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <StatCard title="All Applications" value={stats.total} color="text-gray-800" />
          <StatCard title="Approved" value={stats.approved} color="text-green-600" />
          <StatCard title="Rejected" value={stats.rejected} color="text-red-600" />
        </div>
 
        {/* Table */}
        <div className="bg-white rounded-lg shadow border overflow-hidden">
          {applications.length === 0 ? (
            <div className="p-10 text-center text-gray-500">
              No applications found
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    {["Name", "Loan Type", "Branch", "Amount", "Status", "Action"].map(h => (
                      <th key={h} className="p-4 text-left text-sm font-semibold border-b">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {applications.map(app => (
                    <tr key={app._id} className="hover:bg-gray-50">
                      <td className="p-4 font-medium">{app.name}</td>
                      <td className="p-4">{app.loan_type}</td>
                      <td className="p-4">{app.branch}</td>
                      <td className="p-4 font-medium">₹{app.requested_amount}</td>
                      <td className="p-4">
                        <StatusBadge status={app.status} />
                      </td>
                      <td className="p-4">
                        <a
                          href={`/employee/applications/${app._id}`}
                          className="px-4 py-2 bg-gradient-to-r from-teal-600 to-blue-600 text-white text-sm rounded-md shadow"
                        >
                          Review
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
 
export default EmployeeDashboardd;