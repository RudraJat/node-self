const http = require("http");
const url = require("url");

http.createServer((req, res) => {

    const q = url.parse(req.url, true);

    if (q.pathname === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(`
            <h2>Sort Values</h2>
            <form action="/sort">
                <input type="text" name="nums" placeholder="Enter numbers">
                <button>Sort</button>
            </form>
        `);
        res.end();
    }

    if (q.pathname === "/sort") {
        let arr = q.query.nums.split(",").map(Number);
        arr.sort((a, b) => a - b);

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("Sorted Values: " + arr);
    }

}).listen(3000);

console.log("Server running on http://localhost:3000");
