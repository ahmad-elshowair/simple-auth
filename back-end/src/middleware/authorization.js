import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();


export const authorization = (req, res, next) => {
  try {

    const jwtToken = req.header('token');

    if (!jwtToken) {
      return res.status(403).json('you are not authorized!');
    }
    const payload = jwt.verify(jwtToken, process.env.JWTSECRET);
    req.user = payload.user_id;

    next();

  } catch (error) {
    console.error(error.message);
    return res.status(403).json('you are not authorized!');
  }
};

