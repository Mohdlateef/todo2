const express=require("express");
const app=express();
let process =require('dotenv').config();

const mongoose=require("mongoose")
// mongoose.connect()

app.get('/',(req,res)=>{
    console.log("abcd");
    return res.send("yes we are fine")
})

app.listen(8000, ()=>{
    console.log("abc");
})
