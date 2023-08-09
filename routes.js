const router = require("express").Router();

router.post("/send-email", User.sendEmailHtml);
module.exports = router;
