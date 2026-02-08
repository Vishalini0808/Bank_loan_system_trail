import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
    filename : {type:String},
    path :{type: String},
    application_id : {type:Number}
})

export default mongoose.model("File",fileSchema);