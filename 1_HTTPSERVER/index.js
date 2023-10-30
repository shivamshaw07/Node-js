//The http.createServer() method includes request and response parameters which is supplied by node js

//The request object can be used to get infortmation about the current http request
// i.e url,request header, and data

//The response object is used to send response for the current http request.

//if the response of the http server is supposed to be displayed as HTML,
// You should include the hhtp header with the correct content type



const http = require('http')

const server = http.createServer((req,res)=>{
    res.end("Hello jiii")
});

server.listen(8000,'127.0.0.1',()=>{
    console.log('Listening at port no. 8000')
})