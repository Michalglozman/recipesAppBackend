require('dotenv').config();

const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers['x-access-token'];
  if (authHeader) {
      const token = authHeader.split(' ')[1];

      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
          if (err) {
              return res.sendStatus(403);
          }
          next();
      });
  } else {
      res.sendStatus(401);
  }
};
module.exports={authenticateJWT};
