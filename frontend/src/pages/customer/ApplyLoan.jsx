// import { useState } from "react";

// const ApplyLoan = () => {
//   const [loanType, setLoanType] = useState("");
//   const [amount, setAmount] = useState("");
//   const [documentType, setDocumentType] = useState("");
//   const [file, setFile] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("loanType", loanType);
//     formData.append("requestedAmount", amount);
//     formData.append("documentType", documentType);
//     formData.append("file", file);

//     try {
//       const res = await fetch("http://localhost:5000/api/loans/apply", {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//         body: formData,
//       });

//       if (!res.ok) {
//   const text = await res.text();
//   console.error(text);
//   throw new Error("Request failed");
// }

// const data = await res.json();
// alert(data.message || "Loan applied successfully");

//       alert("Loan applied successfully");
//     } catch (error) {
//       console.error(error);
//       alert("Something went wrong");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center">
//           Apply for Loan
//         </h2>

//         {/* Loan Type */}
//         <label className="block mb-2 font-medium">Loan Type</label>
//         <select
//           className="w-full p-3 border rounded-lg mb-4"
//           value={loanType}
//           onChange={(e) => setLoanType(e.target.value)}
//           required
//         >
//           <option value="">Select Loan Type</option>
//           <option value="PERSONAL">Personal Loan</option>
//           <option value="HOME">Home Loan</option>
//           <option value="EDUCATION">Education Loan</option>
//         </select>

//         {/* Amount */}
//         <label className="block mb-2 font-medium">Requested Amount</label>
//         <input
//           type="number"
//           className="w-full p-3 border rounded-lg mb-4"
//           placeholder="Enter loan amount"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//           required
//         />

//         {/* Document Type */}
//         <label className="block mb-2 font-medium">Document Type</label>
//         <select
//           className="w-full p-3 border rounded-lg mb-4"
//           value={documentType}
//           onChange={(e) => setDocumentType(e.target.value)}
//           required
//         >
//           <option value="">Select Document</option>
//           <option value="AADHAR">Aadhar</option>
//           <option value="PAN">PAN</option>
//           <option value="INCOME_PROOF">Income Proof</option>
//         </select>

//         {/* Upload */}
//         <label className="block mb-2 font-medium">Upload Document</label>
//         <input
//           type="file"
//           className="w-full mb-6"
//           onChange={(e) => setFile(e.target.files[0])}
//           required
//         />

//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
//         >
//           Submit Loan Application
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ApplyLoan;


import { useState } from "react";

const ApplyLoan = () => {
  const [loanType, setLoanType] = useState("");
  const [amount, setAmount] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("loanType", loanType);
    formData.append("requestedAmount", amount);
    formData.append("documentType", documentType);
    formData.append("file", file);

    try {
      const res = await fetch("http://localhost:5000/api/loans/apply", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      });

      if (!res.ok) {
        const text = await res.text();
        console.error(text);
        throw new Error("Request failed");
      }

      const data = await res.json();
      alert(data.message || "Loan applied successfully");
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Apply for Loan
        </h2>

        {/* Loan Type */}
        <label className="block mb-2 font-medium">Loan Type</label>
        <select
          className="w-full p-3 border rounded-lg mb-4"
          value={loanType}
          onChange={(e) => setLoanType(e.target.value)}
        >
          <option value="">Select Loan Type</option>
          <option value="PERSONAL">Personal Loan</option>
          <option value="HOME">Home Loan</option>
          <option value="EDUCATION">Education Loan</option>
        </select>

        {/* Amount */}
        <label className="block mb-2 font-medium">Requested Amount</label>
        <input
          type="number"
          className="w-full p-3 border rounded-lg mb-4"
          placeholder="Enter loan amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        {/* Document Type */}
        <label className="block mb-2 font-medium">Document Type</label>
        <select
          className="w-full p-3 border rounded-lg mb-4"
          value={documentType}
          onChange={(e) => setDocumentType(e.target.value)}
        >
          <option value="">Select Document</option>
          <option value="AADHAR">Aadhar</option>
          <option value="PAN">PAN</option>
          <option value="INCOME_PROOF">Income Proof</option>
        </select>

        {/* Upload */}
        <label className="block mb-2 font-medium">Upload Document</label>
        <input
          type="file"
          className="w-full mb-6"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Submit Loan Application
        </button>
      </form>
    </div>
  );
};

export default ApplyLoan;
