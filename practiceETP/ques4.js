const http = require("http");
const url = require("url");

http.createServer((req, res)=>{
    const q=url.parse(req.url,true);

    if(q.pathname==="/"){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(`
                <form action="/fact">
                <input type="text" name="num" placeholder="Enter a number"/>
                <button>Get Factorial</button>
            `)
        res.end();
    }

    if(q.pathname==='/fact'){
        let fact=1;
        let num=Number(q.query.num);
        for(let i =1; i<=num;i++) fact*=i;
        res.end("Factorial is "+fact);

    }
}).listen(3000);