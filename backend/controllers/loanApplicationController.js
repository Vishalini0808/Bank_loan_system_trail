// import Account from "../models/accountSchema.js";
// import LoanApplication from "../models/loanApplicationSchema.js"
// // Apply for loan


// export const applyLoan = async (req,res) => {

//     try {
//         const customerId = req.user.id;
//         const { loanType, requestedAmount } =  req.body;


//         // verified account check?

//         const account = await Account.findOne({ customer : customerId});
//         if(!account){
//            return res.status(400).json({
//                 message : " Account not found, Add valid account",

//             });
//         }

//         // Create Loan Application

//         const loanApplication = await LoanApplication.create({

//             customer : customerId,
//             loanType,
//             requestedAmount,

//         });

//         res.status(201).json({
//             message : "Loan Application created successfully",
//             loanApplication,
//         })

//     } catch (error) {
//         res.status(500).json({
//             message : error.message
//         })
//     }
// }



