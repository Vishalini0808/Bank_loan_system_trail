import LoanApplicationModel from "../model/LoanApplicationModel.js";

export const createLoanApplication = async(req,res)=>{

    try{
    const{name,phone,email,account_number,loan_type,branch,address}=req.body;
    const newLoanApplicationModel = await LoanApplicationModel.create({
        name,
        phone,
        email,
        account_number,
        loan_type,
        branch,
        address
    });
    res.status(201).json({message:"Loan Application created successfully",user:newLoanApplicationModel});
    console.log("New Loan Application created "+newLoanApplicationModel);
}catch(e){
    console.log(e);
    res.status(500).json({message:"Database Error"});
}
};
