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

module.exports = {
  createNote,
};
