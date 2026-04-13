function createApp() {
  const http = require("http");
  const PORT = 3000;
  const routes = { GET: {}, POST: {} };

  return {
    get: (path, handler) => routes.GET[path] = handler,
    post: (path, handler) => routes.POST[path] = handler,

    listen: (port) => {
      http.createServer((req, res) => {
        const handler = routes[req.method]?.[req.url];
        handler ? handler(req, res) : res.end("Not Found");
      }).listen(port);
    }
  };
}

const app = createApp();

app.get("/", (req, res) => res.end("Hello"));
app.listen(3000);