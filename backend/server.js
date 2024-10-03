require('dotenv').config();

let express = require('express');
const app = express();
const nodemailer = require("nodemailer");
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 500; // Use environment variable for PORT

const helmet = require('helmet');
app.use(helmet());

// Middleware
app.use(cors());  // Allow CORS for communication between frontend and backend
app.use(bodyParser.json()); // Parse incoming JSON requests

// Test GET endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ message: 'Backend is running!' });
});

// POST endpoint for sending email
app.post('/send-email', (req, res) => {
    const { name, email, number, message } = req.body;

    // Configure the transporter for sending email using Nodemailer 
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS, // Ensure this is a valid app password
        },
    });

    // Email options
    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `Contact Form BuildYourBUZZ ${name}`,
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

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
