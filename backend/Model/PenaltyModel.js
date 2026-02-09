import mongoose from "mongoose";

const PenaltySchema = new mongoose.Schema({
    PenaltyAmount:{
        type: Number,
        require:true
    },
    Reason:{
        type: String,
        require:true
    },
    AppliedDate:{
        type: Date,
        require:true
    },
    EMI_ID:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Emi',
        require:true
    },
})

export default  mongoose.model('penalty',PenaltySchema)