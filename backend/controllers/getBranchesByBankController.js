import Branch from "../models/branchSchema.js"

export const getBranchesByBank = async (req, res) => {
  try {
    const { bankId } = req.params;

    const branches = await Branch.find({ bank: bankId });

    res.status(200).json(branches);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
