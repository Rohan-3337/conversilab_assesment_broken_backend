const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Unauthorized - No token provided" });
  }

  if (!authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: "Unauthorized - Invalid token format" });
  }

  try {
    const token = authHeader.substring(7); 
    const secret = process.env.JWT_SECRET || "default-secret-key";
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    
    next();  
    
  } catch (error) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};