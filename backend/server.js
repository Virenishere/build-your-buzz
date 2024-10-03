require('dotenv').config();
const express = require('express');
const nodemailer = require("nodemailer");
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const PORT = process.env.PORT || 5000; // Use PORT from environment variable or default to 5000
const app = express();

// Middleware
const corsOptions = {
    origin: 'https://build-your-buzz.vercel.app', // Allow requests only from this origin
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions)); // Allow CORS for communication between frontend and backend
app.use(bodyParser.json()); // Parse incoming JSON requests
app.use(helmet()); // Add security headers

// Email sending route
app.post('/send-email', async (req, res) => {
    const { name, email, number, message } = req.body;

    // Basic validation
    if (!name || !email || !number || !message) {
        return res.status(400).send('All fields are required');
    }

    // Configure the transporter for sending email using Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, // Your Gmail address
            pass: process.env.EMAIL_PASS,   // Your App Password
        },
    });

    // Email options
    const mailOptions = {
        from: email, // Sender's email address
        to: process.env.EMAIL_USER, // Recipient's email (your Gmail)
        subject: `Contact Form BuildYourBUZZ ${name}`, // Subject of the email
        text: `You have received a new message from your contact form:\n\nName: ${name}\nEmail: ${email}\nMobile Number: ${number}\nMessage: ${message}`,
    };

    try {
        // Send the email
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        return res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).send('Error sending email');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
