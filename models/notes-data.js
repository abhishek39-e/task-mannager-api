const express = require("express");
const Note = require("./Note");
const router = express.Router();

// Add note
app.post('/api/notes', async (req, res) => {
    try {
        const note = await Note.create(req.body)
        res.status(201).json(note)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

console.log("✅ UsersRoutes file loaded");
module.exports = router;