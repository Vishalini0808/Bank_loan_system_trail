import {createApplication,getAllApplications,getApplicationById,updateApplicationStatus, getApplicationByUserId} from "../service/loanApplicationservice.js"
 
export const createLoanApplication = async (req, res) => {
    try {
        const data = {
            ...req.body,
            user:req.User.id,
            documents:{
                proof: req.files?.proof?.[0]?.path ||null,
            },
        };
        const application = await createApplication(data);
        res.status(201).json({
            message: "Loan Application created successfully",
            application
        });
    } catch (error) {
        res.status(500).json({ message: "Database Error" });
    }
};
 
export const LoanStatus = async (req, res) => {
    try {
        const application  = await getApplicationByUserId(req.User.id);
        if (!application) {
            return res.status(404).json({ message: "Application not found" });
        }
        res.json(application);
        
    } catch (error) {
        res.status(500).json({ message: "Database error" });
    }
};
 


// employee dashboard
export const getApplication = async (req, res) => {
    try {
        const applications = await getAllApplications();
        res.status(200).json({
            message: "All applications fetched successfully",
            applications
        });
    } catch (error) {
        res.status(500).json({ message: "Database error" });
    }
};
 
export const reviewApplication = async (req, res) => {
    try {
        const application = await getApplicationById(req.params.id);
        if (!application) {
            return res.status(404).json({ message: "Application not found" });
        }
        res.json(application);
    } catch (error) {
        res.status(500).json({ message: "Database error" });
    }
};
 

//  employee
export const updateApplication = async (req, res) => {
    try {
        const { id } = req.params;
     
 
        const result = await updateApplicationStatus(id, req.body);
 
        res.status(200).json({
            message: "Application status updated",
            ...result
        });
    } catch (error) {
        if (error.message === "INVALID_STATUS") {
            return res.status(400).json({ message: "Status not valid" });
        }
        if (error.message === "APPLICATION_NOT_FOUND") {
            return res.status(404).json({ message: "Application not found" });
        }
        res.status(500).json({ message: "Database error" });
    }
};
 
