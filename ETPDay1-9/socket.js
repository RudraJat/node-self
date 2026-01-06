const express = require("express");
const http = require("http");
const {Server}= require("socket.io");

const app = express();
const server = http.createServer(app);

const io = new Server(server);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});


io.on("connection",(socket)=>{
    console.log("New client connected:",socket.id);
    socket.on("message",(msg)=>{
        console.log("Message received: ",msg);

        io.emit("message",msg);//send message to all connected user
    });
});

server.listen(9000);