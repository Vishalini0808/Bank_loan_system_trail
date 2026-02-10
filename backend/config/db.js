import mongoose from "mongoose"

// const mongoose = require('mongoose');

const connectDB = async()=>{
    try {      
        console.log("reached db");
          
        const conn = await mongoose.connect(process.env.Mongo_URL);
        console.log("DB connected Successfully");
        console.log();
        
        
    } catch (error) {
        console.error("Failed to connect DB");
        
    }
}

// module.exports = connectDB;
export default connectDB;