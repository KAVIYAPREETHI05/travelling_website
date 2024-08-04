const express =  require("express")
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require("path")
const app= express()

const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/contact.html'));
});
app.post('/send-email', async (req, res) => {
    const { to, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: 'mohanadevi.cs22@bitsathy.ac.in ',
    pass: 'awmkqsxhabmtsarm'     
        }
    });

    const mailOptions = {
        from: 'mohanadevi.cs22@bitsathy.ac.in' ,
        to: to,
        subject: subject,
        text: message
    };

    try {
        await transporter.sendMail(mailOptions);
        res.sendFile(path.join(__dirname + '/contact.html'));
    }
         catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email.');
    }
});

app.listen(port);
