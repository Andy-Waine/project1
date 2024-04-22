// GET
const getUsers = "SELECT * FROM users";
const getUserById = "SELECT * FROM users WHERE id = $1";
const checkEmailExists = "SELECT s FROM users s WHERE s.email = $1";

// POST
const addUser = "INSERT INTO users (username, password, firstname, lastname, email) VALUES ($1, $2, $3, $4, $5)";

// PUT
const updateUserPassword = "UPDATE users SET password = $1 WHERE id = $2";

// DELETE
const deleteUser = "DELETE FROM users WHERE id = $1";

module.exports = {
  getUsers,
  getUserById,
  checkEmailExists,
  addUser,
  deleteUser,
  updateUserPassword
}