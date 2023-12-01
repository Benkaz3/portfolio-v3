import express from "express";
import { Router } from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
const router = Router();

app.use(cors());
app.use(express.json());
app.use("/", router);

const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "alikojiro@gmail.com",
      pass: "hqsh xrdk urxj bbnv",
    },
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });

  router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message; 
    const mail = {
      from: name,
      to: "***************@gmail.com",
      subject: "Contact Form Submission",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Message Sent" });
      }
    });
  });