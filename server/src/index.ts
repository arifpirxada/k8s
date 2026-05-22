import express from "express";
import "dotenv/config";
import Email from "./models/emails.js";

const PORT = process.env.PORT || 3000;

const app = express();

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
            "message": "Failed not read emails"
        })
    }
})

app.post("/emails", async (req, res) => {
    try {
        await Email.create({ email: req.body.email });

        return res.status(201).json({
            "status": "success",
            "message": "Email created successfully"
        })
    } catch (err) {
        console.log("Error creating email: " + err);
        return res.status(400).json({
            "status": "failed",
            "message": "Could not create email"
        })
    }
})

app.listen(PORT, () => {
    console.log(`Server running at PORT: ${PORT}`);
})