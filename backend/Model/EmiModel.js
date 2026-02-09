import mongoose from "mongoose";

const EmiSchema = new mongoose.Schema({
EMIAmount:{
    type: Number,
    require:true
},
DueDate:{
    type: Date,
    require:true
},
EMIStatus:{
    type: String,
    enum: ["Paid","Pending"],
    require:true
},
Loan_ID:{
    type: mongoose.Schema.Types.ObjectId,
    ref : 'Loan',
    require:true
},
})
export default mongoose.model('Emi',EmiSchema)