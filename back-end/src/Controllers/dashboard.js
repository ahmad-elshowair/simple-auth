import db from '../database/pool.js';
import users from '../Queries/users.js'

const dashboard = async (req, res) => {
  try {
    const connection = await db.connect();
    const user = await connection.query(users.getAUser, [req.user]);
    if (user.rowCount > 1) {
      return res.status(401).json(`the user ${req.user} is not exist!`);
    }

    res.status(200).json(user.rows[0].user_name);

    connection.release();
  } catch (error) {
    console.error(error.message);
    res.json('something went wrong with the dashboard function')
  }
}

export default {
  dashboard
};