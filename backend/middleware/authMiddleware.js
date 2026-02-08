import jwt from "jsonwebtoken";
 
export const verifyToken=(req,res,next)=>{
    let token;
    let authHeader = req.headers.authorization || req.headers.Authorization;
    if(!authHeader && !authHeader.startsWith("Bearer ")){
        console.log(authHeader);
                    return res.status(401).json({message:"not authorized"});
 
    }
        token = authHeader.split(" ")[1];
        try{
            const decode = jwt.verify(token,"SECRET_KEY");
            req.user = decode;
                next();
 
        }catch(error){
            res.status(400).json({message:"token not valid"});
        }
    
}