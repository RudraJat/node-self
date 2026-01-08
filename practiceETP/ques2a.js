const express = require("express");

const app=express();

app.get("/cal/:a/:b", (req, res)=>{
    const a = Number(req.params.a);
    const b = Number(req.params.b);

    res.send(`Sum: ${a+b}, Product: ${a*b}`);

})

app.listen(3000);