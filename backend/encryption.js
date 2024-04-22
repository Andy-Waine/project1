
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
const plaintextPassword = "B4c0/\/";
var hash = bcrypt.hashSync("B4c0/\/", salt);

// Hasher function
function hashPassword(plaintextPassword, callback) {
  bcrypt.hashSync(plaintextPassword, salt, (err, hashedPassword) => {
    if (err) {
      console.error('Error hashing password: ', err);
      return;
    } else {
      // store the hashed password in the database
      console.log('Hashed password: ', hashedPassword);
    }
  });
}

// Checker function
function checkHashedPassword(plaintextPassword, hashedPassword, callback) {
  bcrypt.compareSync(plaintextPassword, hashedPassword, (err, res) => {
    if (err) {
      console.error('Error checking password: ', err);
      return;
    } else {
      // res == true
      console.log('res: ', res);
    }
  });
}

module.exports = {
  hashPassword,
  checkHashedPassword
};