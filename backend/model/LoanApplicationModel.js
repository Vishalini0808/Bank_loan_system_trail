import mongoose from "mongoose";

const schema =  new mongoose.Schema({
    name : {type:String,required:true},
    phone : {type:String,required:true},
    email : {type:String,required:true},
    account_number : {type:String,required: true},
    loan_type:{type:String, required:true},
    branch : {type:String,required:true},
    address : {type:String,required:true}
});

export default mongoose.model('accountSchema',schema);