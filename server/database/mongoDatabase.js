import mongoose from "mongoose";

 const DBConnection=async()=>{
    const MONGODB_URI=`mongodb+srv://shubham9905374230:DatabaseForFileSharingApp%409708@databaseforfilesharinga.fh4dbbj.mongodb.net/`;
    try {
        await mongoose.connect(MONGODB_URI,{useNewUrlParser:true});
        console.log("Succcesfully Connected to MongoDB");
    } catch (error) {
        console.log("Not Connected to MongoDB", error.message);
    }
}

export default DBConnection;