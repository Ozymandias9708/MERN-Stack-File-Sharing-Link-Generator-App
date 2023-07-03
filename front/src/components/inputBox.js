import React from 'react';
import './inputBox.css';
import { useRef,useState,useEffect } from 'react';
import {uploadFile} from './API';


export default function InputBox() {
    const refToInputFile=useRef();

    const [file,setFile]=useState('');
    const [result,setResult]=useState('');

    const takeInput=()=>{
        refToInputFile.current.click();
    }

    useEffect(()=>{

        const getFile=async()=>{
            if(file){
                const data=new FormData();
                data.append("name",file.name);
                data.append("file",file);

                let response=await uploadFile(data);
                setResult(response.path);
                // console.log(result);
            }
        }
        getFile();

    },[file,result])

  return (
    <div class="InputBox">
      <h1>Share Freely</h1>
      <p>Click on Upload to get the Share Link</p>
      <button type="button" class="btn btn-primary" onClick={takeInput}>Upload</button>
      <input type="file" ref={refToInputFile} onChange={(e)=>setFile(e.target.files[0])} style={{display:"none"}}/>
      <div><a href={result} target='_blank'>{result}</a></div>
    </div>
  )
}
