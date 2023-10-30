const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.end("Home mai hai bhai")
    }else if(req.url == '/api'){
        fs.readFile('../4_JSONfile/data.json','utf-8',(err,data)=>{
            console.log(data)
        })
        res.end('bhai API page mai hai')
    }else{
        res.end('Nahi hai kuch')
    }

})

server.listen(4000,'127.0.0.1',()=>{
    console.log('Hogya server port no. 4000 pr chalu')
})