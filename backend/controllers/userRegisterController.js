import bcrypt from "bcryptjs";
import User from "../models/userSchema.js";

// register(custmer only)

const register = async (req, res) => {

    try {
        const {name, email, password} = req.body;

        //exisiting email
        const existingEmail = await User.findOne({email});
        if (existingEmail)
            return res.status(400).json({
        message : "Email already exists"
    });
        
        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            name,
            email,
            password : hashedPassword,
            role : "CUSTOMER",
        });

        res.status(201).json({
            message: "Customer registered successfully"
        });
    } catch (error) {
        res.status(500).json({
            message : "Registration Failed",error
        });
    }
};

export default register;