import RepaymentModel from "../Model/RepaymentModel.js";

export const createRepayment = async(req,res)=>{
    try {
        const {PaidAmount,PaymentDate, PaymentMode,EMI_ID,Account_ID} = req.body

        const Repayment = await RepaymentModel.create({
            PaidAmount,
            PaymentDate,
             PaymentMode,
            EMI_ID,Account_ID
        })
        res.status(201).json({
            success : true,
            message:" Repayment is Start", Repayment : Repayment
        })
    } catch (error) {
         res.status(500).json({
            success : false,
            error:"Database error"
        })
    }
}