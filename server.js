const nodemailer = require("nodemailer");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const EMAIL = process.env.GMAIL_EMAIL;
const PASSWORD = process.env.GMAIL_AUTH_PASS;

const app = express();

app.use(cors());
app.use(express.json());
app.post("/businesses", async (req, res) => {
  const { business_name, business_email, business_mobile, business_project } = req.body;
  const response = await sendMail({
    to: EMAIL,
    subject: business_mobile,
    body: `Hello! ${business_name} (${business_email})

    Sent you the following message: ${business_project}`,
  });
  // console.log(req.body);
    // res.json({ ok: "ok", response });
    res.sendStatus(200);
});

app.post("/sellers", async (req, res) => {
    const { seller_name, seller_email, seller_mobile, seller_skills } = req.body;
    const response = await sendMail({
      to: EMAIL,
      subject: seller_mobile,
      body: `Hello! ${seller_name} (${seller_email})
  
      Sent you the following message: ${seller_skills}`,
    });
  // console.log(req.body);
  //   res.json({ ok: "ok", response });
  res.sendStatus(200);
});

app.post("/contactus", async (req, res) => {
  const { contact_name, contact_email, contact_mobile, contact_queryDiscription  } = req.body;
  const response = await sendMail({
    to: EMAIL,
    subject: contact_mobile,
    body: `Hello! ${contact_name} (${contact_email})

    Sent you the following message: ${contact_queryDiscription    }`,
  });
// console.log({response});
//   res.json({ ok: "ok", response });
res.sendStatus(200);
});

app.use(express.static(path.join(__dirname, "/build")));

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

const port = process.env.PORT || 5000; //creating a server

app.listen(port, () => console.log(`listening on port ${port} `));

async function sendMail({ to, cc, bcc, subject, body }) {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: EMAIL,
        pass: PASSWORD,
      },
    });

    const message = {
      from: `"piyush" <${EMAIL}>`, // sender address
      to,
      cc,
      bcc,
      subject,
      text: body,
      html: body,
    };

    const info = await transporter.sendMail(message);
    return info;
  } catch (error) {
    console.error(error);
  }
}

// Example usage

/* 
sendMail({
    to:"vishal@gmail.com",
    subject:"Test",
    body:"Test mail"
})
*/