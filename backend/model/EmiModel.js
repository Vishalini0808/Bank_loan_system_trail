import mongoose from "mongoose";

const schema =  new mongoose.Schema({
    loanId : {type:mongoose.Schema.ObjectId,ref:"Loan",required:true},
    principal : {type:Number,required:true},
    installementNumber :{type:Number,required:true},
    dueDate : {type:Number,required:true},
    Interest : {type:Number,required:true},
    totalAmout : {type:Number,required:true},
    penalty:{type:Number,default:0},
    status :{type:String,enum:["PENDING","PAID"],default:"PENDING"}
});

export default mongoose.model('EMISchema',schema);