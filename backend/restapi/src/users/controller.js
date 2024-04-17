const pool = require('../../db.js');
const queries = require('./queries.js');

const getUsers = (req, res) => {
  pool.query(queries.getUsers, (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  })
};

const getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getUserById, [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  })
};

const addUser = (req, res) => {
  const { username, password, firstname, lastname, email } = req.body;

  // check if email exists in db
  pool.query(queries.checkEmailExists, [email], (error, results) => {
    if (results.rows.length) {
      res.send('Email already exists');
    }

    // add user to db
    pool.query(queries.addUser, [username, password, firstname, lastname, email], (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).send(`User added successfully.`);
    })
  })
}


module.exports = {
  getUsers,
  getUserById,
  addUser
}