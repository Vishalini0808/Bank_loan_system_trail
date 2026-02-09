
import mongoose from "mongoose";

const loanSchema = new mongoose.Schema({

  SanctionedAmount: {
    type: Number,
    required: true
  },
  InterestRate: {
    type: Number,
    required: true
  },
  StartDate: {
    type: Date,
    required: true
  },
  EndDate: {
    type: Date,
    required: true
  },
  LoanStatus: {
    type: String,
    enum: ["Active", "Closed"],
    default: "Active"
  },
  Application_ID: {
    type: mongoose.Schema.Types.ObjectId,
   ref:'LoanApplicationCreationSchema',
    required: true
  }
}, { timestamps: true });

export default mongoose.model('Loan',loanSchema);