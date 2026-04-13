// 6. Create an API endpoint: POST /login

// const PORT = 3000;
// const http = require("http");
// http.createServer((req, res) => {
//   if (req.method === "POST" && req.url === "/login") {
//     let body = "";
//     req.on("data", chunk => {
//       body += chunk;
//     });
//     req.on("end", () => {
//       const params = new URLSearchParams(body);
//       const username = params.get("username");
//       const password = params.get("password");
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({ username, password }));
//     });
//   }
// }).listen(PORT, () => {
//   console.log(`Server running at ${PORT}`);
// });


const http = require("http");

http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/login") {
    let body = "";

    req.on("data", chunk => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const params = new URLSearchParams(body);
      const username = params.get("username");
      const password = params.get("password");

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ username, password }));
    });
  }
}).listen(3000, () => console.log("Server running on 3000"));