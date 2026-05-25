import express from "express";
import "dotenv/config";
import cors from "cors";
import Email from "./models/emails.js";
import "./db/db.js"

const PORT = process.env.PORT || 3000;

const app = express();

const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";

app.use(
  cors({
    origin: CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (_, res) => {
    return res.status(200).json({
        "status": "running"
    })
});

app.get("/emails", async (_, res) => {
    try {
        const emails = await Email.find();

        return res.status(200).json({
            "status": "success",
            "emails": emails
        })
    } catch (err) {
        console.log(`Could not read emails: ${err}`);
        return res.status(400).json({
            "status": "failed",
            "message": "Failed to read emails"
        })
    }
})

app.post("/emails", async (req, res) => {
    try {
        const { email, subject } = req.body;
        
        if (!email || !subject) {
            return res.status(400).json({
                status: "failed",
                message: "Email and subject are required"
            });
        }

        await Email.create({ email, subject });

        return res.status(201).json({
            "status": "success",
            "message": "Email created successfully"
        })
    } catch (err) {
        console.log("Error creating email: " + err);
        return res.status(500).json({
            "status": "failed",
            "message": "Internal server error"
        })
    }
})

app.listen(PORT, () => {
    console.log(`Server running at PORT: ${PORT}`);
})