import { createAsyncThunk } from "@reduxjs/toolkit";

const getData=createAsyncThunk('robo',async(url,thunkAPI)=>{
    const results=await fetch(url).then((a)=>a.json())
    
         return results

})
export default getData