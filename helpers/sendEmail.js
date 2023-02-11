const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const mail = { ...data, from: "000Slim000@gmail.com" };
  try {
    await sgMail.send(mail);
    return true;
  } catch (error) {
    throw error.message;
  }
};

module.exports = sendEmail;
