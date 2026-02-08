import express from "express";
import { createLoanApplication, getApplication ,reviewApplication, updateApplication} from "../controller/loanApplicationController.js";

const router = express.Router();

router.post("/", createLoanApplication);
router.get("/", getApplication);
router.get('/:id',reviewApplication);
router.patch('/:id',updateApplication);

export default router;
 