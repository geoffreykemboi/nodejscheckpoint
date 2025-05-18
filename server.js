const http = require('http');

// HTTP server
const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.end('<h1>Hello Node!!!!</h1>\n');
});

// Define the port and start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
// This code creates a simple HTTP server using Node.js that listens on port 3000 and responds with a welcome message.  