import nodemailer from "nodemailer";

export const config = {
  runtime: 'edge'
}

module.exports = async (req, res) => {
  const formData = req.body;

  // Configure email transport (replace with your credentials)
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USERNAME, // Store credentials as environment variables
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Send the email
  try {
    await transporter.sendMail({
      from: "mordecai.mengesteab@gmail.com",
      to: "mordecai.mengesteab@gmail.com",
      subject: "New Form Submission",
      text: `Form Data: ${JSON.stringify(formData)}`,
    });

    res.status(200).json({ message: "Email sent!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
