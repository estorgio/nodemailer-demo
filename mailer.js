const nodemailer = require('nodemailer');
require('dotenv').config();

const {
  NODEMAILER_HOST,
  NODEMAILER_PORT,
  NODEMAILER_USER,
  NODEMAILER_PASSWORD,
  NODEMAILER_SENDER_NAME,
  NODEMAILER_SENDER_EMAIL,
} = process.env;

const NODEMAILER_SECURE = (process.env.NODEMAILER_SECURE === 'true');

const transporter = nodemailer.createTransport({
  host: NODEMAILER_HOST,
  port: NODEMAILER_PORT,
  secure: NODEMAILER_SECURE,
  auth: {
    user: NODEMAILER_USER,
    pass: NODEMAILER_PASSWORD,
  },
});

function createTemplate(options) {
  const from = `${NODEMAILER_SENDER_NAME} <${NODEMAILER_SENDER_EMAIL}>`;
  return {
    sendTo: async recipient => transporter.sendMail({ from, to: recipient, ...options }),
  };
}

module.exports = { createTemplate };
