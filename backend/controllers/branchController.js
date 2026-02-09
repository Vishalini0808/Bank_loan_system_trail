import Bank from "../models/bankSchema.js"
import Branch from "../models/branchSchema.js"

// create Branch

export const createBranch = async (req, res) => {

    try {

        // destructure from body 
        const { branchName, city,ifscCode, bankId } = req.body;

        // bank exist ah nu paakurom
        const bank = await Bank.findById(bankId);
        if (!bank) {
            return res.status(404).json({
                message : "Bank not found"
            })
            
        }

        // if bank found na create branch 
        const branch = await Branch.create({
            
            branchName,
            city,
            ifscCode,
            bank : bankId
        });

        res.status(201).json({
            message : "Branch created successfully"
        });


    } catch (error) {
        res.status(500).json({ 
            message : error.message
        });
    }
};


