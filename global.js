const transporter = require("./utils/mailtransporter");
const mailSender = async (input) => {
  try {
    await transporter.sendMail(input, function (err, data) {
      if (err) {
        return err;
      } else {
        console.log(data);
        return data;
      }
    });
  } catch (error) {
    return error;
  }
};
module.exports = { mailSender };
