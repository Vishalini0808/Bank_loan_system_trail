const express = require ('express');
const mongoose = require ('mongoose');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(express.json());

connectDB();

PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`server running succesfully on port http://localhost:${PORT}`);
    
});