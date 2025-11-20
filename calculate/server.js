const http = require("http");

const server = http.createServer((request, response)=>{

    if(request.url === "/getInsideInfo"){
        response.end("You have accessed the inside info!");
        return;
    }
    response.end("Hello from my server");
});

server.listen(1111,()=>{
    console.log("Server is listening on port 1111");
});