import Branch from "../models/branchSchema.js";
import Account from "../models/accountSchema.js";

// add account of customer:

export const addAccount = async (req, res) => {

    try {
        const customerId = req.User.id;
        const { branchId, accountHolderName, accountNumber, accountType } = req.body;

          //  validate branch - which is belongs to bank
        const branch = await Branch.findById( branchId );

        if(!branch){
            return res.status(400).json({
                messsage : "branch not found",
            });
        }


        // save account
        const account = await Account.create({

            customer : customerId,
            branch : branchId,
            accountHolderName,
            accountNumber,
            accountType,

        });
        
        // response
        res.status(201).json({
            message : "Account created successfully",
        });


    } catch (error) {
        res.status(500).json({
            message : error.message
        });
    }
};





// get customer account - eligibility check:

export const getMyAccount = async (req, res) => {
  try {
    const account = await Account.findOne({ customer: req.User.id })

      .populate("branch", "branchName ifscCode city");
    if (!account) {
      return res.status(404).json({
        message: "No bank account found. Please add account to apply for loan",
      });
    }

    res.status(200).json(account);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
