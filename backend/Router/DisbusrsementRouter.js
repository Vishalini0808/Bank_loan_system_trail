import express from "express";
import { createDisbursement } from '../Controller/Disbursement.js'

const route = express.Router()

route.post('/creat',createDisbursement)

export default route;