require('dotenv').config();

let express = require('express');
const app = express();
const nodemailer = require("nodemailer");
const cors = require('cors');
const { text } = require('body-parser');
const bodyParser = require('body-parser');
const PORT = 5000;

//middleware
app.use(cors());  // Allow CORS for communication between frontend and backend
app.use(bodyParser.json()); // Parse incoming JSON requests

app.post('/send-email', (req,res)=>{
  const {name,email,number,message} = req.body;

  //Configure the transported for sending email using the Nodemailer 
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // Ensure this is a valid app password
    },
  })


//Email options
const mailOptions = {
  from: email,
  to: process.env.EMAIL_USER,
  subject: `Contact Form BuildYourBUzz ${name}`,
  text: `You have received a new message from your contact form:
  
  Name: ${name}
  Email: ${email}
  Mobile Number: ${number}
  Message: ${message}`,
};


// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error sending email:', error);
    return res.status(500).send('Error sending email');
  }
  console.log('Email sent:', info.response);
  res.status(200).send('Email sent successfully');
});
});


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})