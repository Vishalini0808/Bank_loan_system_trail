//bank account

import mongoose, { mongo } from "mongoose";

const accountSchema = new mongoose.Schema({

    customer : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true,
    },
    bank : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Bank",
        required : true,
    },
    branch : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Branch",
        required : true,
    },
    accountNumber : {
        type : String,
        required : true,
        unique : true,
    },
    accountType : {
        type : String,
        enum : ["SAVINGS", "CURRENT"],
        default : "SAVINGS",
    },
});

export default mongoose.model("Account",accountSchema);