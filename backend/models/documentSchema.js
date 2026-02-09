import mongoose from "mongoose";

const documentSchema = new mongoose.Schema({

    application : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "LoanApplication",
        required : true,
    },
    DocumentType : {
        type : String,    //proof(aadhar/pan)
    },
    verificationstatus : {
        type : String,
        enum : ["PENDING", "VERIFIED"],
        default : "PENDING"
    },
    uploadedDate : {
        type : Date,
        default : Date.now,
    },
});

export default mongoose.model("Documents", documentSchema)