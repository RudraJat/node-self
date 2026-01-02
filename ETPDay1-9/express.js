const express = require("express");
const app =express();

app.use(express.json());

app.get("/home", (req,res)=>{
    res.send("Welcome to the Home page");
});

app.post("/data",(req,res)=>{
    res.send("My name is "+req.body.name);
    console.log(req.body.name);
})

app.listen(4000, ()=>{
    console.log("Server is running on port 4000");
})