const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  // Check if user is authenticated
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    res.status(401).json({
      message: "Missing token",
    });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      res.status(401).json({
        message: "Unauthorized User",
      });
    }
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({
      message: "Invalid token",
      error,
    });
  }
};

module.exports = authMiddleware;
