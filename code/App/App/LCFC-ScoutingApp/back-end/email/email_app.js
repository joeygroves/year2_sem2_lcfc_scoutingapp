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
      to: "jwcg2@student.le.ac.uk, tsr10@student.le.ac.uk, jrb43@student.le.ac.uk, mp610@student.le.ac.uk",
      subject: "Player Report",
      text: "New Scout Report In The Attachment",
      attachments: [
        {
          filename: 'ScoutReport.xlsx',
          content: fs.createReadStream('/Users/jamie/Documents/Year2/Software Engineering/LCFC Scouting App Development/myBranch/scrum-13/App/LCFC-ScoutingApp/back-end/email/Test.xlsx'),
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