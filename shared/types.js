// Shared data models and interfaces for ProjectPulse SaaS

/**
 * @typedef {Object} User
 * @property {string} _id - MongoDB ObjectId string
 * @property {string} email - User's email
 * @property {string} [password] - Hashed password (never sent to frontend)
 */

/**
 * @typedef {Object} Project
 * @property {string} _id - MongoDB ObjectId string
 * @property {string} title - Project title
 * @property {"Pending" | "In Progress" | "Completed"} status - Current project status
 * @property {string} owner - User ID of project creator
 * @property {string} [createdAt] - Timestamp
 * @property {string} [updatedAt] - Timestamp
 */

/**
 * @typedef {Object} AuthResponse
 * @property {string} token - JWT access token
 */

/**
 * @typedef {Object} ApiError
 * @property {string} msg - Error message for failed requests
 */

/**
 * @typedef {Object} ApiResponse
 * @property {boolean} success - Whether the request succeeded
 * @property {any} [data] - Response payload
 * @property {string} [msg] - Optional message
 */

export const TYPES = {
  User: "User",
  Project: "Project",
  AuthResponse: "AuthResponse",
  ApiError: "ApiError",
  ApiResponse: "ApiResponse",
};
