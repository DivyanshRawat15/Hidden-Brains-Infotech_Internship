// 7. Create a server that allows users to download files.

const http = require("http");
const fs = require("fs");
const PORT = 3000;
const path = require("path");

http.createServer((req, res) => {

  if (req.url.startsWith("./download")) {

    const fileName = req.url.split("/")[2];
    const filePath = path.join(__dirname, fileName);

    const stream = fs.createReadStream(filePath);

    res.writeHead(200, {
      "Content-Disposition": `attachment; filename="${fileName}"`
    });

    stream.pipe(res);
  }

}).listen(PORT, () => {
  
  console.log(`Server running at ${PORT}`);
});