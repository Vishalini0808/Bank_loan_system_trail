import express from "express";
import { createRepayment } from '../Controller/RepaymentController.js'

const route = express.Router()

route.post('/creat', createRepayment)

export default route;