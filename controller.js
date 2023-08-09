const Sender = require("./global");
// Send email controller
exports.sendEmailHtml = async (req, res) => {
  try {

    const { email, text, subject, html } = req.body;
    // console.log(email);
    // Data to be sent
    const template = {
      from: process.env.AUTH_EMAIL,
      to: email,
      text: text,
      subject: subject,
      html: html,
    };
    const info = await Sender.mailSender(template);
    return res.status(200).send({
      message: "Mail sent",
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
