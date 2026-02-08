import mongoose  from 'mongoose';

const connectDB = async()=>{
    try {        
        const conn = await mongoose.connect(process.env.Mongo_URL);
        console.log("DB connected Successfully");
        
    } catch (error) {
        console.error("Failed to connect DB "+ error.message);
        throw error;
    }
}

export default connectDB;