const http = require("http");
const PORT = 3000;

http.createServer((req, res) => {
  const cookies = req.headers.cookie || "";
  const parsed = {};

  cookies.split(";").forEach(c => {
    const [key, val] = c.trim().split("=");
    if (key) parsed[key] = val;
  });

  res.end(JSON.stringify(parsed));
}).listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});