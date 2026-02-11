import mongoose from "mongoose";
 
const schema =  new mongoose.Schema({
    name : {type:String,required:true},
    phone : {type:String,required:true},
    email : {type:String,required:true},
    user :{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    account_number : {type:String,required: true},
    loan_type:{type:String, required:true},
    branch : {type:String,required:true},
    address : {type:String,required:true},
    requested_amount : {type:String,required:true},
    status : {type:String,enum: ["PENDING", "APPROVED", "REJECTED"],default:"PENDING"},
    documents:{
        proof : String,
    }
});
 
export default mongoose.model('LoanApplication',schema);