
import LoanApplicationModel from "../models/loanappSchema.js";
import loanModel from "../models/loanModel.js";
import {loanEventEmitter} from "../events/loanEvent.js";
 

export const createApplication = async (data) => {
    return await LoanApplicationModel.create(data);
};
 
export const getAllApplications = async () => {
    return await LoanApplicationModel.find();
};
 
export const getApplicationById = async (id) => {
    return await LoanApplicationModel.findById(id);
};

export const getApplicationByUserId = async (id) => {
    return await LoanApplicationModel.find({user:id});
};
 
 
export const updateApplicationStatus = async (id, loanData) => {
    const status =loanData.status;
    console.log(status)
    if (!["APPROVED", "REJECTED"].includes(status)) {
        throw new Error("INVALID_STATUS");
    }
 console.log(loanData);
    const application = await LoanApplicationModel.findById(id);
    console.log(application
    );
    
    if (!application) {
        throw new Error("APPLICATION_NOT_FOUND");
    }
    application.status = status;
    console.log("ji")
    try{
    await application.save();
    }catch(e){
        console.log("failed");
    }
    console.log("he")
    let loan = null;
 
    if (status === "APPROVED") {
        console.log("hello")
        if (!loanData) throw new Error("LOAN_DATA_REQUIRED");
            console.log(application._id);
        loan = await LoanApplicationModel.findById( application._id.toString() );
        if(!loan){
            console.log("hel");
            
        loan = await loanModel.create({
            loanApplicationId: application._id,
            name: application.name,
            account_number: application.account_number,
            branch: application.branch,
            SanctionedAmount: loanData.SanctionedAmount,
            InterestRate: loanData.InterestRate,
            Duration:loanData.duration,
            LoanStatus: "ACTIVE"
        });
    }
        loanEventEmitter.emit("loan_created",loan);
    }
 
    return { application, loan };
};