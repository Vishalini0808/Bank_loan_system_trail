import Bank from "../models/bankSchema.js"


// create Admin
const createBank = async (req, res) => {

    try {
        const bank = await Bank.create(req.body);
        res.status(201).json({
            message :" Bank Created Successfully",
            bank, 
        })
    } catch (error) {
        res.status(500).json({
            message : error.message
        });
    }
};


// get banks - customer
export const getAllBanks = async (req, res) => {
  try {
      const banks = await Bank.find();
      res.status(200).json(banks);
  } catch (error) {
    res.status(500).json({
        message : "failed to get banks"
    });
  }
};

export default createBank;
