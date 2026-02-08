import EventEmitter from "events";
import {generateInterestSchedule} from "../service/emiScheduleSevice";
import EmiModel from "../model/EmiModel";

export const loanEventEmitter = new EventEmitter();

loanEventEmitter.on("loan_created", async(loan)=>{
    const schedule = generateInterestSchedule({

    });
    await EmiModel.create(schedule);
})