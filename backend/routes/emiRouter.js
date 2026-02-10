import express from "express";
import router from "./LoanApplicationRouter";
import { getEmi,payEmi } from "../Controller/EmiController";
const router = express.Router();

router.get("/loan/:loanId",getEmi)
router.post("/pay/:emiId",payEmi);


export default router;