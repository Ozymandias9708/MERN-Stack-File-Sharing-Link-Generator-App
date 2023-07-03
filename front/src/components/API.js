// import dotenv from 'dotenv'
// dotenv.config();
import axios from 'axios';
import React from 'react'

const API_URL="https://sharefreely.onrender.com"

export const uploadFile=async (data)=>{
    try {
        console.group("tried");
        let response= await axios.post(`https://sharefreely.onrender.com/upload`, data);
        return response.data;

    } catch (error) {
        console.log("Request not Completed due to",error.message);
    }
}