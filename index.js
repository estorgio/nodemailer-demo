require('dotenv').config();

const mailer = require('./mailer');

(async () => {
  const passwordReset = mailer.createTemplate({
    subject: 'Sample password reset email',
    html: `<p>This is a sample password reset email. To reset, visit the link below.
    <a href="https://someapp.estorgio.app/reset/abcd12">https://someapp.estorgio.app/reset/abcd12</a>
    </p>`,
  });

  // TODO: uncomment and specify recipient
  // await passwordReset.sendTo('john@gmail.com');

  console.log('Mail has been sent');
})();
