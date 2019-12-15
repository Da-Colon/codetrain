const db = require("./conn.js");

const getSomeMessages = user_id => {
  const query = db.any(`SELECT subject, message, date_sent, first_name, last_name from private_messages INNER JOIN users on users.id = sent_from WHERE sent_to = ${user_id} ORDER BY date_sent DESC LIMIT 5
  ;`);

  try {
    return query;
  } catch {
    return console.log(`ERROR: Unable to save to database`);
  }
};

module.exports = { getSomeMessages };
