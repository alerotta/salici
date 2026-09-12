import { createServer } from "node:http";

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("chess backend is running");
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});
