import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import authRegister from "./routes/userRegisterRoute.js"
import authLogin from "./routes/userLoginRoute.js"
import cors from "cors";


// const express = require ('express');
// const connectDB = require('./config/db');
// const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

//route api
app.use("/api/authreg",authRegister);
app.use("/api/authlog",authLogin);

const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`server running succesfully on port http://localhost:${PORT}`);
    
});


//endpoints:
// POST http://localhost:3000/api/authreg/register
// POST http://localhost:3000/api/authlog/login
// http://localhost:3000