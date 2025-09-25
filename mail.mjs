import 'dotenv/config'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "joshuabrad03@gmail.com",
      pass: process.env.GOOGLE_APP_PASSWORD,
    },
    tls: {
        ciphers:'SSLv3'
    }
  });

try {
   
    const mailOptions = {
      from: process.env.NODEMAILER_EMAIL,
      to: 'bcumbie@una.edu',
      subject: 'CIS 486 Email Thing',
      text: 'Hi Barry.'
    };

    
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.error('Error:', error);
      } else {
        console.log('Email sent:', info.response)
      }
    });
 
  } catch (error) {
    console.error('Error in /register:', error);
    res.status(500).send("Internal Server Error");
  } 