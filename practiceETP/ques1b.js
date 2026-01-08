const http = require("http");
const url = require("url");

http.createServer((req, res)=>{
    const q= url.parse(req.url, true);
    
    if(q.pathname==="/"){
        res.writeHead(200, {"Content-Type":"text/html"});
        res.write(`
                <form action="/search">
                    <input type="text" name="num" placeholder="Enter a number"/>
                    <button>Search</button>
                </form>
            `)
            res.end();
    }

    if(q.pathname==="/search"){
        const arr=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97];
        let num = Number(q.query.num);
        res.writeHead(200,{"Content-Type": "text/html"});
        res.end(arr.includes(num)? "Number Found": "Number Not Found");
    }

}).listen(3000);