import mongoose from "mongoose";

const branchSchema = new mongoose.Schema({

    branchName : {
        type : String,
        required : true,
    },
    city : String,
    ifscCode : {
        type : String,
        required : true,
    },
    
});

export default mongoose.model("Branch",branchSchema);