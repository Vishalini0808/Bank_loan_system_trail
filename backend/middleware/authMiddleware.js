import jwt from "jsonwebtoken";
import User from "../models/userSchema.js";

const authMiddleware = async (req, res, next) => {
  try {
    
    const token = req.headers.authorization?.split (" ")[1];

    if (!token){
        return res.status(401).json({
            message : "No token Provided, Access Denied"
        });
    }
    const decoded = jwt.verify(token, "SECRET_KEY_123");  
    req.User = decoded;
    next();              


  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};

export default authMiddleware;
