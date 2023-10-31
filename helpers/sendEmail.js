import sgMail from "@sendgrid/mail";

const EMAIL = "pavlovska.alena87@gmail.com";
const EMAIL_PASSWORD = "Ponesilok_123";

const sgMailConfig = {
  host: "smpt.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: EMAIL,
    pass: EMAIL_PASSWORD,
  },
};

const transport = sgMail.createTransport(sgMailConfig);

const sendEmail = (data) => {
  const email = { ...data, from: EMAIL };
  return transport.sendMail(email);
};

export default sendEmail;
