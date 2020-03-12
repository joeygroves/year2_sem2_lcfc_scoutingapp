const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');
var fs  = require('fs');
const app = express();

module.exports = function(app) {


    var to_list = [];

    var transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: 'lcfcapp.scrum13@gmail.com',
        pass: 'liv3rp00lsux'
      }
    });
 
    var mailOptions = {
      from: "lcfcapp.scrum13@gmail.com",
      to: "mp610@student.le.ac.uk",
      subject: "Player Report",
      text: "New Scout Report In The Attachment",
      attachments: [
        {
          filename: 'ScoutReport.xlsx',
          content: fs.createReadStream('Report.xlsx'),
        }
      ]
    };

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });


}