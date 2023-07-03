
import axios from 'axios';
import React from 'react'

const API_URL=`http://localhost:8000`

export const uploadFile=async (data)=>{
    try {
        let response= await axios.post(`${API_URL}/upload`, data);
        return response.data;

    } catch (error) {
        console.log("Request not Completed due to",error.message);
    }
}