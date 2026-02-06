import bcrypt from "bcrypt";
import userModel from "../model/userModel.js";

export const createUser = async(req,res)=>{

    try{
    const{username,password,role}=req.body;
    const hashedPassword = await bcrypt.hash(password,10);
    const newUser = await userModel.create({
        username,
        password:hashedPassword,
        role
    });
    res.status(201).json({message:"User created successfully",user:newUser});
    console.log("user created "+newUser);
}catch(e){
    console.log(e);
    res.status(500).json({message:"Database Error"});
}
};
