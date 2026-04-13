const http = require("http");
const PORT = 3000;
const map = new Map();

http.createServer((req, res) => {
  const ip = req.socket.remoteAddress;
  const count = map.get(ip) || 0;

  if (count >= 5) {
    res.writeHead(429);
    return res.end("Too Many Requests");
  }

  map.set(ip, count + 1);

  setTimeout(() => {
    map.set(ip, (map.get(ip) || 1) - 1);
  }, 60000);

  res.end("Request OK");
}).listen(PORT);