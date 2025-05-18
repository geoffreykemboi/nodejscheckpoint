const nodemailer = require('nodemailer');  // Import nodemailer package

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',         // Your Gmail address
    pass: 'your-app-password'             // App Password from Google
  }
});

let mailOptions = {
  from: 'your-email@gmail.com',    // Sender's email address
  to: 'recipient-email@gmail.com',  // Recipient's email address
  subject: 'Hello from Node.js',    // Subject of the email
  text: 'This is a test email from Node.js app.'  // Body of the email
};

transporter.sendMail(mailOptions, (error, info) => {      // Send the email
  if (error) {                                            // Check for errors
    return console.error('Error sending email:', error);  // Log error 
  }
  console.log('Email sent successfully:', info.response); // Log success message 
});                                                       // End of the script
