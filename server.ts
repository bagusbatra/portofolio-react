import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import { contactFormSchema } from "./src/schemas/contactForm";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialized SMTP transporter for the contact form
let mailTransporter: ReturnType<typeof nodemailer.createTransport> | null = null;

function getMailTransporter() {
  if (!mailTransporter) {
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      throw new Error("SMTP_HOST, SMTP_PORT, SMTP_USER and SMTP_PASS must be set in the environment to send contact form emails.");
    }
    mailTransporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });
  }
  return mailTransporter;
}

// -----------------------------------------------------------------------------
// Contact Form API
// -----------------------------------------------------------------------------
app.post("/api/contact", async (req, res) => {
  const parsed = contactFormSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid form data.", details: parsed.error.flatten() });
    return;
  }

  const { name, email, company, projectType, message } = parsed.data;
  const toEmail = process.env.CONTACT_TO_EMAIL || "bagusbatr@gmail.com";

  try {
    const transporter = getMailTransporter();
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: toEmail,
      replyTo: email,
      subject: `New project inquiry from ${name} (${projectType})`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "-"}`,
        `Project Type: ${projectType}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    res.json({ success: true });
  } catch (error: any) {
    console.error("Contact form email error:", error.message);
    res.status(503).json({
      error: "The contact form mailer is not configured yet. Please email directly instead.",
      details: error.message,
    });
  }
});

// -----------------------------------------------------------------------------
// Vite Dev Server Middleware & Static Serving
// -----------------------------------------------------------------------------
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("Vite development middleware registered successfully.");
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
    console.log("Serving compiled assets from production build.");
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Bagus Batra Consultant Server successfully running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
