const express = require("express");
const app = express();
const Sender = require("./global");
require("dotenv").config();
const bodyparser = require("body-parser");

app.use(bodyparser.json());

app
  .get("/", (req, res) => {
    console.log("Server is started");
    res.send("hey server is started");
  })
  .listen(3000, () => {
    console.log("server is started");
  });

app.post("/sendemail", async (req, res) => {
  try {
    console.log("url has been hit");
    const { email, text, subject, html } = req.body;
    console.log(email);
    const template = {
      from: process.env.AUTH_EMAIL,
      to: email,
      text: text,
      subject: subject,
      html: html,
    };
    const info = await Sender.mailSender(template);
    console.log(info);
    return res.status(200).send({
      message: "Mail sent",
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
