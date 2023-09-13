const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();

const port = process.env.PORT || 5001;

app.use(express.static(__dirname));
app.use(express.json());

require('dotenv').config();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/', (req, res) => {
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS
        }
    });

    const mailOptions = {
        from: req.body.email,
        to: 'uking1066hina@gmail.com',
        subject: `Message from ${req.body.email}: ${req.body.name}`,
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.log(error);
            res.send('error');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('success');
        }
    });
});

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});