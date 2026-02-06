import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import connectDB from "./config/db.js";
import userRouter from "./routes/userRouter.js";
import accountRouter from "./routes/AccountRouter.js";
import loanApplicationRouter from "./routes/LoanApplicationRouter.js";
import loanRouter from "./routes/loanRouter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT||3000;

app.use(cors());
app.use(express.json());
app.use('/api/user',userRouter);
app.use('/api/account',accountRouter);
app.use('/api/loan_app',loanApplicationRouter);
app.use('/api/loan',loanRouter);

connectDB();


app.listen(PORT,()=>{
    console.log(`server running succesfully on port http://localhost:${PORT}`);
    
});