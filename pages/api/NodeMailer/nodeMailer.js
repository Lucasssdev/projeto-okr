/* eslint-disable react/react-in-jsx-scope */
const nodemailer = require("nodemailer");


export default async function sendEmail(req, res) {
  console.log("RESS->", req);
  // create reusable transporter object using the default SMTP transport
  let transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "f15af85167325a",
      pass: "64903734f2dda2",
    },
  });

  // send mail with defined transport object
  let info = await transport
    .sendMail({
      from: '"Equipe GESTOR OKR 👻" <equipe@okr.com>', // sender address
      to: req.email, // list of receivers
      subject: "CONVITE ✔", // Subject line
      text: "Venha participar", // plain text body
      html: `  <div style='background-color: #f2f2f2; padding: 30px;'>
      <h1 style='color: #333; text-align: center;'>Confirmação de Inscrição</h1>
      <p style='color: #555; font-size: 16px; line-height: 1.5;'>
        Olá ${req.name.charAt(0).toUpperCase()}${req.name.slice(1)}, obrigado por se inscrever no nosso evento! Por favor, clique no botão abaixo para confirmar sua inscrição.
      </p>
      <div style='text-align: center; margin-top: 30px;'>
        <a href='#' style='background-color: #4CAF50; color: white; padding: 12px 20px; text-decoration: none; border-radius: 4px;'>Confirmar Inscrição</a>
      </div>
    </div>`
      , // html body
    })
    .then((response) => {
      console.log(response);
      res.send(response);
    })
    .catch((error) => {
      console.log(error);
      res.send(error);
    });

  console.log("Message sent: ", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: ", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
