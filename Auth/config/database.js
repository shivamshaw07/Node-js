import mongoose from "mongoose";                        
import {config as configDotenv } from "dotenv";
configDotenv()

export const dbconnect = () =>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(console.log("DbConnected"))
    .catch(err=>{
        console.log("DbNotConnected");
        console.error();
    })
}