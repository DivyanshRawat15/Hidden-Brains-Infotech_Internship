const http = require("http");
const PORT = 4000;

http.createServer((req, res) => {
  if (req.url === "/google") {
    http.get("http://google.com", proxyRes => {
      proxyRes.pipe(res);
    });
  }
}).listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});