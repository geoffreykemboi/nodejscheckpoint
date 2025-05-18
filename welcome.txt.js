const fs = require('fs');

// welcome.txt
fs.writeFileSync('welcome.txt', 'Hello Node');

// To Read and log content
const data = fs.readFileSync('welcome.txt', 'utf8');
console.log(data);
