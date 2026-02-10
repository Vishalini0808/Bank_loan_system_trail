import EventEmitter from "events";
import {generateInterestSchedule} from "../service/emiScheduleSevice.js";
import EmiModel from "../model/EmiModel.js";

export const loanEventEmitter = new EventEmitter();

loanEventEmitter.on("loan_created", async(loan)=>{
    const schedule = generateInterestSchedule(loan);
    await EmiModel.insertMany(schedule);
})