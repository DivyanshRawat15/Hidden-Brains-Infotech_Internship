const http = require("http");
const PORT = 3000;
const os = require("os");

http.createServer((req, res) => {
  if (req.url === "/system") {
    res.end(JSON.stringify({
      platform: os.platform(),
      cpus: os.cpus().length,
      freemem: os.freemem()
    }));
  }
}).listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});