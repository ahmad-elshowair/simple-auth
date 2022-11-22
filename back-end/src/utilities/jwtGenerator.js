import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const jwtGenerator = (user_id) => {
  const payload = {
    user_id,
  }
  return jwt.sign(payload, process.env.JWTSECRET, { expiresIn: "1hr" })
};
