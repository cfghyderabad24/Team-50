import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const contactRouter = express.Router();

contactRouter.use(express.json());

contactRouter.post("/", async (req, res) => {
  console.log("Received donation request:", req.body);
  const { email, amount } = req.body;
  
  if (!email || !amount) {
    return res
      .status(400)
      .json({
        message: "Invalid request. Please provide all required fields.",
      });
  }

  try {
    const htmlContent = `
      <p>Hey, I am interested in donating to your cause.</p>
      <p>Here are my details:</p>
      <ul>
        <li>Email: ${email}</li>
        <li>Donation Amount: $${amount}</li>
      </ul>
    `;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL, // Your email address
        pass: process.env.PASSWORD, // Your email password or app-specific password
      },
    });

    const info = await transporter.sendMail({
      from: `"Donation Form" <${process.env.MAIL}>`,
      to: "saipavanreddy9866@gmail.com", // Replace with your email address
      subject: "New Donation Submission",
      html: htmlContent,
    });

    console.log("Mail sent successfully:", info.response);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default contactRouter;
