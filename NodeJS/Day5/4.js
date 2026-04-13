// 4. Create a static file server.

const http = require("http");
const PORT = 3000;
const fs = require("fs");
const path = require("path");
http.createServer((req, res) => {
  let filePath = path.join(__dirname, "public", req.url);
  if (req.url === "/") {
    filePath = path.join(__dirname, "public", "index.html");
  }
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("File not found");
      return;
    }
    res.end(data);
  });
}).listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});