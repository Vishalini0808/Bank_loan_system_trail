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
app.get("/",(req,res)=>{res.end("hello");console.log("called")});
app.use('/api/user',userRouter);
app.use('/api/account',accountRouter);
app.use('/api/loan_app',loanApplicationRouter);
app.use('/api/loan',loanRouter);
app.use("/uploads", express.static("uploads"));
app.use("/api/file", require("./routes/filerouter.js"));

connectDB();


async function start() {
  try {
    await connectDB();

    const server = app.listen(PORT, () => {
      console.log(`server running successfully on http://localhost:${PORT}`);
    });


  } catch (err) {
    console.error("Startup failed:", err);
    process.exit(1);
  }
}

start();
