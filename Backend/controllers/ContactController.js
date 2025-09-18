import Contact from "../models/Contact.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export const createContact = async (req, res) => {
  try {
    // Nodemailer setup
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: `"Maxmeli Website" <${process.env.EMAIL_USER}>`,
      to: "info@maxmeli.com",
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>First Name:</strong> ${req.body.firstName}</p>
        <p><strong>Last Name:</strong> ${req.body.lastName}</p>
        <p><strong>Phone:</strong> ${req.body.phone}</p>
        <p><strong>Email:</strong> ${req.body.email}</p>
        <p><strong>Description:</strong> ${req.body.description}</p>
      `,
    };

    // 1️⃣ First send the email
    await transporter.sendMail(mailOptions);

    // 2️⃣ If email sent successfully, save to MongoDB
    const newContact = new Contact(req.body);
    await newContact.save();

    res.status(201).json({ message: "Email sent and data saved successfully!" });
  } catch (error) {
    console.error("Error in contact form submission:", error);
    res.status(500).json({ message: "Failed to send email or save data", error });
  }
};
