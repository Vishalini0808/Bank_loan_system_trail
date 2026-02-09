import mongoose from "mongoose";


const DisbursementSchema= new mongoose.Schema({
   
DisbursementAmount:{
    type:Number,
    require: true 
},
DisbursementDate:{
    type: Date,
    require: true
},
Loan_ID:{
    type:mongoose.Schema.Types.ObjectId ,
    ref:'Loan',
    require: true
},
Account_ID:{
    type:Number,
   // ref:
    require: true
}
})
export default mongoose.model('disbursement',DisbursementSchema)