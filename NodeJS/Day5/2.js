// 2. Create an HTTP server that returns JSON data.

const http = require("http");
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Alice" },
];
const server = http.createServer((req, res) => {
    if(req.url === "/api" && req.method === "GET"){
        res.writeHead(200, {"Content-Type" : "application/json"});
        res.end("This is the Page Where it displays the API of the Website!");
    }
    else if (req.url === "/api/users" && req.method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ users }));
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not found Anything!");
    }
});
server.listen(3001, () => {
  console.log("JSON API server on http://localhost:3001");
});