import express from "express";
import userRegister from "../controllers/userRegisterController.js"
import userLogin from "../controllers/userLoginController.js"

import createBank, { getAllBanks } from "../controllers/bankcontroller.js"
import { addAccount, getMyAccount } from "../controllers/accountController.js";


const router = express.Router();

router.post("/authreg/register",userRegister);
router.post("/authlog/login",userLogin);


router.post("/create", createBank);   //admin
router.get("/", getAllBanks);        //customer

router.post("/add",addAccount);
router.get("/me",getMyAccount);


export default router;


// POST http://localhost:3000/api/authreg/register
// POST http://localhost:3000/api/authlog/login

// POST http://localhost:5000/api/banks/create
//  GET http://localhost:5000/api/banks/