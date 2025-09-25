//app.js
const http = require("http");
const port = process.env.port||2000;
// Create server
const server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("Hello, World! This is my first Node.js server 🚀");
});

// Listen on port 3000
server.listen(2000, () => {
  console.log("Server running at http://localhost:2000/");
});