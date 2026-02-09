import Bank from "../models/bankSchema.js";
import Branch from "../models/branchSchema.js";
import Account from "../models/accountSchema.js";

// add account of customer:

export const addAccount = async (req, res) => {

    try {
        const customerId = req.user.id;
        const {  bankId, branchId, accountNumber, accountType } = req.body;

        // validate bank - chechk bank
        const bank = await Bank.findById(bankId);
        if (!bank) {
            return res.status(400).json({
                message : "Bank not found"
            });
        }

          //  validate branch - which is belongs to bank
        const branch = await Branch.findOne({
            _id: branchId,
            bank : bankId,
        });

        if(!branch){
            return res.status(400).json({
                messsage : "invalid branch for the selected bank",
            });
        }



        // save account
        const account = await Account.create({

            customer : customerId,
            bank : bankId,
            branch : branchId,
            accountNumber,
            accountType,
        });
        
        // response
        res.status(201).json({
            message : "Bank account verified and added successfully",
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
    const account = await Account.findOne({ customer: req.user.id })
      .populate("bank", "bankName")

      
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
