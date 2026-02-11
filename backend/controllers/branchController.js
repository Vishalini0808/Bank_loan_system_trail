import Branch from "../models/branchSchema.js"

// create Branch

export const createBranch = async (req, res) => {

    try {

        // destructure from body 
        const { branchName, city,ifscCode } = req.body;

        const existingBranch = await Branch.findOne({ ifscCode});
        if(existingBranch) {
            return res.status(400).json({
                message : "Branch with this IFSC already exists",
            });
        }

       
        const branch = await Branch.create({
            
            branchName,
            city,
            ifscCode,
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


