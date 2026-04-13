const http = require("http");
const PORT = 3000;

http.createServer((req, res) => {
  const start = process.hrtime();

  res.on("finish", () => {
    const diff = process.hrtime(start);
    const ms = diff[0] * 1000 + diff[1] / 1e6;
    console.log(`${req.method} ${req.url} - ${ms}ms`);
  });

  res.end("OK");
}).listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});