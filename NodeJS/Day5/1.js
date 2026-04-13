// 1. Create a server using the Node.js http module that returns different responses based on URL.

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to the home page of the BASIC SERVER!");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is the about page of the BASIC SERVER!");
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Contact us at contact@example.com or +92 2136547098 in this BASIC SERVER!");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found at the BASIC SERVER!");
  }
});
server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
