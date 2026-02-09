import EmiModel from "../Model/EmiModel.js"

export const createEmi = async (req,res)=>{

    try {
        const {EMIAmount,DueDate,EMIStatus,Loan_ID} = req.body
    const Emi = await  EmiModel.create({
        EMIAmount,
        DueDate,
        EMIStatus,
        Loan_ID
    })

    
    res.status(201).json({
        success : true,
         message:"EMI_Schedule  Amount",
         data : Emi
    })
    } catch (error) {
        res.status(500).json({
           success : false,
            message:'Database error' 
        })
    }
    
}
//Fetch Emi by Loan ID
export const getEmiById = async(req,res)=>{
   try {
      const emis = await EmiModel.find({
        Loan_ID :req.params.loanId
      })
      res.status(200).json(emis)
   } catch (error) {
     res.status(500).json({
        error:error.message
     })
   }
}
//Update EMI

export const updateEmiStatus =async(req,res)=>{
    try {
        const {emiId} =req.params
        const emi  = await EmiModel.findByIdAndUpdate(emiId,
        {EMIStatus:'Paid'},
        {new:true});
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
