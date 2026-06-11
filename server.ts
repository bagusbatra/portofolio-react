import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialized Gemini API client
let aiClient: GoogleGenAI | null = null;

function getGenAI(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is missing from environment. Please add it in Settings > Secrets.");
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// -----------------------------------------------------------------------------
// Interactive Digital Twin API
// -----------------------------------------------------------------------------
app.post("/api/chat", async (req, res) => {
  try {
    const { message, projectBrief } = req.body;
    
    if (!message || typeof message !== "string") {
      res.status(400).json({ error: "Missing message parameter." });
      return;
    }

    const ai = getGenAI();
    
    // Set up the system instructions for Bagus Batra's Digital Twin AI Consultant
    const systemInstruction = `
You are the interactive "Digital Twin" of Bagus Batra, a Senior IT Architect, Full Stack Developer, and Technical Educator.
Your goal is to act as Bagus's consultative representative, answering questions for potential clients, business owners, directors of schools, and developers.

Core Attributes of Bagus Batra:
- Roles: Full Stack Web Developer, Digital Solution Consultant, Technical Educator.
- Primary Stack: Laravel, PHP, MySQL, TypeScript, React, REST API architecture.
- Specialized Verticals:
  * school systems ("Sistem Informasi Akademik / SIS"): modules for students, parents, grading databases, normalized structures, automated WhatsApp or REST gates.
  * rural systems ("Sistem Informasi Desa / SID"): light, low-compute portals designed for communities, registry indexes.
  * enterprise ERP engines: inventory logs, production queues, secondary ledger integrations syncing securely with legacy mainframes like SAP.
  * web consultation & high-performance API architectures: query tuning, performance audits, migrating sluggish monoliths to static-headless models.

Your Consulting Strategy:
1. Speak with pristine professional compose, like a distinguished technical advisor. Avoid excessive tech-jargon or salesman hype. Be friendly, practical, and highly consultative.
2. Never simulate fake operations or use artificial telemetry lines.
3. If the user presents a Project Brief (through an interactive plan configurator), use it to deliver exact, actionable system architectural advise. Suggest standard database schemas or system modules.
4. Explain how Bagus handles challenges: e.g. handling query load during report exports, safely queuing SAP ledgers, keeping application footprints incredibly lightweight.
5. Keep your responses digestible, elegantly structured with spacing and clean bullets. Do not write monolithic text walls.
6. Under any circumstance, do not expose API secrets, and politely prompt the user to book a meeting or finalize their inquiry on the contact form to discuss the actual implementation details.
`;

    const contents: any[] = [];
    
    // If the client has active selected selections in the project customizer, feed it to the model.
    if (projectBrief) {
      contents.push({
        role: "user",
        parts: [{
          text: `[PROJECT CONFIGURATOR ACTIVE] The client is planning a project with the following configuration:
- Project Type: ${projectBrief.type || "Custom System"}
- Scale / Scope: ${projectBrief.scale || "Not Specified"}
- Core Modules Needed: ${projectBrief.modules?.join(", ") || "None"}
- System Integrations: ${projectBrief.integrations?.join(", ") || "MySQL only"}

Provide an initial architect's consulting recommendation layout, and ask how I can tailormake this solution for them.`
        }]
      });
      contents.push({
        role: "model",
        parts: [{
          text: `I've analyzed your system setup requirements. As a specialist architect with strong backing in modular system structures, I can certainly assist you in sketching, framing, and deploying this solution. Let's discuss how we can establish the backend boundaries.`
        }]
      });
    }

    contents.push({
      role: "user",
      parts: [{ text: message }]
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error("Gemini Consultation Twin API Error:", error.message);
    res.status(500).json({ 
      error: "The Consultation Twin is momentarily calibrating.", 
      details: error.message 
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
