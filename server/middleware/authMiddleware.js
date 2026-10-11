const jwt = require("jsonwebtoken");

exports.auth = async (req, res, next) => {
  try {
    // Authorization Header se token lo
    const authHeader = req.header("Authorization");

    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: "Token Missing",
      });
    }

    // "Bearer TOKEN" me se TOKEN nikaalo
    const token = authHeader.replace("Bearer ", "");

    // Verify JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // User info request me save karo
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid Token",
    });
  }
};