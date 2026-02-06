import accountModel from "../model/AccountModel.js";

export const createAccount = async(req,res)=>{

    try{
    const{name,phone,email,account_type,branch,address}=req.body;
    const newAccount = await accountModel.create({
        name,
        phone,
        email,
        account_type,
        branch,
        address
    });
    res.status(201).json({message:"Account created successfully",user:newUser});
    console.log("Account created "+newAccount);
}catch(e){
    console.log(e);
    res.status(500).json({message:"Database Error"});
}
};
