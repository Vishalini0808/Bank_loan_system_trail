import jwt from "jsonwebtoken";
import User from "../models/userSchema.js";

const authMiddleware = async (req, res, next) => {
  try {
    
    // token get from headers - extract only token except bearer
    const token = req.headers.authorization?.split (" ")[1];

    if (!token){
        return res.status(401).json({
            message : "No token Provided, Access Denied"
        });
    }

    // verify token
    const decoded = jwt.verify(token, "SECRET_KEY");

    // attach decoded data to request 
    req.User = decoded;

    // allow th request
    next();


  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};

export default authMiddleware;
