
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
    if (!["APPROVED", "REJECTED"].includes(status)) {
        throw new Error("INVALID_STATUS");
    }
    const application = await LoanApplicationModel.findById(id);
   
    if (!application) {
        throw new Error("APPLICATION_NOT_FOUND");
    }
    application.status = status;
    try{
    await application.save();
    }catch(e){
        console.log("failed");
    }
    
    let loan = null;
 
    if (status === "APPROVED") {
        if (!loanData) throw new Error("LOAN_DATA_REQUIRED");
        // loan = await LoanApplicationModel.findById( application._id.toString() );
        if(!loan){            
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
 console.log(loan);
    return { application, loan };
};