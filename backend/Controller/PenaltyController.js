import EmiModel from "../Model/EmiModel.js";
import penaltyModel  from "../Model/PenaltyModel.js";


export  const  creatPenalty =async(req, res)=>{
    try {
        const {PenaltyAmount,Reason,AppliedDate,EMI_ID} = req.body

        const penalty = await penaltyModel.create({
            PenaltyAmount,
            Reason,
            AppliedDate,
            EMI_ID
        })
        res.status(201).json({
             success : true,
            messsage:"PenltyAmount",
            penalty:penalty
        })
        } catch (error) {
          res.status(500).json({
             success : false,
            error:"Database error"
          })
    }
}

export const penaltyForDue= async(req,res)=>{
   try {
    const {EMI_ID} =req.params;
    const emi  = await EmiModel.findById(EMI_ID)

    if(!emi){
        return res.status(404).json({
            messsage:'EMI not found'
        })
    }

    if(emi.EMIStatus ==='Paid'){
        return res.status(400).json({
            message:'EMI already  paid . No penalty applicable'
        });
    }
    const today = new Date();
    if(today <= emi.DueDate){
     return res.status(400).json({
        messsage:"EMI is not over due yet"
     })
    }
     
     res.status(201).json({
      message: "Penalty applied successfully",
      penalty
    });
   } catch (error) {
    res.status(500).json({error:error.message})
    
   }
}