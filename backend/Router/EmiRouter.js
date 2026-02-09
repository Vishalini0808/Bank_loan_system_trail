import express from "express";
import { createEmi,getEmiById,updateEmiStatus } from '../Controller/EmiController.js'

const route = express.Router()

route.post('/creat',createEmi)
route.get('/loan/:loanId',getEmiById)
route.put('/pay/:emiId',updateEmiStatus)

export default route;