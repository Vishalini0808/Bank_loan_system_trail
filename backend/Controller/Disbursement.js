import DisbursementModel from "../Model/DisbursementModel.js";

export const  createDisbursement  = async(req,res)=>{
    
    try {
        const {DisbursementAmount,DisbursementDate, Loan_ID,Account_ID} = req.body;

        const disbursement = await DisbursementModel.create({
            DisbursementAmount,
            DisbursementDate,
            Loan_ID,
            Account_ID
        })
        res.status(201).json({
            success : true,
            message:"Disbursement the Amount",disbursement
        })
    } catch (error) {

        res.status(500).json(
            {success : false,
                error : "Database Error"}
        )
    }
}