import { payEmiService,getEmiService } from "../service/emiScheduleSevice.js";

export const payEmi = async (req,res)=>{
    try{
        const result = payEmiService(req.params.emiID);
        res.status(200).json({message:"emi paid",...result})
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

export const getEmi = async (req,res) => {
    try{
        const emis = await getEmiService(req.params.loanId);
        res.status(200).json(emis);
    }catch (err){
        res.status(500).json({error:err.message});
    }
}