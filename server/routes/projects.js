import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

// Middleware to verify JWT
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid token" });
  }
};

// --- Demo In-Memory Projects (for now) ---
let projects = [
  { id: 1, title: "Website Redesign", status: "In Progress" },
  { id: 2, title: "Marketing Campaign", status: "Completed" },
];

// --- Routes ---

// Get all projects
router.get("/", verifyToken, (req, res) => {
  res.json(projects);
});

// Add new project
router.post("/", verifyToken, (req, res) => {
  const { title, status } = req.body;
  const newProject = {
    id: projects.length + 1,
    title,
    status: status || "Not Started",
  };
  projects.push(newProject);
  res.status(201).json(newProject);
});

// Update project
router.put("/:id", verifyToken, (req, res) => {
  const { id } = req.params;
  const { title, status } = req.body;
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) return res.status(404).json({ message: "Project not found" });

  project.title = title || project.title;
  project.status = status || project.status;

  res.json(project);
});

// Delete project
router.delete("/:id", verifyToken, (req, res) => {
  const { id } = req.params;
  projects = projects.filter((p) => p.id !== parseInt(id));
  res.json({ message: "Project deleted" });
});

export default router;
