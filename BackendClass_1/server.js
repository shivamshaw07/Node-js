const express = require('express') //server instance created
const app = express(); //App created

//used to parse req.body in express
const bodyParse = require('body-parser')

//specifically parse JSON data & add it to request.body object
app.use(bodyParse.json())

app.listen(5000,()=>{ //listening at port 3000
    console.log('Heeloo jii')
})

//routes
app.get('/',(request,response) => { // at path '/' this response we will get from the server
    response.send("hiii")
})

app.post('/api/cars',(request,response) =>{
    const {name,brand} = request.body;
    console.log(name)
    console.log(brand)
    response.send("hello")
})

//connecting express and mongodb
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/myDatabase',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{console.log("Connection successful")})
.catch((error)=>{console.log('Recived an error')})