import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBankAccount = () => {
  const navigate = useNavigate();

  const [branches, setBranches] = useState([]);

  const [form, setForm] = useState({

    branchId: "",
    accountHolderName: "",
    accountNumber: "",
    accountType: "SAVINGS",
  });

  const token = localStorage.getItem("token");

  // fetch branches when bank changes
  useEffect(() => {
    axios.get(`http://localhost:3000/api/branches`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setBranches(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3000/api/accounts/add",
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(res.data.message || "Account added successfully");

      navigate("/customer/dashboard");

      setForm({
        branchId: "",
        accountHolderName: "",
        accountNumber: "",
        accountType: "SAVINGS",
      });
    } catch (error) {
      console.error("ADD ACCOUNT ERROR:", error.response?.data || error.message);

      alert(
        error.response?.data?.message || "Failed to add account"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="bg-white rounded-lg shadow-md border border-gray-200 w-full max-w-md">
        {/* Card Header - Teal Blue */}
        <div className="p-6 bg-linear-to-r from-teal-600 to-blue-600 rounded-t-lg">
          <h2 className="text-xl font-semibold text-white text-center">Add Bank Account</h2>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-4">
           
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Branch
              </label>
              <select
                name="branchId"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                value={form.branchId}
                onChange={handleChange}
                required
              >
                <option value="">Select Branch</option>
                {branches.map(branch => (
                  <option key={branch._id} value={branch._id}>
                    {branch.branchName} ({branch.ifscCode})
                  </option>
                ))}
              </select>
            </div>

            {/* Account Holder Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Account Holder Name
              </label>
              <input
                name="accountHolderName"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                placeholder="Enter account holder name"
                value={form.accountHolderName}
                onChange={handleChange}
                required
              />
            </div>

            {/* Account Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Account Number
              </label>
              <input
                name="accountNumber"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                placeholder="Enter account number"
                value={form.accountNumber}
                onChange={handleChange}
                required
              />
            </div>

            {/* Account Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Account Type
              </label>
              <select
                name="accountType"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                value={form.accountType}
                onChange={handleChange}
              >
                <option value="SAVINGS">SAVINGS</option>
                <option value="CURRENT">CURRENT</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-linear-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors shadow-sm hover:shadow-md mt-6"
          >
            Save Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBankAccount;