const http = require("http");
const PORT = 3000;

http.createServer((req, res) => {
  const auth = req.headers.authorization;

  if (!auth) {
    res.writeHead(401);
    return res.end("Unauthorized");
  }

  const decoded = Buffer.from(auth.split(" ")[1], "base64").toString();
  const [user, pass] = decoded.split(":");

  if (user !== "admin" || pass !== "123") {
    res.writeHead(401);
    return res.end("Invalid Credentials");
  }

  res.end("Authorized");
}).listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});