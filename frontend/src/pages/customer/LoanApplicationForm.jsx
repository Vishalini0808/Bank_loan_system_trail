import CustomerNavbar from "./CustomerNavbar";

const LoanApplicationForm = () => {
  return (
    <>
      <CustomerNavbar />

      <div className="min-h-screen bg-gray-100 flex justify-center px-4 py-10">
        <form className="bg-white p-8 rounded-2xl shadow-xl max-w-lg w-full">
          
          <h2 className="text-2xl font-bold mb-1">
            Loan Application
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Fill the loan and document details carefully
          </p>

          {/* LOAN DETAILS */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2 text-gray-700">
              Loan Details
            </h3>

            <label className="text-sm font-medium">
              Requested Amount
            </label>
            <input
              type="number"
              className="input mt-1"
              placeholder="Enter loan amount"
              required
            />

            <label className="text-sm font-medium mt-4 block">
              Loan Type
            </label>
            <select className="input mt-1" required>
              <option value="">Select loan type</option>
              <option value="PERSONAL">Personal Loan</option>
              <option value="HOME">Home Loan</option>
              <option value="EDUCATION">Education Loan</option>
            </select>
          </div>

          {/* DOCUMENT DETAILS */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2 text-gray-700">
              Document Details
            </h3>

            <label className="text-sm font-medium">
              Document Type
            </label>
            <select className="input mt-1" required>
              <option value="">Select document</option>
              <option value="AADHAR">Aadhar Card</option>
              <option value="PAN">PAN Card</option>
              <option value="INCOME_PROOF">Income Proof</option>
            </select>

            <label className="text-sm font-medium mt-4 block">
              Upload Document
            </label>
            <input
              type="file"
              className="mt-2"
              
            />
          </div>

          {/* SUBMIT */}
          <button className="btn-primary w-full text-lg">
            Submit Application
          </button>

        </form>
      </div>
    </>
  );
};

export default LoanApplicationForm;
