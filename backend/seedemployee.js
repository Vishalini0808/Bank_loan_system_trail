import bcrypt from "bcryptjs";
import mongoose  from "mongoose";
import dotenv from "dotenv";
import User from "./models/userSchema.js"

dotenv.config();

const seedEmployee = async () => {
    try {
        await mongoose.connect(process.env.Mongo_URL);
        console.log("Db connected");
        
        
        await User.create({
            name : "Loan Officer",
            email : "employee@gmail.com",
            password : await bcrypt.hash("123456",10),
            role : "EMPLOYEE"
        });

        console.log("Employee craeted");
        process.exit();
        

    } catch (error) {
        console.error(error);
        process.exit();
        
    }
};

seedEmployee();