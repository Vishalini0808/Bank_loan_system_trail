import express from "express";
import { createLoan }from "../controller/loanController.js";

const router = express.Router();

router.post("/", createLoan);

export default router;
