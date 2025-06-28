const express = require("express");

const notesRouter = express.Router();

const {
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
} = require("../controllers/notesController");

const authMiddleware = require("../middlewares/authMiddleware");

// notesRouter.get("/", authMiddleware, getNotes);
// notesRouter.get("/:id", authMiddleware, getNote);
notesRouter.post("/", authMiddleware, createNote);
// notesRouter.put("/:id", authMiddleware, updateNote);
// notesRouter.delete("/:id", authMiddleware, deleteNote);

module.exports = notesRouter;
