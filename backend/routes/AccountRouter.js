import express from "express";
import { createAccount } from "../controller/accountController.js";

const router = express.Router();

router.post("/", createAccount);

export default router;
