import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/userSchema.js";

// login (customer/employee)

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const regUser = await User.findOne({email});
        if(!regUser)
            return res.status(400).json({
        message : "User not found"
            })

        const ispassMatch = await bcrypt.compare(password, regUser.password);
        if (!ispassMatch)
            return res.status(400).json({
        message : "Invalid password"
        })

        const token = jwt.sign(
            {id : regUser._id, role : regUser.role},
            "SECRET_KEY",
            {expiresIn: "1d"}
        );

        res.json({
            token,
            role : regUser.role,
        })
        
    } catch (error) {
        res.status(500).json({
            message: "Login Failed"
        });
    }
};

export default login;