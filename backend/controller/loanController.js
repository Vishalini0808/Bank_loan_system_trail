import loanModel from "../model/loanModel.js";

export const createLoan = async(req,res)=>{

    try{
    const{name,SanctionedAmount,InterestRate,LoanStatus,branch}=req.body;
    const newLoan = await loanModel.create({
        name,
        SanctionedAmount,
        InterestRate,
        LoanStatus,
        branch
    });
    res.status(201).json({message:"Loan created successfully",user:newLoan});
    console.log("Loan created "+newLoan);
}catch(e){
    console.log(e);
    res.status(500).json({message:"Database Error"});
}
};
