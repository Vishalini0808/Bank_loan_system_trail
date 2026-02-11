import { useState } from "react";
import CustomerNavbar from "./CustomerNavbar";

const LoanApplicationForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    account_number: "",
    loan_type: "",
    branch: "",
    address: "",
    requested_amount: "",
  });

  const [proof, setProof] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();

      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });

      // proof is OPTIONAL
      if (proof) {
        formData.append("proof", proof);
      }

      const res = await fetch("http://localhost:3000/api/loanapp/add", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      alert("Loan application submitted successfully ");

      // reset form
      setForm({
        name: "",
        phone: "",
        email: "",
        account_number: "",
        loan_type: "",
        branch: "",
        address: "",
        requested_amount: "",
      });
      setProof(null);
    } catch (error) {
      alert(error.message || "Something went wrong ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <CustomerNavbar />

      <div className="min-h-screen bg-gray-50 flex justify-center px-4 py-10">
        <div className="bg-white rounded-lg shadow-md border border-gray-200 max-w-xl w-full">
          {/* Card Header - Teal Blue */}
          <div className="p-6 bg-linear-to-r from-teal-600 to-blue-600 rounded-t-lg">
            <h2 className="text-xl font-semibold text-white text-center">Loan Application</h2>
          </div>

          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="p-6"
          >
            <div className="space-y-4">
              <input
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
              />

              <input
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
              />

              <input
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />

              <input
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                name="account_number"
                placeholder="Account Number"
                value={form.account_number}
                onChange={handleChange}
                required
              />

              <select
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                name="loan_type"
                value={form.loan_type}
                onChange={handleChange}
                required
              >
                <option value="">Select Loan Type</option>
                <option value="PERSONAL">Personal Loan</option>
                <option value="HOME">Home Loan</option>
                <option value="EDUCATION">Education Loan</option>
              </select>

              <input
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                name="branch"
                placeholder="Branch Name"
                value={form.branch}
                onChange={handleChange}
                required
              />

              <textarea
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors min-h-[100px]"
                name="address"
                placeholder="Address"
                value={form.address}
                onChange={handleChange}
                required
              />

              <input
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                name="requested_amount"
                placeholder="Requested Amount"
                value={form.requested_amount}
                onChange={handleChange}
                required
              />

              <div>
                <label className="text-sm text-gray-600 block mb-1">
                  Upload Proof Document (optional)
                </label>
                <input
                  type="file"
                  className="mt-1 w-full border border-gray-300 rounded-md p-2 bg-gray-50"
                  onChange={(e) => setProof(e.target.files[0])}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-linear-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors shadow-sm hover:shadow-md mt-6 disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoanApplicationForm;