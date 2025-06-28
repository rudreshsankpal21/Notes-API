const Notes = require("../models/Notes");
const User = require("../models/User");

// Create notes
const createNote = async (req, res) => {
  const { title, content } = req.body;
  try {
    const note = await Notes.create({
      title,
      content,
      user: req.user.id,
    });
    if (!note) {
      res.status(400).json({
        message: "Error creating note",
      });
    }

    res.status(201).json({
      message: "Note created successfully",
      note,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error creating note",
      error,
    });
  }
};

// get all notes
const getNotes = async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });

    if (notes) {
      return res.status(200).json([notes]);
    }
  } catch (error) {
    res.status(400).json({
      message: "Error getting notes",
      error,
    });
  }
};

// get note by id
const getNote = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(403).json({
        message: "Note not found",
      });
    }
    res.status(200).json(note);
  } catch (error) {
    res.status(400).json({
      message: "Error getting note",
      error,
    });
  }
};
module.exports = {
  createNote,
  getNotes,
  getNote,
};
