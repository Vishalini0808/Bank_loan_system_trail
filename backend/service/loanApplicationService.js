import LoanApplicationModel from "../model/LoanApplicationModel.js";
import loanModel from "../model/loanModel.js";
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

export const updateApplicationStatus = async (id, status, loanData) => {
    if (!["APPROVED", "REJECTED"].includes(status)) {
        throw new Error("INVALID_STATUS");
    }

    const application = await LoanApplicationModel.findById(id);
    if (!application) {
        throw new Error("APPLICATION_NOT_FOUND");
    }

    application.status = status;
    await application.save();

    let loan = null;

    if (status === "APPROVED") {
        loan = await loanModel.create({
            name: application.name,
            account_number: application.account_number,
            branch: application.branch,
            SanctionedAmount: loanData.SanctionedAmount,
            InterestRate: loanData.InterestRate,
            LoanStatus: loanData.LoanStatus
        });
        loanEventEmitter.on("loan_created",loan);
    }

    return { application, loan };
};
