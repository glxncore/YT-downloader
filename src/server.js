const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Serve frontend files
app.use(express.static(path.join(__dirname, "../public")));

// Start server
app.listen(PORT, () => {
    console.log(`YT Downloader running at http://localhost:${PORT}`);
});