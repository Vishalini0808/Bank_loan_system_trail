import mongoose from "mongoose";

const loanApprovalSchema = new mongoose.Schema({

    application : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "LoanApplication",
        required : true,
    },
    employee : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true,
    },
    approvedAmount : {
        type : Number,
    },
    remarks : {
        type : String,
    },
    status : {
        type : String,
        enum: ["APPROVED", "REJECTED"],   
    },
    approvedDate : {
        type : Date,
        default : Date.now,
    },

});

export default mongoose.model("LoanApproval",loanApprovalSchema)