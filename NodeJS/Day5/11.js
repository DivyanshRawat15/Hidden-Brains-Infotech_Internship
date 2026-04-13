const http = require("http");
const PORT = 3000;
const fs = require("fs");

http.createServer((req, res) => {
  if (req.url === "/video") {
    fs.createReadStream("video.mp4").pipe(res);
  }
}).listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});