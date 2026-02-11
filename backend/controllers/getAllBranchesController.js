import Branch from "../models/branchSchema.js"

export const getBranches = async (req, res) => {
  try {
    const branches = await Branch.find();
    res.status(200).json(branches);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
