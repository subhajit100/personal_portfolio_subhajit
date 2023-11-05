const nodemailer = require("nodemailer");
const fromEmail = process.env.FROM_EMAIL;

// Emails
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "asubhajit35@gmail.com",
    pass: process.env.MAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// send mail with defined transport object
// we do not want external access to mail api
exports.sendMail = async ({ to, subject, text }) => {
  const info = await new Promise((resolve, reject) => {
    const emailTemplate = `<html>
            <body>
            <h2>${subject}</h2>
            <p>Thank you for contacting us!</p>
            <p>New message submitted: ${text}</p>
          </body>
          </html>`;
    transporter.sendMail(
      {
        from: `"Subhajit Adhikary" ${fromEmail}`, // sender address
        to: `${fromEmail}, ${to}`, // list of receivers
        subject, // Subject line
        //text, // plain text body
        html: emailTemplate,
      },
      (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      }
    );
  });
  return info;
};
