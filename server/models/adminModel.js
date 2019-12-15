const db = require("./conn.js");

const getAuthUsers = () => {
  const query = db.any(`SELECT * from users WHERE auth = false and user_types_id = 2`)
  try {
    return query;
  } catch {
    return console.log(`ERROR: Unable to connect to database`);
  }
}

const getAuthCompanyUsers = () => {
  const query = db.any(`SELECT * from users WHERE auth = false and user_types_id = 3`)
  try {
    return query;
  } catch {
    return console.log(`ERROR: Unable to connect to database`);
  }
}

module.exports = {getAuthUsers, getAuthCompanyUsers}