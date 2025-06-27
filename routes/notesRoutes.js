const express = require("express");

const notesRouter = express.Router();

const {
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
} = require("../controllers/notesController");

notesRouter.get("/", getNotes);
notesRouter.get("/:id", getNote);
notesRouter.post("/", createNote);
notesRouter.put("/:id", updateNote);
notesRouter.delete("/:id", deleteNote);

module.exports = notesRouter;
