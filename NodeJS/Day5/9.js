const http = require("http");
const PORT = 4000;

http.createServer((req, res) => {
  if (req.url === "/headers") {
    res.end(JSON.stringify(req.headers, null, 2));
  }
}).listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});