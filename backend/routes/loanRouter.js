import express from "express";
import { createLoan} from "../controller/loanApplicationController.js";

const router = express.Router();

router.post("/", createLoan);

export default router;
