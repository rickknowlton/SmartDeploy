import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;

    // Set up Nodemailer transport
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Set up email options
    const mailOptions = {
      from: '"SmartDeploy" <no-reply@smartdeploy.dev>',
      to: '"SmartDeploy" <go@smartdeploy.dev>',
      subject,
      text: `SmartDeploy Contact Form Message:\n\nFrom: ${name} -- ${email}\n\nMessage: ${message}`,
    };

    // Send email
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Error sending email" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
