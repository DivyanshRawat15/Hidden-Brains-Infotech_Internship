const http = require("http");
const PORT = 3000;

const routes = {
  GET: {},
  POST: {}
};

routes.GET["/users"] = (req, res) => res.end("Users");

http.createServer((req, res) => {
  const handler = routes[req.method]?.[req.url];
  if (handler) handler(req, res);
  else res.end("Not Found");
}).listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});