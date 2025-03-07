const express = require("express");
const sendMail = require("./smtpServer.js");
const app = express();

app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { to, subject, text } = req.body;

  if (!to || !subject || !text) {
    console.log("ERROR : MISSING FIELDS")
    return res.status(400).json({ error: "Missing fields" });
  }

  const result = await sendMail(to, subject, text);
  if (result.success) {
    console.log("Email sent successfully!")
    res.json({ message: "Email sent successfully!", messageId: result.messageId });
  } else {
    res.status(500).json({ error: "Failed to send email", details: result.error });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
