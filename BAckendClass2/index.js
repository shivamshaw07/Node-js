import express from 'express'
import { configDotenv } from 'dotenv';
configDotenv()
const PORT = process.env.PORT || 4000;
const app = express()
//middleware to parse json body
app.use(express.json())

//import routes from todoroute
import router from './routes/todos.js'
//mount the todo api route
app.use('/api/v1',router);

//start the server
app.listen(PORT,()=>{
    console.log('server started successfully',PORT);
})


//connect database
import dbconnect from './config/database.js';
dbconnect();

//default route
app.get('/',(req,res)=>{
    res.send('heyyyy')
})