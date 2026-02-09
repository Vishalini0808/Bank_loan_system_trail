import mongoose from "mongoose";

const RepaymentSchema =new mongoose.Schema({
  PaidAmount:{
    type:Number,
    require: true
  },
  PaymentDate:{
    type:Date,
    require: true
  },
  PaymentMode:{
    type:Number,
    require: true
  },
  EMI_ID:{
    type:mongoose.Schema.Types.ObjectId,
    ref: 'emi',
    require: true
  },
  // Account_ID:{
  //   type:mongoose.Schema.Types.ObjectId,
  //   ref: ,
  //   require: true
  // },
  
})

export default mongoose.model('repayment',RepaymentSchema)