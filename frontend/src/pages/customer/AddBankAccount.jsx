import { useEffect, useState } from "react";
import axios from "axios";

const AddBankAccount = () => {
  const [branches, setBranches] = useState([]);

  const [form, setForm] = useState({
    
    branchId: "",
    accountNumber: "",
    accountType: "SAVINGS",
  });

  const token = localStorage.getItem("token");

  
  // fetch branches when bank changes
  useEffect(() => {
     
      axios
        .get(`http://localhost:3000/api/branches` , {
        headers : {
          Authorization : `Bearer ${token}`
        },
        })
        .then((res) => {
          setBranches(res.data);
        })
        .catch((err)=> {
          console.error(err);
        })
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post(
      "http://localhost:3000/api/accounts/add",
      form,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Account added successfully");
  };

  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow w-full max-w-md"
      >
        <h2 className="text-xl font-bold mb-4">Add Bank Account</h2>


        {/* Branch */}
        <select
          name="branchId"
          className="input mt-3"
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

        <input
          name="accountNumber"
          className="input mt-3"
          placeholder="Account Number"
          onChange={handleChange}
          required
        />

        <select
          name="accountType"
          className="input mt-3"
          onChange={handleChange}
        >
          <option value="SAVINGS">SAVINGS</option>
          <option value="CURRENT">CURRENT</option>
        </select>

        <button className="btn-primary mt-5 w-full">
          Save Account
        </button>
      </form>
    </div>
  );
};

export default AddBankAccount;
