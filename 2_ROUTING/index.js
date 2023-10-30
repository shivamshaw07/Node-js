const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.end("At home page")
    }
    else if(req.url == '/about'){
        res.end("At about page")
    }
    else if(req.url == '/contact'){
        res.end("At contact page")
    }
    else{
        res.writeHead(404,{'Content-type':"text/html"})
        res.end("<h1>Page not Found $04</h1>")
    }
})

server.listen(8000,'127.0.0.1',()=>{
    console.log('Running at Port no. 8000')
})