const express = require("express");
const path = require("path");

const app = express();
const port = 3010;

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Serve index.html for all routes (SPA fix)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
