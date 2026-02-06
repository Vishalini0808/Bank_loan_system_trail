import express from "express";
import { createLoanApplication } from "../controller/loanApplicationController.js";

const router = express.Router();

router.post("/", createLoanApplication);

export default router;
