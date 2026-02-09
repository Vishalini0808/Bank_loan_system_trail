import mongoose  from "mongoose";

const bankSchema = new mongoose.Schema({

    bankName : {
        type : String,
        required : true,
    },
    headOfficeAddress : String,
    contactNumber : String,
    email : String,
});

export default mongoose.model("Bank",bankSchema);