const express = require("express");
const nodemailer = require("nodemailer");
const randomstring = require("randomstring");

const app = express();
const port = 3001;

app.use(express.json());

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "your_email@gmail.com",
        pass: "your_password",
    },
});

const verificationCodes = {};

app.post("/send-code", async (req, res) => {
    const { email } = req.body;
    const verificationCode = randomstring.generate(4);
    verificationCodes[email] = verificationCode;

    const mailOptions = {
        from: "your_email@gmail.com",
        to: email,
        subject: "Verifikacioni kod",
        text: `Vaš verifikacioni kod je: ${verificationCode}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send("Kod je poslat na email.");
    } catch (error) {
        console.error("Greška prilikom slanja emaila:", error);
        res.status(500).send("Došlo je do greške prilikom slanja emaila.");
    }
});

app.post("/verify-code", (req, res) => {
    const { email, verificationCode } = req.body;

    if (verificationCodes[email] === verificationCode) {
        delete verificationCodes[email];
        res.status(200).send("Kod je tačan.");
    } else {
        res.status(400).send("Kod nije tačan.");
    }
});

app.listen(port, () => {
    console.log(`Server je pokrenut na portu ${port}`);
});
