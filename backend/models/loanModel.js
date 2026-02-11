import mongoose from "mongoose";

const schema =  new mongoose.Schema({
    loanApplicationId : {type:mongoose.Schema.ObjectId,ref:"LoanApplication",required:true},
    name : {type:String,required:true},
    account_number : {type:String,required:true},
    SanctionedAmount : {type:Number,required:true},
    InterestRate : {type:Number,required:true},
    LoanStatus : {type:String,required: true},
    Duration :{type:Number,required:true},
    branch : {type:String,required:true},
});

export default mongoose.model('Loan',schema);