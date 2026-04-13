const http = require("http");
const fs = require("fs");
const PORT = 3000;
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("request", msg => fs.appendFileSync("log.txt", msg + "\n"));

http.createServer((req, res) => {
  emitter.emit("request", `Request: ${req.url}`);
  res.end("Done");
}).listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});