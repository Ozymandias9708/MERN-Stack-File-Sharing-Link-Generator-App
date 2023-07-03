// require('dotenv').config()
import dotenv from 'dotenv'
dotenv.config()
import mongoose from "mongoose"; 

 
 const DBConnection=async()=>{
    const MONGODB_URI=`mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@databaseforfilesharinga.fh4dbbj.mongodb.net/`
    
    try {
        await mongoose.connect(MONGODB_URI,{useNewUrlParser:true});
        console.log("Succcesfully Connected to MongoDB");
    } catch (error) {
        console.log("Not Connected to MongoDB", error.message);
    }
}
 
export default DBConnection; 