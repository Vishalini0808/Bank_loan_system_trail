import express from "express";
import multer from "multer";

import userRegister from "../controllers/userRegisterController.js"
import userLogin from "../controllers/userLoginController.js"
import { addAccount, getMyAccount } from "../controllers/accountController.js";
import { createBranch } from "../controllers/branchController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import { getBranches } from "../controllers/getAllBranchesController.js";
import { uploadLoanDocs } from "../middleware/filemiddleware.js";
import { createLoanApplication, getApplication, reviewApplication, updateApplication } from "../controllers/loanapplication.js";


const router = express.Router();

router.post("/authreg/register",userRegister);
router.post("/authlog/login",userLogin);


router.post("/branch/create",authMiddleware, createBranch);
router.get ("/branches",authMiddleware, getBranches)


router.post("/accounts/add",authMiddleware, addAccount);
router.get("/accounts/me",authMiddleware, getMyAccount);


router.post("/loanapp/add", uploadLoanDocs,createLoanApplication);
router.get("/loanapp/", getApplication);
router.get('/loanapp/:id',reviewApplication);
router.patch('/loanapp/:id',updateApplication);

export default router;


// authentication
// POST http://localhost:3000/api/authreg/register
// POST http://localhost:3000/api/authlog/login

// branchs
// http://localhost:3000/api/branch/create    //admin
// http://localhost:3000/api/branches


// accounts
// http://localhost:3000/api/accounts/add
// http://localhost:3000/api/accounts/me


// http://localhost:3000/api/loanapp/add
// http://localhost:3000/api/loanapp/