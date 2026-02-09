// import mongoose, { Schema } from "mongoose";

// const loanApplicationSchema = new mongoose.Schema({

//     customer : {
//         type : mongoose.Schema.Types.ObjectId,
//         ref : "User",
//         required : true,
//     },
//     loanType : {
//         type : String,
//         required : true,    //home,personal,education
//     },
//     requestedAmount : {
//         type : Number,
//         required : true,
//     },
//     status : {
//         type : String,
//         enum : ["PENDING", "APPROVED" , "REJECTED"],
//         default : "PENDING",
//     },
//     applicationDate : {
//         type : Date,
//         default : Date.now,
//     },
   
// },
//  { timestamps : true} 
// );

// export default mongoose.model( "LoanApplication", loanApplicationSchema);