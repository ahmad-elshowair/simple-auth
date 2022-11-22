import db from "../database/pool.js";
import users from "../Queries/users.js";
import bcrypt, { hash } from 'bcrypt';
import dotenv from 'dotenv';
import { jwtGenerator } from '../utilities/jwtGenerator.js';

dotenv.config();

const hashPassword = (password) => {
  return bcrypt.hashSync(password, Number(process.env.SALT_ROUND));
};

const getUsers = async (_req, res) => {
  try {
    const connection = await db.connect();
    connection.query(users.getUsers, (error, results) => {
      error ? (
        console.error(error)
      ) : (
        res.status(200).json({
          users: results.rows
        })
      );
    });
    connection.release();
  } catch (error) {
    console.error(`the error is: ${error}`);
  }
};


// get a user
const getAUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    const connection = await db.connect();
    const aUser = await connection.query(users.getAUser, [user_id]);
    if (aUser.rowCount < 1) {
      res.status(200).json({
        message: `the user of ${user_id} is not exist in the database`
      });
    } else {
      res.status(200).json({
        user: aUser.rows[0]
      });
    }
    connection.release();
  } catch (error) {
    console.error(`the error is: ${error}`);
  }
};

const remove = async (req, res) => {
  try {
    const { user_id } = req.params;
    const connection = await db.connect();
    const aUser = await connection.query(users.getAUser, [user_id]);
    if (aUser.rowCount < 1) {
      return res.status(200).json(`the user of id ${user_id} is not exist in the database!`);
    }

    connection.query(users.deleteAUser, [user_id], (error, results) => {
      error ? console.error(error) : res.status(200).json(`the user of id ${user_id} has deleted!`)
    });


  } catch (error) {
    console.error(`the error is: ${error.message}`);
    res.status(500).json({
      message: "server error"
    })
  }
}

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const connection = await db.connect();
    const user = await connection.query(users.checkExistingUser, [email]);
    if (user.rows.length) {
      return res.status(401).json({
        message: `the user of ${email} is exist in the database !`
      });
    }

    const newUser = await connection.query(users.addUser, [name, email, hashPassword(password)]);

    const token = jwtGenerator(newUser.rows[0].user_id);
    res.status(201).json({
      token: token,
      user: newUser.rows[0]
    });
    connection.release();
  } catch (error) {
    console.error(`the error is: ${error.message}`);
    res.status(500).json({
      message: "server error"
    })
  }
};


const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const connection = await db.connect();
    const user = await connection.query(users.checkExistingUser, [email]);
    if (user.rows.length < 1) {
      return res.status(401).json({
        message: `the user ${email} is not exist`
      })
    }

    const isPasswordValid = bcrypt.compareSync(password, user.rows[0].user_password, hash);

    if (!isPasswordValid) {
      return res.status(401).json({
        message: "the password is incorrect"
      })
    }

    const token = jwtGenerator(user.rows[0].user_id);

    res.json({ token });

    connection.release();
  } catch (error) {
    console.error(`the error is: ${error.message}`);
    res.status(500).json({
      message: "server error"
    })
  }
};



export default {
  getUsers,
  getAUser,
  register,
  login,
  remove,
}