import mongoose from "mongoose";

const schema =  new mongoose.Schema({
    name : {type:String,required:true},
    SanctionedAmount : {type:String,required:true},
    InterestRate : {type:String,required:true},
    LoanStatus : {type:String,required: true},
    branch : {type:String,required:true},
});

export default mongoose.model('accountSchema',schema);