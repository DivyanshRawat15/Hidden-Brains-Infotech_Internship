const http = require("http");
const PORT = 3000;
const fs = require("fs");

const FILE = "products.json";

function readData() {
  return JSON.parse(fs.readFileSync(FILE));
}

function writeData(data) {
  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
}

http.createServer((req, res) => {
  let data = readData();

  if (req.method === "GET" && req.url === "/products") {
    return res.end(JSON.stringify(data));
  }

  if (req.method === "POST" && req.url === "/products") {
    let body = "";
    req.on("data", chunk => body += chunk);
    req.on("end", () => {
      const newProduct = JSON.parse(body);
      data.push(newProduct);
      writeData(data);
      res.end("Created");
    });
  }

}).listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});