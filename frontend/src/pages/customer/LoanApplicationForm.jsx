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

      const res = await fetch("http://localhost:3000/api/loanapp", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      alert("Loan application submitted successfully ✅");

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
      alert(error.message || "Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <CustomerNavbar />

      <div className="min-h-screen bg-mint flex justify-center px-4 py-10">
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="bg-white p-8 rounded-2xl shadow-xl max-w-xl w-full"
        >
          <h2 className="text-2xl font-bold text-navy mb-6">
            Loan Application
          </h2>

          <input
            className="input mb-3"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            className="input mb-3"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <input
            className="input mb-3"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            className="input mb-3"
            name="account_number"
            placeholder="Account Number"
            value={form.account_number}
            onChange={handleChange}
            required
          />

          <select
            className="input mb-3"
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
            className="input mb-3"
            name="branch"
            placeholder="Branch Name"
            value={form.branch}
            onChange={handleChange}
            required
          />

          <textarea
            className="input mb-3"
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            required
          />

          <input
            className="input mb-4"
            name="requested_amount"
            placeholder="Requested Amount"
            value={form.requested_amount}
            onChange={handleChange}
            required
          />

          <label className="text-sm text-gray-600">
            Upload Proof Document (optional)
          </label>
          <input
            type="file"
            className="mt-2 mb-6"
            onChange={(e) => setProof(e.target.files[0])}
          />

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full text-lg disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </>
  );
};

export default LoanApplicationForm;
