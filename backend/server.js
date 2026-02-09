import express from "express";
import mongoose from 'mongoose';
import connectDB from "./config/db.js";
import dotenv from "dotenv";
//router

import loanRouter from "./Router/loanRouter.js";
import EmiRouter from "./Router/EmiRouter.js"
import DisbursementRouter from "./Router/DisbusrsementRouter.js"
import PenaltyRouter from "./Router/PenaltyRouter.js"
import RepaymentRouter from "./Router/RepaymentRouter.js"
dotenv.config();

const app = express();

app.use(express.json());

connectDB();

const PORT = process.env.PORT || 5000; 

app.get('/',(req,res)=>{
    res.send('Hello world');
})
//router
 app.use('/loan/Sanction',loanRouter)
app.use('/disbursement',DisbursementRouter)
app.use('/emi',EmiRouter)
app.use('/penalty',PenaltyRouter)
app.use('/repayment',RepaymentRouter)

app.listen(PORT,()=>{
    console.log(`server running succesfully on port http://localhost:${PORT}`);
    
});