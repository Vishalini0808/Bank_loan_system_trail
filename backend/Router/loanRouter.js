import express from "express";
import {creatLoanSanction,getAllLoanSanction,getLoanById} from '../Controller/LoanController.js'


const route =express.Router()

route.post('/creat',creatLoanSanction)
route.get('/getAllId',getAllLoanSanction)
route.get('/:id',getLoanById)

export default  route;