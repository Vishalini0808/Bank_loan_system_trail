import EmiModel from "../Model/EmiModel.js"
import LoanModel from "../Model/LoanModel.js"

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

//generateEmi

export const generateEmiPlain = async (req,res)=>{
     try {
        const {Loan_ID} =req.body;
        
        const loan = await LoanModel.findById(Loan_ID)

        if(!loan){
            return res.status(404).json({
                message:"Loan not found"
            })
        }
        //EMi Calculation
        const start = new Date(loan.StartDate);
        const end  = new Date(loan.EndDate)
       
        const CalMonths=(end.getFullYear() -start.getFullYear())*12+(end.getMonth()-start.getMonth())

        const P =loan.SanctionedAmount;
        const R =loan.InterestRate/12/100
        const N =CalMonths

         const EMIAmount =   (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
        
         const roundedEmi =Math.round(EMIAmount)

         let emis =[]
         let dueDate =new Date(start)

         
    for (let i = 1; i <= N; i++) {
      dueDate.setMonth(dueDate.getMonth() + 1);

      emis.push({
        EMIAmount: roundedEmi,
        DueDate: new Date(dueDate),
        EMIStatus: "Pending",
        Loan_ID: loanId
      });
        const savedEmis = await Emi.insertMany(emis);

    res.status(201).json({
      message: "EMI plan generated successfully",
      monthlyEmi: roundedEmi,
      totalMonths: N,
      emis: savedEmis
    });
    }
        
     } catch (error) {
        res.status(500).json({
            error: error.message
        })
     }
}