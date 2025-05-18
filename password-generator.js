const generatePassword = require('generate-password');

// Generate a random password with specific options
const password = generatePassword.generate({
  length: 15,
  numbers: true,
  symbols: true,
  uppercase: true,
  lowercase: true
});

// Print generated password to the console
console.log(password);
// This code uses the 'generate-password' package to create a random password with a specified length and character set. The generated password is then printed to the console.