// 3. Create a server that logs every request.

const http = require("http");
const fs = require("fs");
const path = require("path");
const logFile = path.join(__dirname, "requests.log");
const server = http.createServer((req, res) => {
  const now = new Date();
  const time = now.toTimeString().split(" ")[0]; // HH:MM:SS
  const method = req.method;
  const url = req.url;
  const ip = req.socket.remoteAddress;

  const logLine = `[${time}] ${method} ${url} ${ip}\n`;

  fs.appendFile(logFile, logLine, (err) => {
    if (err) console.error("Error writing log:", err);
  });

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Request logged");
});

server.listen(3002, () => {
  console.log("Logger server on http://localhost:3002");
});
