import express from "express";
import { creatPenalty } from '../Controller/PenaltyController.js'

const route = express.Router()

route.post('/creat',creatPenalty)

export default route;