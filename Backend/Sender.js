const express = require("express");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const emailRoutes = require("./Routes/emailRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// API routes
app.use("/api/email", emailRoutes);

// Serve React frontend
app.use(express.static(path.join(__dirname,"..", "frontend", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname,"..","frontend", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
