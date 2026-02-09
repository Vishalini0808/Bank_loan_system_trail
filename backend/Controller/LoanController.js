import LoanModel from '../Model/LoanModel.js';


//Creat
export  const creatLoanSanction = async(req,res)=>{
   try {
    const {SanctionedAmount,InterestRate,StartDate,EndDate,LoanStatus,Application_ID}= req.body;

    const loanSanction =await LoanModel.create({
       SanctionedAmount,
       InterestRate,
       StartDate,
       EndDate,
       LoanStatus,
       Application_ID
    });
     res.status(201).json({messsage:"Loan Sanction Successfully",loanSanction})
   } catch (error) {
       res.status(500).json({error : "Database Error"})
   }
}

//get all Loans
export const getAllLoanSanction =async (req,res)=>{
   try {
      const allLoanSanction = await LoanModel.find();
      res.status(200).json(allLoanSanction)
   } catch (error) {
      res.status(500).json({error:error.messsage})
   }
}

//get 
export const getLoanById = async (req, res) => {
   try {

      const loan = await LoanModel.findById(req.params.id)
      if(!loan){
         return res.status(404).json({
        message: "Loan not found"
      })
   }
   res.status(200).json(loan);
   } catch (error) {
      res.status(500).json({error:error.messsage})
   }
  
};
