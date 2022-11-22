// query of display all users 
const getUsers = 'SELECT * FROM users';
const getAUser = 'SELECT * FROM users WHERE user_id=$1';
const checkExistingUser = 'SELECT * FROM users WHERE user_email = $1';

const addUser = 'INSERT INTO users (user_name, user_email, user_password) VALUES($1, $2, $3)RETURNING *';
const deleteAUser = 'DELETE FROM users WHERE user_id =$1';
export default {
  getUsers,
  getAUser,
  checkExistingUser,
  addUser,
  deleteAUser
}