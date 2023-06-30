import FILE from "../models/file.js";


export const uploadFinally=async(request,response)=>{
    const fileObj={
        path:request.file.path,
        name:request.file.originalname,
    }

    try {
        const file=await FILE.create(fileObj);
        response.status(200).json({ path: `http://localhost:8000/CollectionForFileSharingApp/${file._id}`});
    } catch (error) {
        console.log("Error from response from MongoDB",error.msg);
        response.status(500).json({ error: error.message });
    }
}

export const downloadFile=async(request,response)=>{
    try {
       const file=await FILE.findById(request.params.fileId)
       file.downloadCount++;
       await file.save();

       response.download(file.path,file.name);
    } catch (error) {
        console.log("No download file found",error.message);
        return response.status(500).json({ error: error.message });
    }
}