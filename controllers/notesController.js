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
      return res.status(403).json({
        message: "User not found",
      });
    }

    const note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(405).json({
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

// Update a note
const updateNote = async (req, res) => {
  try {
    // find user
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(403).json({
        message: "User not found",
      });
    }

    // find note
    const note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(405).json({
        message: "Note not found",
      });
    }

    //check if user is the owner
    if (note.user.toString() !== req.user.id) {
      return res.status(403).json({
        message: "User not authorized",
      });
    }

    const updateNote = await Notes.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({
      message: "Note updated successfully",
      updateNote,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error updating note",
      error,
    });
  }
};

// Delete a note
const deleteNote = async (req, res) => {
  try {
    const note = await Notes.findByIdAndDelete(req.params.id);
    if (!note) {
      return res.status(405).json({
        message: "Note not found",
      });
    }

    if (note.user.toString() !== req.user.id)
      return res.status(403).json({ message: "Access denied" });

    res.status(200).json({
      message: "Note deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: "Error deleting note",
      error,
    });
  }
};

module.exports = {
  createNote,
  getNotes,
  getNote,
  updateNote,
  deleteNote,
};
