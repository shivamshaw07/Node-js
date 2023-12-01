import {config as configDotenv } from "dotenv";
import { mongoose } from "mongoose";
configDotenv()

export const dbconnect = () =>{
    mongoose.connect('mongodb://127.0.0.1:27017/blogdb',{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log('dbconnected succesfully');
    })
    .catch((err)=>{
        console.error(err);
        console.log('db not succesfully');
    })
}