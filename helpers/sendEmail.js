import sgMail from "@sendgrid/mail";

// const EMAIL = "pavlovska.alena87@gmail.com";
// const EMAIL_PASSWORD = "Ponesilok_123";
SENDGRID_API_KEY =
  SG.FRA0aSDJTsOGQkHEhjP6Kw.MEGsBB0ZaJ_7gsN2fVCCw - pLXWk_5nm0uvfFLHGEJio;

sgMail.setApiKey(SENDGRID_API_KEY);

const msg = {
  to: "pavlovska.alena87@gmail.com",
  from: "pavlovska.alena87@gmail.com",
  subject: "Sending with SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};

sgMail
  .send(msg)
  .then(() => {
    console.log("Email sent");
  })
  .catch((error) => {
    console.error(error);
  });

// const sgMailConfig = {
//   host: "smpt.gmail.com",
//   port: 465,
//   secure: true,
//   auth: {
//     user: EMAIL,
//     pass: EMAIL_PASSWORD,
//   },
// };

// const transport = sendgrid.createTransport(sgMailConfig);

// const sendEmail = (data) => {
//   const email = { ...data, from: EMAIL };
//   return transport.sendMail(email);
// };

// export default sendEmail;
