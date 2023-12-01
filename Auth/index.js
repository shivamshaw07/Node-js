import express from 'express'
import {config as configDotenv} from 'dotenv'
import { dbconnect } from './config/database.js'
import router from './router/index.js'
dbconnect()
configDotenv()

const port = process.env.PORT

const app = express()
app.use(express.json())

app.use('/api/v1',router)
app.listen(port,()=>{
    console.log("Server started at ",port);
})

app.get('/',(req,res)=>{
    res.send("hiii")
})