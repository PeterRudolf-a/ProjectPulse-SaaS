import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";
import projectRoutes from "./routes/projects.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/projects", projectRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("ProjectPulse API is running...");
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
